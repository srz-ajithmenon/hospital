import React, { useState, useEffect } from "react";

import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Tab from './Tab'
import Modal from '../Modal/Modal'

const user ={
        status:"", reason:"", firstdate:"", startdate:"", enddate:"", type:"", firstname:"", lastname:"", 
        phone:"", email:"", gender:"", height:"", identify:"", address:"", city:"", state:"", country:""
}

function ModalForms(props) {

    const [udata, setUser] = useState("")
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
    const [toggleState, setToggleState] = useState("tab1");
    const handleToggle = (index) => {
        setToggleState(index);
    };
    const items = [
        {name: "tab1", label: "Tab 1", content : <FirstForm udata={udata} handleChange={handleChange} /> },
        {name: "tab2", label: "Tab 2", content : <SecondForm udata={udata} handleChange={handleChange} /> },
        {name: "tab3", label: "Tab 3", content : <ThirdForm udata={udata} handleChange={handleChange} /> }
    ]

    return (
        <Modal 
            header = {props.header}
            shouldShowPopup = {props.shouldShowPopup} 
            toggleModal = {props.toggleModal} 
            handleSubmit = {handleSubmit} 
            handleReset = {handleReset} 
        >
            { 
                <Tab
                    items = {items}
                    handleToggle={handleToggle}
                    tstate= {toggleState}
                />
            }
        </Modal>
    );
}

export default ModalForms