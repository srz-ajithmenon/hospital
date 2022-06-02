import React from "react";

import './button.css'

function SubmitButton(props) {
    const handleClick = (event) => {
        props.handleClick()
        event.preventDefault();
    } 
    return (       
        <button className={props.varient || "contained"} onClick={handleClick} > {props.label} </button>
    );
}

export default SubmitButton