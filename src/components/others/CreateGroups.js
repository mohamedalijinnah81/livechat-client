import React from 'react'
import '../../styles/others/CreateGroups.css'
import '../../styles/sidebar/SBSearchbar.css'
import '../../styles/DarkTheme.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux';

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'creategroups-container' + ((lightTheme) ? '' : ' dark')}>
        <input type="text" placeholder='Enter Group Name' className={'search-box' + ((lightTheme) ? '' : ' dark')} />
        <IconButton>
            <DoneOutlineIcon className={'tick-icon' + ((lightTheme) ? '' : ' dark')} />
        </IconButton>
    </div>
  )
}

export default CreateGroups