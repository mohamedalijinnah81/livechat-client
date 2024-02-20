import React from 'react'
import '../../styles/workarea/CAHeader.css'
import '../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const CAHeader = ({ props }) => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'chatarea-header' + ((lightTheme) ? '' : ' dark')}>
        <p className='convo-icon'>{props.name[0]}</p>
        <div className="chatarea-header-text">
            <p className='convo-title'>{props.name}</p>
            <p className='convo-timestamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon className={'delete-icon' + ((lightTheme) ? '' : ' dark')} />
        </IconButton>
    </div>
  )
}

export default CAHeader