import React, { useState } from "react";

import Button from "../Button/SubmitButton";
import './modal.css'

function Modal(props) {
    
    const cancel = () => {
        props.handleReset()
        props.toggleModal()
    }
    const handleReset = () => {
        props.handleReset()
    }
    const handleSubmit = () => {
        props.handleSubmit()
        props.toggleModal()
    }

    if(!props.shouldShowPopup){
        return null ;
    }
    return (
        <div className="layover">
            <div className="content">
                <div className="modalheader">
                    <h3>{ props.header }</h3>
                </div>
                <div className="modalbody">
                  {props.children}
                </div>
                <div className="modalbutton">
                            <Button handleClick={handleSubmit} varient="contained" label="Submit" />
                            <Button handleClick={handleReset} varient="simple" label="Reset" />
                            <Button handleClick={cancel} varient="outlined" label="Cancel" />
                </div>
            </div>
        </div>
    );
}
    
export default Modal