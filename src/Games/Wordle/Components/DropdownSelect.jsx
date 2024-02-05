import './DropdownSelect.css'
import React, {useState, useEffect} from "react";
 
function DropdownSelect(props){
  
  const [active, setActive] = useState("")
  const [inDrop, setinDrop] = useState(false)
  const [value, setValue] = useState(props.placeholder)

  useEffect(() => {
    if(inDrop){
      setActive('active')
    }
    else{
      setActive('')
    }
  }, [inDrop])

  function handledropdownopen(){
    setinDrop(true)
  }
  function handledropdownclose(){
    setinDrop(false)
  }
    return (
      <div className="container">
      <span className="choose">{props.title}</span>
      <div className={`foreground ${active}`} onClick={handledropdownclose}></div>
        <div className={`dropdown ${active}`} onClick={handledropdownopen}>
          <div className="select">
            <span>{value}</span>
          </div>
          <input type="hidden" name="select"/>
          <ul className={`dropdown-menu ${active}`}>
            {props.options.map((o, i) => {
              return <li key={i} onClick={() => {setValue(o); props.setSelected(o)}}>{o}</li>
            })}
          </ul>
        </div>
  </div>
    );
  
}
export default DropdownSelect