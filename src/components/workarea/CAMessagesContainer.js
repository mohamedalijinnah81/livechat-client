import React, { useState } from 'react'
import '../../styles/workarea/CAMessagesContainer.css'
import '../../styles/DarkTheme.css'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'
import { useSelector } from 'react-redux'

const CAMessagesContainer = ({ allMessages, userData }) => {
  const lightTheme = useSelector((state) => state.themeKey);
  // const [isArray, setIsArray] = useState(false);
  // // console.log(allMessages.length);
  // if(Array.isArray(allMessages)) {
  //   setIsArray(true);
  // }
  console.log(allMessages);

  return (
    <div className={'chatarea-messages' + ((lightTheme) ? '' : ' dark')}>
      {allMessages
        .slice(0)
        // .reverse()
        .map((message, index) => {
          const sender = message.sender;
          const self_id = userData.data._id;
          console.log(message);
          if(sender._id == self_id) {
            return <MessageSelf props={message} key={index} />
          } else {
            return <MessageOthers props={message} key={index} />
          }
        })
      }
      {/* <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf />
      <MessageOthers />
      <MessageSelf /> */}
    </div>
  )
}

export default CAMessagesContainer