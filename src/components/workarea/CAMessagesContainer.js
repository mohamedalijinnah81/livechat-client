import React from 'react'
import '../../styles/workarea/CAMessagesContainer.css'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'

const CAMessagesContainer = () => {
  return (
    <div className='chatarea-messages'>
      <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf />
    </div>
  )
}

export default CAMessagesContainer