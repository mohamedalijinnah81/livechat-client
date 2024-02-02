import React from 'react'
import './../../styles/workarea/ChatArea.css'
import CAHeader from './CAHeader'
import CAMessagesContainer from './CAMessagesContainer'
import CATextInputArea from './CATextInputArea'

const WorkArea = ({ chatData }) => {
  return (
    <div className='chat-area'>
      <CAHeader 
        chatData = {chatData}
      />
      <CAMessagesContainer />
      <CATextInputArea />
    </div>
  )
}

export default WorkArea