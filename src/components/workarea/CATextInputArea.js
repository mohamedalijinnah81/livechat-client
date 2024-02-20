import React from 'react'
import '../../styles/workarea/CATextInputArea.css'
import SendIcon from '@mui/icons-material/Send';
import '../../styles/sidebar/SBSearchbar.css'
import '../../styles/DarkTheme.css'
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const CATextInputArea = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'chatarea-textinput' + ((lightTheme) ? '' : ' dark')}>
        <input type="text" className={'search-box' + ((lightTheme) ? '' : ' dark')} placeholder='Type a message' />
        <IconButton>
            <SendIcon className={'submit-icon' + ((lightTheme) ? '' : ' dark')} />
        </IconButton>
    </div>
    // <form action="#"></form>
  )
}

export default CATextInputArea