import React from 'react'
import logo from '../../images/live-chat.png'
import '../../styles/others/WelcomePage.css'
import '../../styles/DarkTheme.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const WelcomePage = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className={'welcome-container' + ((lightTheme) ? '' : ' dark-container')}>
        <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name} 👋</b>
        <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default WelcomePage