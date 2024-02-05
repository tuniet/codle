import './OptionsMenu.css';
import React , { useState, useEffect}from 'react';
import Modal from './Modal';
import RadioInput from './RadioInput';
import ThemeSwitch from './ThemeSwitch';
import { AiOutlineSliders } from "react-icons/ai";

function OptionsMenu(props) {
  
    const [settingsmodalactive, settingssetmodalactive] = useState('');
    const [settingsinmodal, settingssetinmodal] = useState(false);

    useEffect(() => {
        if(settingsinmodal){
            settingssetmodalactive('modal-active')
        }
        else{
            settingssetmodalactive('')
        }
    }, [settingsinmodal])

    function settingshandleopen(){
        settingssetinmodal(true)
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
                  <h3 className='modal-title'>Game settings</h3>
                  <div className='settings settings-choose'>Select difficulty: <div className='diff'><RadioInput setdiff = {props.setdiff} diff = {props.diff} changediff = {changediff}/><button onClick={handlediffswitch}>Change Diffculty</button></div></div>
                  <div className='settings settings-switch'>Switch to dark mode <ThemeSwitch setisdark = {props.setisdark} isDark = {props.isDark} /></div>
              </div>
          )
      }
      function handleclose(){
        settingssetinmodal(false)
    }

  return (
    <div className='OptionsMenu' data-theme="">
        <span className='icon' onClick={settingshandleopen}><AiOutlineSliders /></span>
        <div className={`overlay-bg ${settingsmodalactive}`} onClick={handleclose}></div>
        <Modal active = {settingsmodalactive} setinmodal={settingssetinmodal} content={SettingsModal()}/>

    </div>
  )
}

export default OptionsMenu