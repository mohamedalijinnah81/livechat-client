import React from 'react'
import logo from '../images/live-chat.png'
import '../styles/others/WelcomePage.css'
import '../styles/Login.css'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='login-container'>
        <div className="image-container">
            <img src={logo} alt="Logo" className='welcome-logo' />
        </div>
        <div className="login-box">
            <p>Login to your Account</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="outlined-password-input" label="Enter Password" type="password" autoComplete="current-password" />
            <Button variant="outlined" onClick={() => {
                navigate('app/welcome');
            }}>Login</Button>
        </div>
    </div>
  )
}

export default Login