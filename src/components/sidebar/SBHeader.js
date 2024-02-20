import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import './../../styles/sidebar/SBHeader.css'
import '../../styles/DarkTheme.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';

const SBHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'sb-header' + ((lightTheme) ? '' : ' dark')}>
       <div className="profile">
            <IconButton>
                <AccountCircleIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />
            </IconButton>
       </div>
       <div className="nav-links">
            <IconButton onClick={() => {
                navigate('users');
            }}>
                <PersonAddIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />
            </IconButton>
            <IconButton onClick={() => {
                navigate('groups');
            }}>
                <GroupAddIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />
            </IconButton>
            <IconButton onClick={() => {
                navigate('creategroups')
            }}>
                <AddCircleIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />
            </IconButton>

            <IconButton onClick={() => {dispatch(toggleTheme())}}>
                {lightTheme && <NightlightIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />}
                {!lightTheme && <LightModeIcon className={'icon' + ((lightTheme) ? '' : ' dark')} />}
                
            </IconButton>

       </div>
    </div>
  )
}

export default SBHeader