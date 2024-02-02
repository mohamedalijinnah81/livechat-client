import React from 'react'
import '../../styles/workarea/CAHeader.css'
import '../../styles/sidebar/ConversationItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const CAHeader = ({ chatData }) => {
  return (
    <div className='chatarea-header'>
        <p className='convo-icon'>{chatData.name[0]}</p>
        <div className="chatarea-header-text">
            <p className='convo-title'>{chatData.name}</p>
            <p className='convo-timestamp'>{chatData.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </div>
  )
}

export default CAHeader