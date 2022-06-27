import React from 'react'
import { connect } from 'react-redux'
import { getVisitors } from '../../Redux/visitorsRedux/visitorsAction'
import Table from '../Table/table'
import Button from '../Button/SubmitButton'

export const Visitor = (props) => {
    console.log(Object.keys(props.visitors).length)
    React.useEffect(() => {
        props.getVisitors()
    },[])
    const getContent = (rawData) => 
            rawData.map(item => (
                {
                ...item, 
                delete: <Button label="Delete" varient="primary" handleClick={handleClick(item)}/>
                }
    ))
    const handleClick = (data) => () => {
      // setUser(data)
      // setState(true)
  }
  return (
    <>
      {Object.keys(props.visitors).length ?
        <Table 
          head={props.visitors.visitorsLabel} 
          data={getContent(props.visitors.visitorsList)}
        /> 
      : ""}
    </>
  )
}

const mapStateToProps = (state) => {
    return{
      visitors: state.visitorsReducer.visitors,
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
        getVisitors: () => dispatch(getVisitors())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Visitor)