import './RadioInput.css'
import React, { useState } from "react";
 
function RadioInput(props){

    const [diff, setdiff] = useState(props.diff)
    function handleDiff(e){
        setdiff(e.target.value)
        props.setdiff(e.target.value)
        props.changediff(e.target.value)
    }
    
    return(
    <div className="radio-inputs">
        <label className="radio">
            <input type="radio" name="radio" value="easy" checked={diff === "easy"} onChange={handleDiff}/>
            <span className="name">Easy</span>
        </label>
        <label className="radio">
            <input type="radio" name="radio" value="medium" checked={diff === "medium"}  onChange={handleDiff}/>
            <span className="name">Medium</span>
        </label>
            
        <label className="radio">
            <input type="radio" name="radio" value="hard" checked={diff === "hard"} onChange={handleDiff}/>
            <span className="name">Hard</span>
        </label>
    </div> 
)
}
export default RadioInput