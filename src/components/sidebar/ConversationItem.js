import React from 'react'
import './../../styles/sidebar/ConversationItem.css'
import { useNavigate } from 'react-router-dom'

const ConversationItem = ({ conversation }) => {
  const navigate = useNavigate();
  return (
    <div className='conversation-container' onClick={() => {
      navigate('chat')
    }}>
        <p className='convo-icon'>{conversation.title[0]}</p>
        
        <p className='convo-title'>{conversation.title}</p>
        <p className='convo-lastmessage'>{conversation.lastMessage}</p>
        <p className='convo-timestamp'>{conversation.timeStamp}</p>
    </div>
  )
}

export default ConversationItem