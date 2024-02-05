import './UsedLetters.css';
import React, {useState, useEffect} from 'react';
import { TbListLetters  } from "react-icons/tb";
import Modal from './Modal';

function UsedLetters(props) {
  
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
    function UsedLettersModal(){
        return(
            <section className='letters'>
                <div className='keyrow'>
                {props.usedletters.map((l, i) =>{
                  if(i < 10)
                  return <span className='letter' style={{backgroundColor: l.color}}>{l.letter}</span>
                })}
                </div>
                <div className='keyrow'>
                {props.usedletters.map((l, i) =>{
                  if(i >= 10 && i < 19)
                  return <span className='letter' style={{backgroundColor: l.color}}>{l.letter}</span>
                })}
                </div>
                <div className='keyrow'>
                {props.usedletters.map((l, i) =>{
                  if(i >= 19)
                  return <span className='letter' style={{backgroundColor: l.color}}>{l.letter}</span>
                })}
                </div> 
            </section>
        )
    }
  return (
    <div className='HowtoPlay' data-theme="">
        <span className='icon' onClick={howtohandleopen}><TbListLetters  /></span>
        <div className={`overlay-bg ${howtomodalactive}`} onClick={handleclose}></div>
        <Modal active = {howtomodalactive} setinmodal={howtosetinmodal} content={UsedLettersModal()}/>
    </div>
  )
}

export default UsedLetters