import React from 'react'
import './../../styles/workarea/MessageSelf.css'
import './../../styles/workarea/MessageOthers.css'

const MessageSelf = ({ props }) => {
    // const props2 = {name: "You", message: "I am just texting", timeStamp: "11:46am"}
    console.log(props);

  return (
    <div className='self-message-container'>
        <div className="messagebox">
            <p>{props.content}</p>
            {/* <p className='self-timestamp'>{props2.timeStamp}</p> */}
        </div>
    </div>
  )
}

export default MessageSelf;