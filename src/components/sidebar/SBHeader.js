import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton } from '@mui/material';
import './../../styles/sidebar/SBHeader.css'

const SBHeader = () => {
  return (
    <div className='sb-header'>
       <div className="profile">
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
       </div>
       <div className="nav-links">
            <IconButton>
                <PersonAddIcon />
            </IconButton>
            <IconButton>
                <GroupAddIcon />
            </IconButton>
            <IconButton>
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