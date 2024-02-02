import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './../../styles/sidebar/SBSearchbar.css'
import { IconButton } from '@mui/material';

const SBSearchbar = () => {
  return (
    <div className='searchbar'>
        <IconButton>
            <SearchIcon />
        </IconButton>
        <input type="text" className='search-box' placeholder='search' />
    </div>
  )
}

export default SBSearchbar