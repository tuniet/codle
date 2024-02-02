import './HowToPlay.css';
import React, {useState, useEffect} from 'react';
import { GoQuestion } from "react-icons/go";
import Modal from './Modal';

function HowtoPlay() {
  
    const [howtomodalactive, howtosetmodalactive] = useState('');
    const [howtoinmodal, howtosetinmodal] = useState(false);
  
    useEffect(() => {
      if(howtoinmodal){
        howtosetmodalactive('modal-active')
      }
      else{
        howtosetmodalactive('')
      }
    }, [howtoinmodal])



    function howtohandleopen(){
        howtosetinmodal(true)
    }
   
    function handleclose(){
        howtosetinmodal(false)
    }
    function HowtoModal(){
        return(
            <div className='howto'>
                <h3 className='modal-title'>How to play</h3>
                <p className='modal-text'>Type numbers to guess the code. When you submit a guess, the game will show you how close you are to the correct answer with either a green, yellow, or red "hint."</p>
                <ul>
                    <li>A<strong style={{color: "green"}}> green</strong> hint means a color <strong>is in the code and in the proper position</strong>.</li>
                    <li>A <strong style={{color: "orange"}}> yellow</strong> hint means a color <strong>is in the code but not in the proper position</strong>.</li>
                    <li>A <strong style={{color: "red"}}>grey</strong> hint means a color is not in the code at all.</li>
                </ul>
            </div>
        )
    }
  return (
    <div className='HowtoPlay' data-theme="">
        <span className='icon' onClick={howtohandleopen}><GoQuestion /></span>
        <div className={`overlay-bg ${howtomodalactive}`} onClick={handleclose}></div>
        <Modal active = {howtomodalactive} setinmodal={howtosetinmodal} content={HowtoModal()}/>
    </div>
  )
}

export default HowtoPlay