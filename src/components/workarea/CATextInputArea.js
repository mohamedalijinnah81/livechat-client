import React from 'react'
import '../../styles/workarea/CATextInputArea.css'
import SendIcon from '@mui/icons-material/Send';
import '../../styles/sidebar/SBSearchbar.css'
import { IconButton } from '@mui/material';

const CATextInputArea = () => {
  return (
    <div className='chatarea-textinput'>
        <input type="text" className='search-box' placeholder='Type a message' />
        <IconButton>
            <SendIcon />
        </IconButton>
    </div>
    // <form action="#"></form>
  )
}

export default CATextInputArea