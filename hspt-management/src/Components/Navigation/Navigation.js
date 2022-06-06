import React from "react";
import { Link } from 'react-router-dom'
import "./navigation.css";

const nav=[
    {label:"HOME",value:"home"},
    {label:"REPORTS", value:"report"},
    {label:"REGISTRATION", value:"register"},
    ]
function Navigation (props) {
    return (
           <div className="navBar">
            <ul>
                {nav.map(function(item){
                    return (
                    <li><Link to={item.value}>{item.label}</Link></li>
                    )}
                  )
                }
            </ul>
        </div>
    )
}
export default Navigation