import React, { useState } from 'react'
import './../../styles/sidebar/Sidebar.css'
import SBHeader from './SBHeader'
import SBSearchbar from './SBSearchbar'
import SBConversations from './SBConversations'

const Sidebar = ({ chatData }) => {
    // const [conversations, setConversations] = useState([
    //     {
    //         title: "Jinnah",
    //         lastMessage: "I'll call you later",
    //         timeStamp: "today"
    //     },
    //     {
    //         title: "Mohamed",
    //         lastMessage: "He's online",
    //         timeStamp: "yesterday"
    //     },
    //     {
    //         title: "Ali",
    //         lastMessage: "Ok got it",
    //         timeStamp: "today"
    //     }
    // ])

  return (
    <div className='sidebar'>
        <SBHeader />
        <SBSearchbar />
        <SBConversations 
            conversations = {chatData}
        />
    </div>
  )
}

export default Sidebar