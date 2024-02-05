import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { GoGear } from "react-icons/go";
import Modal from './Modal';
import OffCanvas from './OffCanvas';
import ThemeSwitch from './ThemeSwitch';

function Navbar(props) {
    const [settingsact, setsettingsact] = useState('');
    const [insettings, setinsettings] = useState(false);

    useEffect(() => {
        if(insettings){
            setsettingsact('modal-active')
        }
        else{
            setsettingsact('')
        }
    }, [insettings])

    function settingshandleopen(){
        setinsettings(true)
    }
    function handleclose(){
        setinsettings(false)
    }

    function SettingsModal(){
        return(
            <div>
                <h3 className='modal-title'>Settings</h3>
                
            </div>
        )
    }
    
  return (
    <div className='Navbar' data-theme="">
        <div className='left'>
            <h2 className='navtitle'>Codle</h2>
        </div>
        <div className='right'>
            <span className='navicon' onClick={settingshandleopen}><GoGear /></span>
        </div>
        <div className={`overlay-bg  ${settingsact}`} onClick={handleclose}></div>
        <Modal active = {settingsact} setinmodal={setinsettings} content={SettingsModal()}/>
    </div>
  )
}

export default Navbar