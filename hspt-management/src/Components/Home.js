import React, { useState } from "react";

import Selectfields from "./Selectfields";
import "../designs/design.css";

function Home(props) {
    const[sdata,setupdate]=useState ({
          gender:"", nationality:"" 
        })
    const handleChange=(value1, value2)=>
                {setupdate({...sdata, [value2]:value1})
                console.log(value1, value2)
        }
    const gender=[
      {label:"Male", value:"male"},
      {label:"Female", value:"female"},
      {label:"Others", value:"other"}
     ]
     const nationality=[
      {label:"India", value:"india"},
      {label:"Spain", value:"spain"},
      {label:"Russia", value:"russia"}
     ]
    console.log(sdata)
     return (
       <div className="main">
         <div className="formpart">
           <div>
              <div className="smalldiv">
                    <Selectfields name="nationality" labels="Nationality" items={nationality} handleChange={handleChange}/>
              </div>
              <div className="smalldiv">
                    <Selectfields name="gender" labels="Gender" items={gender} handleChange={handleChange}/>
               </div>
            </div>
         </div>
       </div> 
    )
}
export default Home


