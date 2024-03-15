import React from 'react'
import './../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ConversationItem = ({ conversation }) => {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  // console.log(conversation);

  return (
    <div className={'conversation-container' + ((lightTheme) ? '' : ' dark')} onClick={() => {
      navigate('chat/' + conversation._id + "&" + conversation.users[1].name);
    }}>
        <p className='convo-icon'>{conversation.users[1].name[0]}</p>
        
        <p className='convo-title'>{conversation.users[1].name}</p>
        <p className='convo-lastmessage'>{conversation.lastMessage ? conversation.lastMessage.content : "No previous Messages, click here to start a new chat"}</p>
        {/* <p className='convo-timestamp'>{conversation.timeStamp}</p> */}
    </div>
  )
}

export default ConversationItem