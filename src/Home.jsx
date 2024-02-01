import './Home.css';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Navbar from './Components/Navbar';

function Home(props) {
  const[backgroundcolor, setbackgroundcolor] = useState("#fff")
  /*
  Dificulty
  3 -> codelength 4, yellow
  4 -> codelength 4, no yellow
  5 -> codelength 6, no yellow
  */
  function setdiff(difficulty) {
    switch (difficulty) {
      case 0:
        props.setcodelength(4)
        props.setyellow(true)
        break;
      case 1:
        props.setcodelength(4)
        props.setyellow(false)
        break;
      case 2:
        props.setcodelength(6)
        props.setyellow(false)
        break;
      default:
      // do nothing
    }
  }

  return (
    <div className='Home' data-theme="dark">
      <Navbar />
      <h1 className='title'>CODLE</h1>
			<h3> Select difficulty</h3>
      <div className='diffselection'>
        <Link to="/game" className='diffbutton d0' onClick={() => setdiff(0)}>EASY</Link>
        <Link to="/game" className='diffbutton d1' onClick={() => setdiff(1)}>MEDIUM</Link>
        <Link to="/game" className='diffbutton d2' onClick={() => setdiff(2)}>HARD</Link>
      </div>
      

    </div>
  )
}

export default Home