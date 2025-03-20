import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon ,faSun} from "@fortawesome/free-solid-svg-icons";
import './ModeButton.css';

function ModeButton(){
    const [dark,setDark]=useState(false);
    const changeMode=()=>{
       setDark(!dark);
       document.documentElement.style.setProperty('--bg-color',dark?'linear-gradient(to right,#100e0e, #3a3a3a)':'#fff');
       document.documentElement.style.setProperty('--text-color',dark?'#fff':'#2a2a29');
       document.documentElement.style.setProperty('--color',dark?'#fe3f97':'#fd946a');
      }
     return(
        <div className="mode">
            {dark? <FontAwesomeIcon icon={faMoon} className="dark-icon icon" onClick={changeMode}/>:
             <FontAwesomeIcon icon={faSun} className="dark-icon icon" onClick={changeMode}/>
            }
        </div>
     )
}
export default ModeButton;