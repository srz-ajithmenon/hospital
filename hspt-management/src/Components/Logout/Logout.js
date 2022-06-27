import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAction } from '../../Redux/loginRedux/loginAction'
import { PrivateRoute } from '../privateRoute'

export const Logout = (props) => {
  const navigate= useNavigate()
  
  const handleClick = () => {
    props.logoutAction()
  }

  useEffect(()=> {
    console.log("logout",localStorage.getItem('isAuth'))
    if( localStorage.getItem('isAuth') === 'false'){
      navigate('/login')
    }
  },
  [localStorage.getItem('isAuth')])

  return(
      <button onClick={handleClick}>LOGOUT</button>
  )
}

const mapStateToProps = (state) => {
    return{
      userRes: state.loginReducer.user,
      type: state.loginReducer.type,
      isAuth: state.loginReducer.isAuth
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
      logoutAction: (user) => dispatch(logoutAction(user))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)