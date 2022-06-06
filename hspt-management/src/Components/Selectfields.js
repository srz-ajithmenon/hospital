import React from "react";

import "../designs/design.css";

function Selectfields (props) {

    const handleChange =(event) =>{
       var name=event.target.name
       props.handleChange(event.target.value,name)
}
    return (
        <div className="select">
          <label>{props.labels}</label>
          <select name={props.name} onChange={handleChange} className="selname" >
            <option value="">--select--</option>
            {props.items.map(function(item){
              return (
                  <option value={item.value}>{item.label}</option>
                     )
                })
            }
          </select>
        </div>
    )
}
export default Selectfields