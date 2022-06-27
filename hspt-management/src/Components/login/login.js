import React from 'react'
import { connect } from 'react-redux'
import Input from '../Input/InputBox'
import Button from '../Button/SubmitButton'
import { loginAction } from '../../Redux/loginRedux/loginAction'
import { useNavigate } from 'react-router-dom'
import { omit } from 'lodash'

import '../../designs/login.css'

const Login = (props) => {
  const [user,setUser] = React.useState({
    name:"",
    password:""
  })
  const [error,setError] =React.useState(
    {
      name:"The field is required ",
      password:"The field is required "
    })
  const navigate= useNavigate()

  const handleClick = () => {
    if( Object.keys(error).length === 0 && Object.keys(user).length !== 0)
    {
      props.loginAction(user);
    }
  }

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    })

    switch(name){
      case 'name': 
        if(value === ""){
          setError({
            ...error,
            name: "The field is required"
          })
        }
        else if(!new RegExp(/^[a-zA-Z][a-zA-Z0-9]{0,}(_|-| )?[a-zA-Z0-9]+$/).test(value)){
          setError({
            ...error,
            name:"Enter a valid username"
          })
        }else{
          let newObj = omit(error, 'name');
          setError(newObj);
        }
        break;
      
      case 'password': 
        if(value === ""){
          setError({
            ...error,
            password: "The field is required"
          })
        }
        else{
          let newObj = omit(error, 'password');
          setError(newObj);
        }
      break;
      default:
        break;
    }
  }

  React.useEffect( () => {
    if(props.isAuth ){
      navigate('/report')
    }
  },
  [localStorage.getItem('isAuth')])
  
  return (
    <div className='classLogin'>
      <h1>Login</h1>
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
          value={user.password}
          errorMsg= {error.password}
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
    isAuth: state.loginReducer.isAuth
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
