import React,{ useState, useEffect } from "react";
import { connect } from "react-redux";

import { getDoctInfo, delDoctInfo, updDoctInfo } from '../../Redux/doctorsRedux/doctorAction'
import Table from "../Table/table";
import SubmitButton from "../Button/SubmitButton";
import ModalCall from "../Modal/ModalCall";

function DisplayDoctors(props) {
    const limit = 5;
    const [offset, setoffset] = useState(5); 
    const handleOffSet = (data) => {
        console.log("offset",data)
        setoffset(data)
    }
    useEffect(() => {
        props.getDoctInfo(offset) 
    },[offset]);
    const handleDelete = (data)=> () => {
        if (window.confirm("Do You Want To Delete "+data.doctors_name+" ?")) {
            console.log(data)
            props.delDoctInfo(data.id)
          } 
          else {
            console.log("Cancel!");
          }
    }
    const [mstate, setState]= useState(false)
    const toggleModal = () => {
        setState(!mstate)
    }
    const [userdata, setUser] = useState("")
    const handleSubmit = (editdata) => {
        setUser(editdata)
        props.updDoctInfo(editdata)
    }
    const handleClick = (data) => () => {
        setUser(data)
        setState(true)
    }

    const getContent = (data) => 
            data.items.map(item => (
                {
                ...item, 
                "edit":<div>
                            <SubmitButton handleClick={handleDelete(item)} varient="outlined" label="delete" />
                            <SubmitButton handleClick={handleClick(item)} varient="simple" label="Edit User" />
                       </div>
                }
    ))
    const doctFields = [
        {keyValue: "doctors_id", label: "Room No.", name: "doctors_id", type: "text"},
        {keyValue: "doctors_name", label: "Doctors Name", name: "doctors_name", type: "text"},
        {keyValue: "department_name", label: "Department", name: "department_name", type: "text"},
        {keyValue: "edit", label: "", name: "edit", type: "buttons"}
    ]

    return (
        <div>
           {
            (props.doct.length === 0) ? <></> : <div>
                <Table 
                    label="Patient's Appointment Record" 
                    head={doctFields} 
                    data={getContent(props.doct)}
                    offset = {offset}
                    total = {props.doct.total}
                    limit = {limit} 
                    handleOffSet = {handleOffSet}
                />
                <ModalCall
                    header="Patient Visit Details" 
                    shouldShowPopup = { mstate } 
                    toggleModal = { toggleModal }
                    userdata={userdata} 
                    formFields={doctFields.slice(0,doctFields.length-1)}
                    handleSubmit={handleSubmit} 
                />

            </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return{
        doct: state.doctInfo.doct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDoctInfo: (limits) => dispatch(getDoctInfo(limits)),
        delDoctInfo : (userid) => dispatch(delDoctInfo(userid)),
        updDoctInfo : (doct) => dispatch(updDoctInfo(doct))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DisplayDoctors)