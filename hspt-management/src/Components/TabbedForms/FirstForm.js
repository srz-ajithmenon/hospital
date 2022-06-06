import React, { useState } from "react";

import Inputbox from "../Input/InputBox";
import "./Forms.css"

function FirstForm (props) {
    const [firstdata,setUpdate]=useState({ 
        status:"", reason:"", firstdate:"", startdate:"", enddate:"", type:""
    })

    const handleChange = (val1,val2) =>{ setUpdate({ ...firstdata, [val2]:val1 }) }
    console.log("*******",firstdata)
    
    return (
        <div>
            <div>  
                <div>
                    <div className="modallabels">
                        <label>one</label>
                    </div>
                    <div className="divider">    
                        <Inputbox type="text" name="status" placeholder="" label="Status" handleChange={handleChange}/>
                        <Inputbox type="number" name="reason" placeholder="" label="Reason" handleChange={handleChange}/>
                    </div>
                    <div className="modallabels">
                        <label>two</label>
                    </div>
                    <div className="divider">    
                        <Inputbox type="number" name="firstdate" placeholder="" label="Start Date" handleChange={handleChange}/>
                    </div>
                    <div className="modallabels">
                        <label>three</label>
                    </div>
                    <div className="divider">    
                        <Inputbox type="text" name="startdate" placeholder="" label="Start Date" handleChange={handleChange}/>
                        <Inputbox type="text" name="enddate" placeholder="" label="End Date" handleChange={handleChange}/>
                    </div>
                    <div className="modallabels">
                        <label>four</label>
                    </div>
                    <div>    
                        <Inputbox type="text" name="type" placeholder="" label="Type" handleChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstForm