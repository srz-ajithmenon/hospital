import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function SecondForm (props) {
    const [seconddata,setUpdate]=useState({ 
        firstname:"", lastname:"", phone:"", email:"", address:"", city:"", review:""
    })

    const handleChange = (val1,val2) =>{ setUpdate({ ...seconddata, [val2]:val1 }) }
    console.log("*******",seconddata)
    
    return (
        <div>
            <div>
                <div className="modallabels">
                    <label>one</label>
                </div>
                <div className="divider">    
                    <Inputbox type="text" name="firstname" placeholder="" label="First Name" handleChange={handleChange}/>
                    <Inputbox type="number" name="lastname" placeholder="" label="Second Name" handleChange={handleChange}/>
                </div>
                <div className="modallabels">
                    <label>two</label>
                </div>
                <div className="divider">    
                    <Inputbox type="number" name="phone" placeholder="" label="Phone No." handleChange={handleChange}/>
                    <Inputbox type="email" name="email" placeholder="" label="E-mail ID." handleChange={handleChange}/>
                </div>
                <div className="modallabels">
                    <label>three</label>
                </div>
                <div className="divider">    
                    <Inputbox type="text" name="address" placeholder="" label="Address" handleChange={handleChange}/>
                    <Inputbox type="text" name="city" placeholder="" label="City" handleChange={handleChange}/>
                </div>
                <div className="modallabels">
                    <label>four</label>
                </div>
                <div>    
                    <Inputbox type="text" name="review" placeholder="" label="Review" handleChange={handleChange}/>
                </div>
            </div>  
        </div>
    );
}

export default SecondForm