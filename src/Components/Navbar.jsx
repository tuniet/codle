import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { GoGear } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import Modal from './Modal';
import OffCanvas from './OffCanvas';
import ThemeSwitch from './ThemeSwitch';
import { TbCircleLetterW, TbHexagonLetterC } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [settingsact, setsettingsact] = useState('');
    const [insettings, setinsettings] = useState(false);
    const [menuact, setmenuact] = useState('');
    const [inmenu, setinmenu] = useState(false);

    useEffect(() => {
      if(inmenu){
        setmenuact('offcanvas-active')
      }
      else{
        setmenuact('')
      }
    }, [inmenu])

    useEffect(() => {
        if(insettings){
            setsettingsact('modal-active')
        }
        else{
            setsettingsact('')
        }
    }, [insettings])

    function menuhandleopen(){
        setinmenu(true)
    }

    function settingshandleopen(){
        setinsettings(true)
    }
    function handleclose(){
        setinsettings(false)
        setinmenu(false)
    }
    function OffCanvasMenu(){
        return(
          <div className='offcanvas-content'>
            <Link to=''><h2 className='offcanvas-title'>Tuniet Games</h2></Link>
            <Link to='codle'><div className='mainmenu-item'><span className='menuicon'><TbHexagonLetterC /></span>CODLE</div></Link>
            <Link to='wordle'><div className='mainmenu-item'><span className='menuicon'><TbCircleLetterW /></span>WORDLE</div></Link>
          </div>
        )
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
        <div className='left'>
        <span className="navicon" onClick={menuhandleopen}><IoIosMenu /></span>
            <Link className='link' to=""><h2 className='navtitle'>Tuniet Games</h2></Link>
        </div>
        <div className='right'>
            <span className='navicon' onClick={settingshandleopen}><GoGear /></span>
        </div>
        <div className={`overlay-bg  ${settingsact} ${menuact}`} onClick={handleclose}></div>
        <Modal active = {settingsact} setinmodal={setinsettings} content={SettingsModal()}/>
        <OffCanvas setincanvas={setinmenu} active = {menuact} content = {OffCanvasMenu()}/>
    </div>
  )
}

export default Navbar