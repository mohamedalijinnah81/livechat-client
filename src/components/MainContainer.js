import React, { useState } from 'react'
import './../styles/MainContainer.css'
import Sidebar from './sidebar/Sidebar'
import ChatArea from './workarea/ChatArea'
import WelcomePage from './others/WelcomePage'
import CreateGroups from './others/CreateGroups'

const MainContainer = () => {
    const [chatData, setChatData] = useState([
        {
            name: "Jinnah",
            lastMessage: "Hey byy",
            timeStamp: "online"
        }, 
        {
            name: "Mohamed",
            lastMessage: "How are you",
            timeStamp: "yesterday"
        }, 
        {
            name: "Ali",
            lastMessage: "Byy",
            timeStamp: "yesterday"
        }, 
        {
            name: "Sa",
            lastMessage: "Active now",
            timeStamp: "today"
        }
    ])

  return (
    <div className='main-container'>
        <Sidebar 
            chatData={chatData}
        />
        {/* <WelcomePage /> */}
        {/* <CreateGroups /> */}
        <ChatArea 
            chatData = {chatData[0]}
        />
    </div>
  )
}

export default MainContainer