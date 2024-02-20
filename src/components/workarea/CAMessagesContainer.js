import React from 'react'
import '../../styles/workarea/CAMessagesContainer.css'
import '../../styles/DarkTheme.css'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'
import { useSelector } from 'react-redux'

const CAMessagesContainer = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={'chatarea-messages' + ((lightTheme) ? '' : ' dark')}>
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