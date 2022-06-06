import React, {useState} from "react";

import Inputbox from "./Input/InputBox";
import SubmitButton from "./Button/SubmitButton";
import '../designs/pages.css'

function Registration(props) {
    const [udata, setUser] = useState({name:"", email:"", phone:"", address:""})
    const handleChange = (val1,val2) => {
        setUser({ ...udata, [val1]:val2})
    }
    const handleClick = () =>{
        console.log("------",udata)
        // event.preventDefault();
    }
    return (
        <div className="centers">
                <form  className="forms">
                    <Inputbox
                        type="text" 
                        name="name" 
                        label="Name" 
                        placeholder="Enter your Name" 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="email" 
                        name="email" 
                        label="Email id" 
                        placeholder="Enter your Email id" 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="number" 
                        name="phone" 
                        label="Phone No." 
                        placeholder="Enter your Phone No." 
                        handleChange={handleChange} 
                    /> <br/>
                    <Inputbox 
                        type="text" 
                        name="address" 
                        label="Address" 
                        placeholder="Enter your Address" 
                        handleChange={handleChange} 
                    /> <br/>
                    <div className="button">
                        <SubmitButton varient="contained" label="Submit" handleClick={handleClick}/>
                    </div>
                </form>
        </div>
    );
}
    
export default Registration
