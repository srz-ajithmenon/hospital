import React from "react";
import { useState } from "react";

import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Tab from './Tab'
import "./tab.css";

const items = [
    {name: "tab1", label: "Tab 1"},
    {name: "tab2", label: "Tab 2"},
    {name: "tab3", label: "Tab 3"}
]

function Tabs(props) {
    const [toggleState, setToggleState] = useState("tab1");
    const handleClick = (index) => {
        setToggleState(index);
    };
        
    return (   
        <div>
            <Tab
                items = {items}
                handleClick={handleClick}
                tstate= {toggleState}
            >
                {
                    <div>
                        <div className={toggleState == "tab1" ? "tabcontent  active-content" : "tabcontent"} >
                            <FirstForm udata={props.udata} handleChange={props.handleChange} />
                        </div>
                        <div className={toggleState == "tab2" ? "tabcontent  active-content" : "tabcontent"} >
                            <SecondForm udata={props.udata} handleChange={props.handleChange} />
                        </div>
                        <div className={toggleState == "tab3" ? "tabcontent  active-content" : "tabcontent"} >
                            <ThirdForm udata={props.udata} handleChange={props.handleChange} />
                        </div>
                    </div>
                }
            </Tab>
        </div>
    );
}

export default Tabs