import React, { useState } from "react";

import './button.css'

function SubmitButton(props) {
    const handleClick = (event) => {
        props.handleClick()
        event.preventDefault();
    } 
    return (
        <div>
            <button className={props.classname} onClick={handleClick} > {props.name} </button>
        </div>
    );
}
    
export default SubmitButton