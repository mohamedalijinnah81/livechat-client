import React from 'react'
import './../../styles/sidebar/SBConversations.css'
import '../../styles/DarkTheme.css'
import ConversationItem from './ConversationItem.js'
import { useSelector } from 'react-redux';

const SBConversations = ({ conversations, refresh, setRefresh }) => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'sb-conversations' + ((lightTheme) ? '' : ' dark')}>
        {conversations.map((conversation, index) => (
          conversation.users.length === 1 ? (<div key={index}></div>) : <ConversationItem 
                conversation = {conversation}
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  setRefresh(!refresh)
                }}
            />
        ))}
    </div>
  )
}

export default SBConversations