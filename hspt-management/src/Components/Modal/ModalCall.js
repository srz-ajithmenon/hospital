import React, { useState, useEffect } from "react";

import Inputbox from "../Input/InputBox";
import Modal from "./Modal";

function ModalCall(props) {

    useEffect(() => {
        setUser(props.userdata) 
        setTemporary(props.userdata)
      },[props.userdata]);
  
    const [udata, setUser] = useState([])
    
    const handleChange = (val1,val2) => {
        setUser({ ...udata, [val1]:val2 })
    }
    console.log(udata)
    const [temporary, setTemporary] = useState("")   
    const handleReset = () => {
        setUser(temporary)
    }
    const handleSubmit = () => {
        props.handleSubmit(udata)
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
                formFields.map((item) => {
                    return (
                        <Inputbox 
                            key={ item.name} 
                            type={ item.type} 
                            name={ item.name} 
                            label={ item.label}  
                            placeholder=""
                            varient = "input_standard"
                            value={udata[item.name]}
                            handleChange={handleChange} 
                        />
                    )
                })
            }
        </Modal>
    );
}
    
export default ModalCall
