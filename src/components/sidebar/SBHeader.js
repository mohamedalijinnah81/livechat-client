import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';
import './../../styles/sidebar/SBHeader.css'
import { useNavigate } from 'react-router-dom';

const SBHeader = () => {
    const navigate = useNavigate();

  return (
    <div className='sb-header'>
       <div className="profile">
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
       </div>
       <div className="nav-links">
            <IconButton onClick={() => {
                navigate('users');
            }}>
                <PersonAddIcon />
            </IconButton>
            <IconButton onClick={() => {
                navigate('groups');
            }}>
                <GroupAddIcon />
            </IconButton>
            <IconButton onClick={() => {
                navigate('creategroups')
            }}>
                <AddCircleIcon />
            </IconButton>
            <IconButton>
                <NightlightIcon />
            </IconButton>
       </div>
    </div>
  )
}

export default SBHeader