import React, { useState } from 'react'
import '../../styles/others/CreateGroups.css'
import '../../styles/sidebar/SBSearchbar.css'
import '../../styles/DarkTheme.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const nav = useNavigate();
  // if(!userData) {
  //   console.log("User not authenticated");
  //   nav("/");
  // }

  // const user = userData.data;
  // const [groupName, setGroupName] = useState("");
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const createGroup = () => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };

  //   axios.post(
  //     "http://localhost:5000/chat/createGroup",
  //     {
  //       name: groupName,
  //       users: '[]',
  //     }
  //   )
  // }

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