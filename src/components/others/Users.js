import React, { useEffect, useState } from 'react'
import '../../styles/others/UsersAndGroups.css'
import './../../styles/sidebar/SBHeader.css'
import './../../styles/sidebar/SBSearchbar.css'
import './../../styles/sidebar/SBConversations.css'
import './../../styles/sidebar/ConversationItem.css'
import './../../styles/workarea/MobileChatArea.css'
import '../../styles/DarkTheme.css'
import logo from '../../images/live-chat.png'
import SBSearchbar from '../sidebar/SBSearchbar'
import RefreshIcon from "@mui/icons-material/Refresh"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"
import { refreshSidebarFun } from "../../features/refreshSidebar"
import { IconButton } from '@mui/material'

const Users = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    const [refresh, setRefresh] = useState(true);
    const [users, setUsers] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));

    const nav = useNavigate();
    const dispatch = useDispatch();
    if(!userData) {
        console.log("User not authenticated");
        nav(-1);
    }

    useEffect(() => {
        console.log("Users refreshed");
        const config = {
            headers: {
                Authorization: `Bearer ${userData.data.token}`,
            },
        };
        axios.get("http://localhost:5000/user/fetchUSers", config).then((data) => {
            console.log("User data from API: ", data);
            setUsers(data.data);
        });
    }, [refresh]);

  return (
    <AnimatePresence>
        <motion.div 
            initial={{opacity: 0, scale: 0}} 
            animate={{opacity: 1, scale: 1}} 
            exit={{opacity: 0, scale: 0}} 
            transition={{
                ease: "anticipate",
                duration: "0.3"
            }} 
            className='list-container'>
            <div className={'ug-header' + ((lightTheme) ? '' : ' dark')}>
                <img src={logo} alt="Logo" style={{height: "2rem", width: "2rem", marginLeft: "10px"}} />
                <p className='ug-title'>Online Users</p>
                <IconButton
                    className={"icon" + (lightTheme ? "" : " dark")}
                    onClick={() => {
                        setRefresh(!refresh);
                    }}
                >
                    <RefreshIcon />
                </IconButton>
            </div>
            <SBSearchbar />
            <div className="ug-list">
                {users.map((user, index) => {
                    return (
                        <motion.div 
                            whileHover={{scale: 1.01}} 
                            whileTap={{scale: 0.98}} 
                            className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}
                            key={index}
                            onClick={() => {
                                console.log("Creating chat with ", user.name);
                                const config = {
                                    headers: {
                                        Authorization: `Bearer ${userData.data.token}`,
                                    },
                                };
                                axios.post(
                                    "http://localhost:5000/chat/",
                                    {
                                        userId: user._id,
                                    },
                                    config
                                );
                                dispatch(refreshSidebarFun());
                            }}
                        >
                            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>{user.name[0].toUpperCase()}</p>
                            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
                            {user.name}
                            </p>
                        </motion.div>
                    );
                })}
                {/* <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div> */}
            </div>
        </motion.div>
    </AnimatePresence>
    
  )
}

export default Users