import React from 'react'
import { connect } from 'react-redux'
import Input from '../input/inputBox'
import Button from '../button/submitButton'
import { loginAction } from '../../Redux/loginRedux/loginAction'
import { useNavigate } from 'react-router-dom'

import '../../designs/login.css'

const Login = (props) => {
  const [user,setUser] = React.useState({})
  const [error,setError] =React.useState(
    {name:"This field is required"}
    )
  const navigate= useNavigate()

  const handleClick = () => {
    //validation fun call
    props.loginAction(user);
  }

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  if(props.isAuthUser){
    localStorage.setItem('user',props.userRes.name)
    localStorage.setItem('isAuth',true)
    props.handleAuth(props.isAuthUser)
    navigate('/report')
  }
  
  return (
    <div className='classLogin'>
      <h1>Login</h1>
      {console.log(props.isAuthUser)}
      <div className='componentDiv'>
        <Input 
          type="text" 
          name="name" 
          value={user.name}
          errorMsg= {error.name}
          label="Username" 
          placeholder="Enter username" 
          handleChange={handleChange}
        />
      </div>
      <div className='componentDiv'>
        <Input 
          type="password" 
          name="password" 
          label="Password" 
          placeholder="Enter password" 
          handleChange={handleChange}
        />
      </div>
      <div className='componentDivButton'>
        <Button 
          varient="contained" 
          label="Log in"
          handleClick={handleClick}
        />
      </div>   
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    userRes: state.loginReducer.user,
    type: state.loginReducer.type,
    isAuthUser: state.loginReducer.isAuthUser
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loginAction: (user) => dispatch(loginAction(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)