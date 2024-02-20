import React from 'react'
import './../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ConversationItem = ({ conversation }) => {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'conversation-container' + ((lightTheme) ? '' : ' dark')} onClick={() => {
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