import React from 'react'
import logo from '../../images/live-chat.png'
import '../../styles/others/WelcomePage.css'
import '../../styles/DarkTheme.css'
import { useSelector } from 'react-redux'

const WelcomePage = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'welcome-container' + ((lightTheme) ? '' : ' dark-container')}>
        <img src={logo} alt="Logo" className='welcome-logo' />
        <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default WelcomePage