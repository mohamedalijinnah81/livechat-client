import React, { useState } from 'react'
import logo from '../images/live-chat.png'
import '../styles/others/WelcomePage.css'
import '../styles/Login.css'
import { Backdrop, CircularProgress, Button, TextField } from '@mui/material'
import { json, useNavigate } from 'react-router-dom'
import axios from "axios"
import Toaster from './others/Toaster'

const Login = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login/",
        data,
        config
      );
      console.log("Login: ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch(error) {
      setLogInStatus({
        msg: "Invalid username or password",
        key: Math.random(),
      });
      // console.log(logInStatus.msg);
    }
    setLoading(false);
  }

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register/",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch(error) {
      console.log(error);
      if(error.response.status === 405) {
        setSignInStatus({
          msg: "User with this email ID alredy exists.",
          key: Math.random(),
        });
        console.log(setSignInStatus.msg);
      }
      if(error.response.status === 406) {
        setSignInStatus({
          msg: "Username already taken, Please take another one.",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className='login-container'>
          <div className="image-container">
              <img src={logo} alt="Logo" className='welcome-logo' />
          </div>
          {showLogin && <div className="login-box">
              <p>Login to your Account</p>
              <TextField 
                  onChange={changeHandler}
                id="standard-basic"
                label="Enter Username"
                variant="outlined"
                color="secondary"
                name="name"
                helperText=""
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />
              <TextField 
                onChange={changeHandler}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                color="secondary"
                name="password"
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    loginHandler();
                  }
                }}
              />
              <Button variant="outlined" className='login-btn' color='secondary' onClick={loginHandler}>Login</Button>
              <p className='login-signup-switch'>Don't hav an account?&nbsp;<span
                  className="hyper"
                  onClick={() => {
                    setShowLogin(false);
                  }}
                >
                  Sign Up
                </span></p>
                {logInStatus ? (
                  <Toaster key={logInStatus.key} message={logInStatus.msg} />
                ) : null}
          </div>}
          {!showLogin && <div className="login-box">
              <p>Create a new account</p>
              <TextField 
                onChange={changeHandler}
                id="standard-basic"
                label="Enter Username"
                variant="outlined"
                color="secondary"
                name="name"
                helperText=""
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />
              <TextField 
                onChange={changeHandler}
                id="standard-basic"
                label="Enter Email Address"
                variant="outlined"
                color="secondary"
                name="email"
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />
              <TextField 
                onChange={changeHandler}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                color="secondary"
                name="password"
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />
              <Button variant="outlined" className='login-btn' color='secondary' onClick={signUpHandler}>Sign Up</Button>
              <p className='login-signup-switch'>Already have an account?&nbsp;<span
                  className="hyper"
                  onClick={() => {
                    setShowLogin(true);
                  }}
                >
                  Log In
                </span></p>
                {signInStatus ? (
                  <Toaster key={signInStatus.key} message={signInStatus.msg} />
                ) : null}
          </div>}
      </div>
    </>
    
  )
}

export default Login