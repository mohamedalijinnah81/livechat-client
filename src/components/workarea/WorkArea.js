import React, { useState } from 'react'
import './../../styles/workarea/ChatArea.css'
import CAHeader from './CAHeader'
import CAMessagesContainer from './CAMessagesContainer'
import CATextInputArea from './CATextInputArea'

const WorkArea = () => {
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

  var props = chatData[0];

  return (
    <div className='chat-area'>
      <CAHeader 
        props = {props}
      />
      <CAMessagesContainer />
      <CATextInputArea />
    </div>
  )
}

export default WorkArea