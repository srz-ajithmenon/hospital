import React from "react";
import { Link } from 'react-router-dom'
import "./navigation.css";
import Logout from "../Logout/Logout";

const nav=[
    {label:"HOME",value:"home"},
    {label:"REPORTS", value:"report"},
    {label:"REGISTRATION", value:"register"},
    // {label:"LOGOUT", value:"logout"}
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
                <li><Logout/></li>
            </ul>
        </div>
    )
}
export default Navigation