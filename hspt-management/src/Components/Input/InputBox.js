import React from "react";

import './input.css'

function Inputbox(props) {
    const handleChange = (event) =>{
        const {name, value } = event.target
        props.handleChange(name,value)
    }
    return (
        <div className="ascolumn">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder} 
                value = {props.value}
                className={props.varient || "input_outlined" }
                onChange={handleChange}
            />
            <div className="errorMsg">
            {props.errorMsg}
            </div>
        </div>
    );
}
    
export default Inputbox