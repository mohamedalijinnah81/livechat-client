import React from 'react'
import './../../styles/workarea/MessageOthers.css'
import './../../styles/sidebar/ConversationItem.css'

const MessageOthers = ({ props }) => {
    // const props1 = {name: "Guest user", message: "This is a sample msg", timeStamp: "11:32am"}
    
  return (
    <div className='others-message-container'>
        <div className="others-conversation-container">
            <p className='convo-icon'>{props.sender.name[0]}</p>
            <div className="others-text-content">
              <p className='convo-title'>{props.sender.name}</p>
              <p>{props.content}</p>
              {/* <p className='self-timestamp'>{props1.timeStamp}</p> */}
            </div>
        </div>
    </div>
  )
}

export default MessageOthers