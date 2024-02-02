import './Modal.css';
import React from 'react';
import { IoMdClose } from "react-icons/io";

function Modal(props) {

    function handleClose() {
        props.setinmodal(false);
    }
    function Content(){
      return props.content
    }
    
  return (
    <div className={`contact-modal ${props.active}`}>
        <span className='modal-close-button' onClick={handleClose}><IoMdClose /></span>
        <Content />
        
    </div>
  );
}
export default Modal