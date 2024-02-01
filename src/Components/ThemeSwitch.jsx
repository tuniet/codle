import './ThemeSwitch.css'
import React, {useState, useEffect} from "react";

function ThemeSwitch(props){
const [toggled, settoggled] = useState(false)

function handleToggle(){
    settoggled(!toggled)
}
return(
    <div className="toggle-switch">
        <label className="switch">
            <input type="checkbox" checked={toggled} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    </div>  
)
}
export default ThemeSwitch