import React, { useState } from "react";

import './input.css'

function Inputbox(props) {
    const handleChange = (event) =>{
        var name=event.target.name 
        props.handleChange(name,event.target.value)
    }
    return (
        <div className="ascolumn">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder} 
                className="normal" 
                onChange={handleChange}
            />
        </div>
    );
}
    
export default Inputbox