import React from 'react'
import '../../styles/others/CreateGroups.css'
import '../../styles/sidebar/SBSearchbar.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material'

const CreateGroups = () => {
  return (
    <div className='creategroups-container'>
        <input type="text" placeholder='Enter Group Name' className='search-box' />
        <IconButton>
            <DoneOutlineIcon />
        </IconButton>
    </div>
  )
}

export default CreateGroups