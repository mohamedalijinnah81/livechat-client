import React, { createContext, useState } from 'react'
import './../styles/MainContainer.css'
import '../styles/DarkTheme.css'
import './../styles/workarea/MobileChatArea.css'
import Sidebar from './sidebar/Sidebar'
import WorkArea from './workarea/WorkArea'
import WelcomePage from './others/WelcomePage'
import CreateGroups from './others/CreateGroups'
import Users from './others/Users'
import { Outlet } from 'react-router-dom'
import Groups from './others/Groups'
import { useDispatch, useSelector } from 'react-redux'

export const myContext = createContext();
const MainContainer = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(true);

  return (
    <div className={'main-container' + ((lightTheme) ? '' : ' dark-container')}>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
        
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