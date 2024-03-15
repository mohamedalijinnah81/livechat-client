import React from 'react'
import '../../styles/workarea/CAHeader.css'
import '../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const CAHeader = ({ chatUser, allMessages, userData }) => {
  const lightTheme = useSelector((state) => state.themeKey);
  // var senderName = "";
  // allMessages.map((message, index) => {
  //   const sender = message.sender;
  //   const self_id = userData.data._id;
  //   if(sender._id == self_id) {
  //     senderName = message.sender.name;
  //   }
  // });

  return (
    <div className={'chatarea-header' + ((lightTheme) ? '' : ' dark')}>
        <p className='convo-icon'>{chatUser[0]}</p>
        <div className="chatarea-header-text">
            <p className='convo-title'>{chatUser}</p>
            {/* <p className='convo-timestamp'>{props.timeStamp}</p> */}
        </div>
        <IconButton>
            <DeleteIcon className={'delete-icon' + ((lightTheme) ? '' : ' dark')} />
        </IconButton>
    </div>
  )
}

export default CAHeader