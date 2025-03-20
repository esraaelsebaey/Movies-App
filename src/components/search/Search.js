import React from "react";
import './Search.css';

function Search({setSearchQuery}){
    return(
        <div className="search">
            <input type="text" className="form-control" placeholder="Search by Name"
            onChange={e=>setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default Search;