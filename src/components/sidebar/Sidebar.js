import React, { useState } from 'react'
import './../../styles/sidebar/Sidebar.css'
import '../../styles/sidebar/MobileSidebar.css'
import SBHeader from './SBHeader'
import SBSearchbar from './SBSearchbar'
import SBConversations from './SBConversations'

const Sidebar = () => {
    const [conversations, setConversations] = useState([
        {
            title: "Jinnah",
            lastMessage: "I'll call you later",
            timeStamp: "today"
        },
        {
            title: "Mohamed",
            lastMessage: "He's online",
            timeStamp: "yesterday"
        },
        {
            title: "Ali",
            lastMessage: "Ok got it",
            timeStamp: "today"
        }
    ])

  return (
    <div className='sidebar'>
        <SBHeader />
        <SBSearchbar />
        <SBConversations 
            conversations = {conversations}
        />
    </div>
  )
}

export default Sidebar