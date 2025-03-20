import React, { useState } from "react";
import Select from "react-select";
import './Filters.css';

const locations = [
    { value: "Egypt",  label: "Egypt" },
    { value: "Riyadh", label: "Riyadh" },
    { value: "Jeddah", label: "Jeddah" },
    { value: "Dubai",  label: "Dubai" },
    { value: "Beirut", label: "Beirut" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Muscat", label: "Muscat" },
    { value: "London", label: "London" },
    { value: "Italy",  label: "Italy" },
    { value:  "Berlin", label:"Berlin"}
];

function Filters({ setFilters }){
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleApplyFilters = () => {
        setFilters({
            location: selectedLocation ? selectedLocation.value : "" 
        });       
    };
    return(
        <div className="filter mt-4">
            <div className="filters">
                <p className="mt-4"><strong>Filter by Location:</strong></p>
                <Select 
                    options={locations} 
                    value={selectedLocation} 
                    onChange={(option) => setSelectedLocation(option)} 
                    placeholder="Select a location"
                    className="select"
                />
            </div>
            <div className="btn-filter">
                <button className="btn btn-primary" onClick={handleApplyFilters}>
                    Apply Filter
                </button>
            </div>
        </div>
    )
}
export default Filters;