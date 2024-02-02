import React from 'react'
import './../../styles/sidebar/ConversationItem.css'

const ConversationItem = ({ conversation }) => {
  return (
    <div className='conversation-container'>
        <p className='convo-icon'>{conversation.name[0]}</p>
        
        <p className='convo-title'>{conversation.name}</p>
        <p className='convo-lastmessage'>{conversation.lastMessage}</p>
        <p className='convo-timestamp'>{conversation.timeStamp}</p>
    </div>
  )
}

export default ConversationItem