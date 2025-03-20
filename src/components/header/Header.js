import React from "react";
import ModeButton from "../modeButton/ModeButton";
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="container-fluid container-md">
                <div className="row">
                    <div className="col-6">
                        <h3 className="logo mt-4">Events</h3>
                    </div>
                    <div className="col-6">
                       <div className="d-flex justify-content-end">
                          <ModeButton/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;