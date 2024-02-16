import React from 'react'
import logo from '../../images/live-chat.png'
import '../../styles/others/WelcomePage.css'

const WelcomePage = () => {
  return (
    <div className='welcome-container'>
        <img src={logo} alt="Logo" className='welcome-logo' />
        <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default WelcomePage