import React , {useState,useEffect} from "react";
import { Outlet , useLocation } from "react-router-dom";
import Title from "../title/Title";
import Search from "../search/Search";
import Filters from "../filters/Filters";
import Card from "../card/Card";
import NotFound from '../noEvents/NotFound';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Content.css';

function Content(){
    const [events,setEvents] = useState([]);
    const [filteredEvents,setFilteredEvents]=useState([]);
    const [searchQuery,setSearchQuery]=useState("");
    const [filters, setFilters] = useState({ location: "" });

    useEffect(()=>{
        fetch('/data/data.json')
        .then(res=>res.json())
        .then(data=>{
            setEvents(data.eventsArr);
            setFilteredEvents(data.eventsArr);
         })
        .catch(err=>console.error('Error, Loading data',err))
    },[])
    useEffect(() => {
        let filtered = events;
        if (searchQuery.trim() !== "") {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (filters.location) {
            filtered = filtered.filter(item => item.location === filters.location);
        }
        setFilteredEvents(filtered);
    }, [searchQuery, filters, events]);
  
    const location = useLocation();
    return(
        <div className="content">
            <Title/>
            <div className="container-fluid container-md mt-md-5 mt-4">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-5 col-12 p-2">
                         <Search setSearchQuery={setSearchQuery}/>
                         <Filters setFilters={setFilters} />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-7 col-12">
                        <div className="container-fluid">
                            <div className="row">
                               {location.pathname === "/" && (
                                    <div className="p-0">
                                        {filteredEvents.length > 0 ? (
                                            <Swiper style={{height:'480px'}} className="swiper"
                                                spaceBetween={5}  
                                                slidesPerView={3}  
                                                navigation={true}  
                                                modules={[Navigation]}  
                                                breakpoints={{
                                                    1200:{ slidesPerView: 3 },
                                                    1024:{ slidesPerView: 2 },
                                                    992: { slidesPerView: 2},
                                                    600: { slidesPerView: 1},
                                                    0:{ slidesPerView: 1}
                                                }}>
                                                {filteredEvents.map((event) => (
                                                    <SwiperSlide key={event.id}>
                                                        <Card event={event}/>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        ) : (
                                            <NotFound />
                                        )}
                                    </div>  
                                    )}
                               <Outlet /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;