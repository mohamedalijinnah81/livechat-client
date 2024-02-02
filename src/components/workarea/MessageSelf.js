import React from 'react'
import './../../styles/workarea/MessageSelf.css'
import './../../styles/workarea/MessageOthers.css'

const MessageSelf = () => {
    const props2 = {name: "You", message: "I am just texting", timeStamp: "11:46am"}

  return (
    <div className='self-message-container'>
        <div className="messagebox">
            <p>{props2.message}</p>
            <p className='self-timestamp'>{props2.timeStamp}</p>
        </div>
    </div>
  )
}

export default MessageSelf