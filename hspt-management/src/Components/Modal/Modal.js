import React, { useState } from "react";

import './modal.css'

function Modal(props) {
    
    const cancel = () => {
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
                <div className="divcenter">
                    <h3>{ props.header }</h3>
                    <p>{props.content}</p>
                </div>
                <div>
                  {props.children}
                </div>
                <div className="divright">
                            <button onClick={handleSubmit} className="submit" >Submit</button>
                            <button onClick={handleReset} className="reset" >Reset</button>
                            <button onClick={cancel} className="cancel" >Cancel</button>
                </div>
            </div>
        </div>
    );
}
    
export default Modal