import React from 'react'
import './../../styles/sidebar/SBConversations.css'
import ConversationItem from './ConversationItem.js'

const SBConversations = ({ conversations }) => {
  return (
    <div className='sb-conversations'>
        {conversations.map((conversation) => (
            <ConversationItem 
                conversation = {conversation}
                key={conversation.name}
            />
        ))}
    </div>
  )
}

export default SBConversations