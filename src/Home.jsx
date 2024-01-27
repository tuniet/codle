import './Home.css';
import React ,{ useState } from 'react';
import { Link } from "react-router-dom";

function Home(props) {

    const [difficulty, setdifficulty] = useState(0);
    /*
    Dificulty:
    0 -> codelength 4, yellow, no rep
    1 -> codelength 6, yellow, no rep
    2 -> codelength 6, yellow, rep
    3 -> codelength 4, no yellow, no rep
    4 -> codelength 4, no yellow, rep
    5 -> codelength 6, no yellow, rep
    */
    function setdiff(){
        //set dificulty
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
        }
    }

    function handlediff(i){
        setdifficulty(i)
        setdiff()
    }

  return (
    <div>
        home
        <Link to="/game">Game</Link>
        <button  onClick={() => handlediff(0)}>0</button>
        <button  onClick={() => handlediff(1)}>1</button>
        <button  onClick={() => handlediff(2)}>2</button>
        <button  onClick={() => handlediff(3)}>3</button>
        <button  onClick={() => handlediff(4)}>4</button>
        <button  onClick={() => handlediff(5)}>5</button>
    </div>
  )
}

export default Home