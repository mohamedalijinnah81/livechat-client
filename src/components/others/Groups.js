import React from 'react'
import '../../styles/others/UsersAndGroups.css'
import './../../styles/sidebar/SBHeader.css'
import './../../styles/sidebar/SBSearchbar.css'
import './../../styles/sidebar/SBConversations.css'
import './../../styles/sidebar/ConversationItem.css'
import '../../styles/DarkTheme.css'
import logo from '../../images/live-chat.png'
import SBSearchbar from '../sidebar/SBSearchbar'
import { useSelector } from 'react-redux'

const Groups = () => {
    const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='list-container'>
        <div className={'ug-header' + ((lightTheme) ? '' : ' dark')}>
            <img src={logo} alt="Logo" style={{height: "2rem", width: "2rem", marginLeft: "10px"}} />
            <p className='ug-title'>Available Groups</p>
        </div>
        <SBSearchbar />
        <div className="ug-list">
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
            <div className={'ug-listitem' + ((lightTheme) ? '' : ' dark')}>
                <p className='convo-icon'>N</p>
                <p className='convo-title'>New Group</p>
            </div>
        </div>
    </div>
  )
}

export default Groups