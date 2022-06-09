import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function FirstForm (props) {
    
    return (
        <div>
            <div>  
                <div>
                    <div className="modallabels">
                        <label>one</label>
                    </div>
                    <div className="divider">    
                        <Inputbox 
                            type="text" 
                            name="status" 
                            placeholder="" 
                            label="Status" 
                            handleChange={props.handleChange}
                            value= {props.udata.status}
                        />
                        <Inputbox 
                            type="text" 
                            name="reason" 
                            placeholder="" 
                            label="Reason" 
                            handleChange={props.handleChange}
                            value= {props.udata.reason}
                        />
                    </div>
                    <div className="modallabels">
                        <label>two</label>
                    </div>
                    <div className="divider">    
                        <Inputbox 
                            type="text" 
                            name="firstdate" 
                            placeholder="" 
                            label="Start Date" 
                            handleChange={props.handleChange}
                            value= {props.udata.firstdate}
                        />
                    </div>
                    <div className="modallabels">
                        <label>three</label>
                    </div>
                    <div className="divider">    
                        <Inputbox 
                            type="text" 
                            name="startdate" 
                            placeholder="" 
                            label="Start Date" 
                            handleChange={props.handleChange}
                            value= {props.udata.startdate}
                        />
                        <Inputbox 
                            type="text" 
                            name="enddate" 
                            placeholder="" 
                            label="End Date" 
                            handleChange={props.handleChange}
                            value= {props.udata.enddate}
                        />
                    </div>
                    <div className="modallabels">
                        <label>four</label>
                    </div>
                    <div>    
                        <Inputbox 
                            type="text" 
                            name="type" 
                            placeholder="" 
                            label="Type" 
                            handleChange={props.handleChange}
                            value= {props.udata.type}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstForm