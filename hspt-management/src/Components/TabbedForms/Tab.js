import React from "react";
import "./tab.css";

function Tabs(props) {
    return (
        <div className="container">
            <div className="bloc-tabs">
                {props.items.map((item,idx) =>{
                    return (
                        <div key={item.name} className={(props.tstate === item.name) ? "tabs active-tabs" : "tabs"} onClick={() => props.handleClick(item.name)}>{item.label}</div>
                    )
                })}
            </div>
            <div className="content-tabs">
                {props.children}
            </div>
        </div>
    );
}

export default Tabs