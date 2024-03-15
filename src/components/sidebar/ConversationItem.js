import React from 'react'
import './../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ConversationItem = ({ conversation, userData }) => {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  // console.log(conversation);
  var chatName = "";
  var userName = "";
  if(conversation.isGroupChat) {
    chatName = conversation.chatName;
  } else {
    conversation.users.map((user) => {
      if(user._id != userData.data._id) {
        chatName = user.name;
        userName = user.name;
      }
    })
  }

  return (
    <div className={'conversation-container' + ((lightTheme) ? '' : ' dark')} onClick={() => {
      navigate('chat/' + conversation._id + "&" + userName);
    }}>
        <p className='convo-icon'>{chatName[0]}</p>
        
        <p className='convo-title'>{chatName}</p>
        <p className='convo-lastmessage'>{conversation.lastMessage ? conversation.lastMessage.content : "No previous Messages, click here to start a new chat"}</p>
        {/* <p className='convo-timestamp'>{conversation.timeStamp}</p> */}
    </div>
  )
}

export default ConversationItem