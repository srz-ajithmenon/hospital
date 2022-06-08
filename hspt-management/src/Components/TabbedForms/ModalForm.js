import React, { useState, useEffect } from "react";

import TabForms from '../TabbedForms/TabForms'
import Modal from '../Modal/Modal'

const user ={
        status:"", reason:"", firstdate:"", startdate:"", enddate:"", type:"", firstname:"", lastname:"", 
        phone:"", email:"", gender:"", height:"", identify:"", address:"", city:"", state:"", country:""
}

function ModalForms(props) {

    const [udata, setUser] = useState(user)
    const handleChange = (val1,val2) => {
        setUser({ ...udata, [val1]:val2 })
    }
    const handleReset = () => {
        setUser(user)
    }
    const handleSubmit = () => {
        props.handleSubmit(udata)
        handleReset()
    }

    return (
        <Modal 
            header = {props.header}
            shouldShowPopup = {props.shouldShowPopup} 
            toggleModal = {props.toggleModal} 
            handleSubmit = {handleSubmit} 
            handleReset = {handleReset} 
        >
            { 
                <TabForms udata={udata} handleChange={handleChange} />
            }
        </Modal>
    );
}

export default ModalForms