import React from 'react'
import '../../styles/others/UsersAndGroups.css'
import './../../styles/sidebar/SBHeader.css'
import './../../styles/sidebar/SBSearchbar.css'
import './../../styles/sidebar/SBConversations.css'
import './../../styles/sidebar/ConversationItem.css'
import './../../styles/workarea/MobileChatArea.css'
import '../../styles/DarkTheme.css'
import logo from '../../images/live-chat.png'
import SBSearchbar from '../sidebar/SBSearchbar'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from "framer-motion"

const Users = () => {
    const lightTheme = useSelector((state) => state.themeKey);

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
            </div>
            <SBSearchbar />
            <div className="ug-list">
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
                </motion.div>
                <motion.div whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                    <p className='convo-icon'>T</p>
                    <p className='convo-title'>Temp User</p>
                </motion.div>
            </div>
        </motion.div>
    </AnimatePresence>
    
  )
}

export default Users