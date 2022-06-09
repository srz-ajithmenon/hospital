import React,{ useState, useEffect } from "react";
import { connect } from "react-redux";

import { getDoctInfo, delDoctInfo } from '../../Redux/doctorsRedux/doctorAction'
import Table from "../Table/table";
import SubmitButton from "../Button/SubmitButton";

function DisplayDoctors(props) {

    useEffect(() => {
        props.getDoctInfo() 
    },[]);
    const handleDelete = (data)=> () => {
        console.log(data)
        props.delDoctInfo(data.id)
    }

    const getContent = (data) => 
            data.map(item => (
                {
                ...item, 
                "edit": <SubmitButton handleClick={handleDelete(item)} varient="outlined" label="delete" />
                }
    ))

    const doctFields = [
        {keyValue: "doctors_id", label: "Room No.", type: "text"},
        {keyValue: "doctors_name", label: "Doctors Name", type: "text"},
        {keyValue: "department_name", label: "Department", type: "text"},
        {keyValue: "edit", label: "", type: "buttons"}
    ]

    return (
        <div>

            <Table 
                label="Patient's Appointment Record" 
                head={doctFields} 
                data={getContent(props.doct)}
            />

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
        getDoctInfo: () => dispatch(getDoctInfo()),
        delDoctInfo : (userid) => dispatch(delDoctInfo(userid))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DisplayDoctors)