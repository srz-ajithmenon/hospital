import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function ThirdForm (props) {

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
                        handleChange={props.handleChange}
                        value= {props.udata.address}
                    />
                    <Inputbox 
                        type="text" 
                        name="city" 
                        placeholder="" 
                        label="City" 
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
                        handleChange={props.handleChange}
                        value= {props.udata.state}
                    />
                    <Inputbox 
                        type="text" 
                        name="country" 
                        placeholder="" 
                        label="Country" 
                        handleChange={props.handleChange}
                        value= {props.udata.country}
                    />
                </div>
            </div>  
        </div>
    );
}

export default ThirdForm