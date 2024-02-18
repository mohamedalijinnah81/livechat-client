import React from 'react'
import '../../styles/others/UsersAndGroups.css'
import './../../styles/sidebar/SBHeader.css'
import './../../styles/sidebar/SBSearchbar.css'
import './../../styles/sidebar/SBConversations.css'
import './../../styles/sidebar/ConversationItem.css'
import logo from '../../images/live-chat.png'
import SBSearchbar from '../sidebar/SBSearchbar'

const Users = () => {
  return (
    <div className='list-container'>
        <div className="ug-header">
            <img src={logo} alt="Logo" style={{height: "2rem", width: "2rem", marginLeft: "10px"}} />
            <p className='ug-title'>Online Users</p>
        </div>
        <SBSearchbar />
        <div className="ug-list">
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
            <div className="ug-listitem">
                <p className='convo-icon'>T</p>
                <p className='convo-title'>Temp User</p>
            </div>
        </div>
    </div>
  )
}

export default Users