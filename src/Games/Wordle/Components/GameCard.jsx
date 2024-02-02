import './GameCard.css'
import React from "react";
 import {Link} from 'react-router-dom'
function GameCard(props){

return(
    <Link to={props.link}>
    <div style={{backgroundImage: `url(${props.background})`}} className='gamecard'>
        
    </div>
    </Link>
      
)
}
export default GameCard