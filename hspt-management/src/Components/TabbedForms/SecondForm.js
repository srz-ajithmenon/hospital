import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function SecondForm (props) {
    // const [seconddata,setUpdate]=useState({ 
    //     firstname:"", lastname:"", phone:"", email:"", gender:"", height:"", identify:""
    // })

    // const handleChange = (val1,val2) =>{ setUpdate({ ...seconddata, [val2]:val1 }) }
    // console.log("*******",seconddata)
    
    return (
        <div>
            <div>
                <div className="modallabels">
                    <label>one</label>
                </div>
                <div className="divider">    
                    <Inputbox 
                        type="text" 
                        name="firstname" 
                        placeholder="" 
                        label="First Name" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.firstname}
                    />
                    <Inputbox 
                        type="number" 
                        name="lastname" 
                        placeholder="" 
                        label="Second Name" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.lastname}
                    />
                </div>
                <div className="modallabels">
                    <label>two</label>
                </div>
                <div className="divider">    
                    <Inputbox 
                        type="number" 
                        name="phone" 
                        placeholder="" 
                        label="Phone No." 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.phone}
                    />
                    <Inputbox 
                        type="email" 
                        name="email" 
                        placeholder="" 
                        label="E-mail ID."
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.email}
                    />
                </div>
                <div className="modallabels">
                    <label>three</label>
                </div>
                <div className="divider">    
                    <Inputbox 
                        type="text"
                        name="gender" 
                        placeholder="" 
                        label="Gender" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.gender}
                    />
                    <Inputbox 
                        type="text" 
                        name="height" 
                        placeholder="" 
                        label="height (in cm)" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.height}
                    />
                </div>
                <div className="modallabels">
                    <label>four</label>
                </div>
                <div>    
                    <Inputbox 
                        type="text" 
                        name="identify" 
                        placeholder="" 
                        label="Identify Mark" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.identify}
                    />
                </div>
            </div>  
        </div>
    );
}

export default SecondForm