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
                <p className='modal-text'>Type letters and get the word in 6 attempts. When you submit a guess, the lettetd will change color to show you how close you were to the answer with either a green, yellow, or red "hint."</p>
                <ul>
                    <li>A<strong style={{color: "green"}}> green</strong> letter means it <strong>is in the word and in the proper position</strong>.</li>
                    <li>A <strong style={{color: "orange"}}> yellow</strong> letter means it <strong>is in the word but not in the proper position</strong>.</li>
                    <li>A <strong style={{color: "red"}}>red</strong> letter means it is not in the word at all.</li>
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