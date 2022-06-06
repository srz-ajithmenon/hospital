import React, { useState } from "react";

import Modal from "../Modal/Modal";
import Inputbox from "../Input/InputBox"

function Home() {
    const [mstate, setState]= useState(false)
    const toggleModal = () => {
        setState(!mstate)
    }
    const [udata, setUser] = useState({name:"",email:"", phone:""})
    const handleChange = (val1,val2) => {
        setUser({ ...udata, [val1]:val2 })
    }
    const handleSubmit = () => {
        console.log("User Details - ",udata)
        setUser({name:"",email:"", phone:""}) // after every use
    }
    const handleReset = () => {
        setUser({name:"",email:"", phone:""})
    }
    return (
        <div>
            <button onClick={toggleModal} >open Modal</button>
            {
                <Modal header="My Modal" shouldShowPopup={mstate} toggleModal={toggleModal} handleSubmit={handleSubmit} handleReset={handleReset} >

                    <Inputbox 
                        type="text" 
                        name="name" 
                        label="Name" 
                        placeholder="Enter your Name" 
                        value = {udata.name}
                        handleChange={handleChange} 
                    /><br/>
                    <Inputbox 
                        type="text"
                        name="email" 
                        label="E-mail ID" 
                        placeholder="Enter your E-mail ID" 
                        value = {udata.email}
                        handleChange={handleChange} 
                    /><br/>
                    <Inputbox 
                        type="number" 
                        name="phone"  
                        label="Phone No." 
                        placeholder="Enter your Phone No." 
                        value = {udata.phone}
                        handleChange={handleChange} 
                    /><br/>
                       
                </Modal>
            }
        </div>
    );
}
    
export default Home