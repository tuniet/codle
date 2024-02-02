import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { GoGear } from "react-icons/go";
import Modal from './Modal';
import ThemeSwitch from './ThemeSwitch';

function Navbar(props) {
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
    function handleclose(){
        settingssetinmodal(false)
    }
    function SettingsModal(){
        return(
            <div>
                <h3 className='modal-title'>Settings</h3>
                <div className='settings settings-switch'>Switch to dark mode <ThemeSwitch setisdark = {props.setisdark} isDark = {props.isDark} /></div>
            </div>
        )
    }
    
  return (
    <div className='Navbar' data-theme="">
        <div className='left'><h2 className='navtitle'>Tuniet Games</h2></div>
        <div className='right'>
            <span className='navicon' onClick={settingshandleopen}><GoGear /></span>
        </div>
        <div className={`overlay-bg  ${settingsmodalactive}`} onClick={handleclose}></div>
        <Modal active = {settingsmodalactive} setinmodal={settingssetinmodal} content={SettingsModal()}/>
    </div>
  )
}

export default Navbar