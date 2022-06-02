import React from 'react'
import { connect } from 'react-redux'
import Input from './Input/InputBox'
import Button from './Button/SubmitButton'
import { loginAction } from '../Redux/login/loginAction'

import '../designs/login.css'

const Login = (props) => {

  const [user,setUser] = React.useState({
      name: "",
      password: ""
    })

  const handleClick = () => {
    console.log("------",user)
    props.loginAction(user);
    // event.preventDefault();
  }

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    })
    console.log(name, value)
  }

  return (
    <div className='classLogin'>
      <div className='componentDiv'>
        <Input 
          type="text" 
          name="name" 
          label="User Name" 
          placeholder="Enter user name" 
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

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) =>{
  return {
    loginAction: (user) => dispatch(loginAction(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)