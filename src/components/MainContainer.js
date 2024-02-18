import React, { useState } from 'react'
import './../styles/MainContainer.css'
import Sidebar from './sidebar/Sidebar'
import WorkArea from './workarea/WorkArea'
import WelcomePage from './others/WelcomePage'
import CreateGroups from './others/CreateGroups'
import Users from './others/Users'
import { Outlet } from 'react-router-dom'
import Groups from './others/Groups'


const MainContainer = () => {

  return (
    <div className='main-container'>
        <Sidebar />
        <Outlet />
        {/* <Groups /> */}
        {/* <Outlet /> */}
        {/* <WelcomePage /> */}
        {/* <CreateGroups /> */}
        {/* <ChatArea 
            chatData = {chatData[0]}
        /> */}
        {/* <Users /> */}
    </div>
  )
}

export default MainContainer