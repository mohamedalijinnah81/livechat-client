import React from 'react'
import './../../styles/sidebar/SBConversations.css'
import '../../styles/DarkTheme.css'
import ConversationItem from './ConversationItem.js'
import { useSelector } from 'react-redux';

const SBConversations = ({ conversations }) => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'sb-conversations' + ((lightTheme) ? '' : ' dark')}>
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