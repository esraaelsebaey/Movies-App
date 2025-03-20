import React , {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import './Card.css';

function Card({event}){
  const overlayRef=useRef(null);
  const backRef=useRef(null);
  const content=useRef(null);
  const viewDetails=()=>{
    if(overlayRef.current && backRef.current){
        overlayRef.current.style.height='100%';
        content.current.style.display='flex';
    }
  }
  const goBack=()=>{
    if(overlayRef.current && backRef.current){
        overlayRef.current.style.height='0';
        content.current.style.display='none';
    }
  }
   return(
        <div className="card-content position-relative">
            <div className="card-image">
                <img src={event.image}/>
            </div>
            <div className="card-desc mt-3 mx-1">
                <p><strong>{event.name}</strong></p>
                <p><strong>Price:</strong>{event.price}$</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger mt-2" onClick={viewDetails}>View Details</button>
                    <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
                </div>
            </div>
            <div className="overlay position-absolute" id="overlay" ref={overlayRef}>
                <div className="content flex-column justify-content-center align-content-center px-4" style={{display:'none',marginTop:'0',height:'100%'}} ref={content}>
                    <p className="text-white"><strong>{event.name}</strong></p>
                    <p className="text-white"><strong>Date:</strong> {event.date}</p>
                    <p className="text-white"><strong>Time:</strong> {event.time}</p>
                    <p className="text-white"><strong>Duration:</strong> {event.duration}</p>
                    <p className="text-white"><strong>Location:</strong> {event.location}</p>
                    <p className="text-white"><strong>Capacity:</strong> {event.capacity}</p>
                    <p className="text-white"><strong>Description:</strong> {event.description}</p>
                    <button className="btn btn-danger" onClick={goBack} id="back" ref={backRef}>Back</button>
                </div>
            </div>
        </div>
   )
}
export default Card;