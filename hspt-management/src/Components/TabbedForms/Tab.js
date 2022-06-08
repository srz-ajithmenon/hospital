import React,{ useEffect, useState } from "react";
import "./tab.css";

function Tabs(props) {
  const [content, setContent] = useState()
  useEffect(() => {
      setContent((props.items.find( (item) => item.name == props.tstate)).content)
  },[props.tstate]);
    
  return (
    <div className="container">
      <div className="bloc-tabs">
        {props.items.map((item,idx) =>{
          return (
            <div key={item.name} className={(props.tstate === item.name) ? "tabs active-tabs" : "tabs"} onClick={() => props.handleToggle(item.name)}>
              {item.label}
            </div>
          )
        })}
      </div>
      <div className="content-tabs">
          {content}
      </div>
    </div>
  );
}

export default Tabs