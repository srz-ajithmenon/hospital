import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function ThirdForm (props) {
    // const [thirddata,setUpdate]=useState({ 
    //     address:"", city:"", state:"", country:""
    // })

    // const handleChange = (val1,val2) =>{ setUpdate({ ...thirddata, [val2]:val1 }) }
    // console.log("*******",thirddata)
    
    return (
        <div>
            <div>
                <div className="modallabels">
                    <label>one</label>
                </div>
                <div className="divider">    
                    <Inputbox 
                        type="text" 
                        name="address" 
                        placeholder="" 
                        label="Address" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.address}
                    />
                    <Inputbox 
                        type="number" 
                        name="city" 
                        placeholder="" 
                        label="City" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.city}
                    />
                </div>
                <div className="modallabels">
                    <label>two</label>
                </div>
                <div className="divider">    
                    <Inputbox 
                        type="text" 
                        name="state" 
                        placeholder="" 
                        label="State" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.state}
                    />
                    <Inputbox 
                        type="text" 
                        name="country" 
                        placeholder="" 
                        label="Country" 
                        // handleChange={handleChange}
                        handleChange={props.handleChange}
                        value= {props.udata.country}
                    />
                </div>
            </div>  
        </div>
    );
}

export default ThirdForm