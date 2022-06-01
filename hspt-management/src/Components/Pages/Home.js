import React, { useState } from "react";

import Modal from "../Modal/Modal";

function Home() {
    const [mstate, setState]= useState(false)
    const handleSubmit = (udata) => {
        console.log("User Details - ",udata)
    }
    const toggleModal = () => {
        setState(!mstate)
    }
    const [udata, setUser] = useState({name:"",email:"", phone:""})
    const handleChange = (event) => {
        var name = event.target.name
        setUser({ ...udata, [name]:event.target.value })
    }
    const handleReset = () => {
        setUser({name:"",email:"", phone:""})
    }
    return (
        <div>
            <p></p>
            <button onClick={toggleModal} >open Modal</button>
            {
                <Modal header="My Modal" shouldShowPopup={mstate} content="This is my modal Component" toggleModal={toggleModal} handleSubmit={handleSubmit} handleReset={handleReset} >

                        <label>Name</label><br/>
                        <input type="text" name="name" value={udata.name} onChange={handleChange} /><br/><br/>
                        <label>E-mail</label><br/>
                        <input type="text" name="email" value={udata.email} onChange={handleChange} /><br/><br/>
                        <label>Phone No.</label><br/>
                        <input type="text" name="phone" value={udata.phone} onChange={handleChange} /><br/><br/>
                       
                </Modal>
            }
        </div>
    );
}
    
export default Home