import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './../../styles/sidebar/SBSearchbar.css'
import '../../styles/DarkTheme.css'
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const SBSearchbar = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'searchbar' + ((lightTheme) ? '' : ' dark')}>
        <IconButton>
            <SearchIcon className={'search-icon' + ((lightTheme) ? '' : ' dark')} />
        </IconButton>
        <input type="text" className={'search-box' + ((lightTheme) ? '' : ' dark')} placeholder='Search' />
    </div>
  )
}

export default SBSearchbar