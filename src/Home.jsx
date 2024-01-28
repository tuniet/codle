import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";

function Home(props) {
  /*
  Dificulty:
  0 -> codelength 4, yellow, no rep
  1 -> codelength 6, yellow, no rep
  2 -> codelength 6, yellow, rep
  3 -> codelength 4, no yellow, no rep
  4 -> codelength 4, no yellow, rep
  5 -> codelength 6, no yellow, rep
  */
  function setdiff(difficulty) {
    switch (difficulty) {
      case 0:
        props.setcodelength(4)
        props.setyellow(true)
        props.setrep(false)
        break;
      case 1:
        props.setcodelength(6)
        props.setyellow(true)
        props.setrep(false)
        break;
      case 2:
        props.setcodelength(6)
        props.setyellow(true)
        props.setrep(true)
        break;
      case 3:
        props.setcodelength(4)
        props.setyellow(false)
        props.setrep(false)
        break;
      case 4:
        props.setcodelength(4)
        props.setyellow(false)
        props.setrep(true)
        break;
      case 5:
        props.setcodelength(6)
        props.setyellow(false)
        props.setrep(true)
        break;
      default:
      // do nothing
    }
  }

  return (
    <div className='Game'>
      <h1 className='title'>CODLE</h1>
			<h3> Select difficulty</h3>
      <div className='diffselection'>
        <Link to="/game" className='diffbutton d0' onClick={() => setdiff(0)}>0</Link>
        <Link to="/game" className='diffbutton d1' onClick={() => setdiff(1)}>1</Link>
        <Link to="/game" className='diffbutton d2' onClick={() => setdiff(2)}>2</Link>
        <Link to="/game" className='diffbutton d3' onClick={() => setdiff(3)}>3</Link>
        <Link to="/game" className='diffbutton d4' onClick={() => setdiff(4)}>4</Link>
        <Link to="/game" className='diffbutton d5' onClick={() => setdiff(5)}>5</Link>
      </div>
      

    </div>
  )
}

export default Home