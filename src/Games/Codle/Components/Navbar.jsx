import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { GoQuestion, GoGear } from "react-icons/go";
import Modal from './Modal';
import ThemeSwitch from './ThemeSwitch';
import RadioInput from './RadioInput';

function Navbar(props) {
    const [settingsmodalactive, settingssetmodalactive] = useState('');
    const [settingsinmodal, settingssetinmodal] = useState(false);
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

    useEffect(() => {
        if(settingsinmodal){
            settingssetmodalactive('modal-active')
        }
        else{
            settingssetmodalactive('')
        }
    }, [settingsinmodal])

    function howtohandleopen(){
        howtosetinmodal(true)
    }
    function settingshandleopen(){
        settingssetinmodal(true)
    }
    function handleclose(){
        howtosetinmodal(false)
        settingssetinmodal(false)
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
    function changediff(dif){
      if(dif === "easy"){
        props.setcodelength(4)
        props.setyellowact(true)
      }
      else if(dif === "medium"){
        props.setcodelength(4)
        props.setyellowact(false)
      }
      else if(dif === "hard"){
        props.setcodelength(6)
        props.setyellowact(false)
      }
    }
    function handlediffswitch(){
      props.handlereload()
      handleclose()
    }
    function SettingsModal(){
        return(
            <div>
                <h3 className='modal-title'>Settings</h3>
                <div className='settings settings-switch'>Switch to dark mode <ThemeSwitch setisdark = {props.setisdark} isDark = {props.isDark} /></div>
                <div className='settings settings-choose'>Switch difficulty: <div className='diff'><RadioInput setdiff = {props.setdiff} diff = {props.diff} changediff = {changediff}/><button onClick={handlediffswitch}>Change Diffculty</button></div></div>
            </div>
        )
    }
    
  return (
    <div className='Navbar' data-theme="">
        <div className='left'><h2 className='navtitle'>CODLE</h2></div>
        <div className='right'>
            <span className='navicon' onClick={howtohandleopen}><GoQuestion /></span>
            <span className='navicon' onClick={settingshandleopen}><GoGear /></span>
        </div>
        <div className={`overlay-bg ${howtomodalactive} ${settingsmodalactive}`} onClick={handleclose}></div>
        <Modal active = {howtomodalactive} setinmodal={howtosetinmodal} content={HowtoModal()}/>
        <Modal active = {settingsmodalactive} setinmodal={settingssetinmodal} content={SettingsModal()}/>
    </div>
  )
}

export default Navbar