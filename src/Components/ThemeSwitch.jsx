import './ThemeSwitch.css'
import React from "react";
 
function ThemeSwitch(props){

function handleToggle(){
    props.setisdark(!props.isDark)
}
return(
    <div className="toggle-switch">
        <label className="switch">
            <input name='theme-switch' type="checkbox" checked={props.isDark} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    </div>  
)
}
export default ThemeSwitch