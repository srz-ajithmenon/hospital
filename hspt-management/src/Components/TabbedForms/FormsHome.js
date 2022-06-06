import React, { useState } from "react";

import ModalForms from './ModalForms'

function FormHome (props) {

    const [mstate, setState]= useState(false)
    const toggleModal = () => {
    setState(!mstate)
    }
    const [userdata, setUser] = useState("")
    const handleSubmit = (editdata) => {
        console.log("Edited User Details - ",editdata)
        setUser(editdata)
    }

    return (
        <div>
            <button onClick={toggleModal} >open Modal</button>
            <ModalForms
                header="Patient Visit Details" 
                shouldShowPopup = { mstate } 
                toggleModal = { toggleModal }
                userdata={userdata} 
                handleSubmit={handleSubmit} 
        />
        </div>
    );
}

export default FormHome