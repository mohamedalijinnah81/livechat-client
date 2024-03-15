import React, { useContext, useEffect, useState } from 'react'
import './../../styles/workarea/ChatArea.css'
import './../../styles/workarea/MobileChatArea.css'
import CAHeader from './CAHeader'
import CAMessagesContainer from './CAMessagesContainer'
import CATextInputArea from './CATextInputArea'
import { useParams } from 'react-router-dom'
import { myContext } from '../MainContainer'
import axios from 'axios'
import { Skeleton } from '@mui/material'
import io from 'socket.io-client'
// import { all } from '../../../../livechat-server/routes/messageRoutes'

const ENDPOINT = "http://localhost:5000";

var socket, chat;
const WorkArea = () => {

  // console.log(myContext);
  const [messageContent, setMessageContent] = useState("");
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams.id.split("&");
  // var chat_id = dyParams.id; 
  // var chat_user = dyParams.id; 

  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  // var allMessages = [];
  const [allMessagesCopy, setAllMessagesCopy] = useState([]);

  const {refresh, setRefresh} = useContext(myContext);
  const [loaded, setLoaded] = useState(false);
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false);

  const sendMessage = () => {
    var data = null;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        "http://localhost:5000/message/",
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(({ response }) => {
        data = response;
        console.log("Message Fired");
      });
    // console.log(data);
    // socket.emit("new message", data)
  };

  // new message received
  // useEffect(() => {
  //   socket.on("message received", (newMessage) => {
  //     if(!allMessagesCopy || allMessagesCopy._id !== newMessage._id) {
  //       // setAllMessages([...allMessages], newMessage)
  //     } else {
  //       setAllMessages([...allMessages], newMessage);
  //     }
  //   });
  // });

  // connect to socket
  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", userData);
  //   socket.on("connection", () => {
  //     setSocketConnectionStatus(!socketConnectionStatus);
  //   });
  // }, []);

  // fetch chats
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get("http://localhost:5000/message/" + chat_id, config)
      .then(({ data }) => {
        console.log(data);
        setAllMessages(data);
        // allMessages = data;
        console.log(allMessages);
        setLoaded(true);
        // socket.emit("join chat", chat_id);
      });
    setAllMessagesCopy(allMessages);
  }, [refresh, chat_id, userData.data.token]);

  if(!loaded) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton 
          variant='rectangular'
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton 
          variant='rectangular'
          sx={{ 
            width: "100%", 
            borderRadius: "10px",
            flexGrow: "1" 
          }}
        />
        <Skeleton 
          variant='rectangular'
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  } else {
      return (
        <div className='chat-area'>
        <CAHeader 
          chatUser={chat_user}
          allMessages={allMessages}
          userData={userData}
        />
        <CAMessagesContainer 
          allMessages={allMessages}
          userData={userData}
        />
        <CATextInputArea 
          setMessageContent={setMessageContent}
          sendMessage={sendMessage}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
      );
  }

  // setAllMessages([{name: "jinnah"}])
  // console.log(allMessages);
  // const [chatData, setChatData] = useState([
  //     {
  //         name: "Jinnah",
  //         lastMessage: "Hey byy",
  //         timeStamp: "online"
  //     }, 
  //     {
  //         name: "Mohamed",
  //         lastMessage: "How are you",
  //         timeStamp: "yesterday"
  //     }, 
  //     {
  //         name: "Ali",
  //         lastMessage: "Byy",
  //         timeStamp: "yesterday"
  //     }, 
  //     {
  //         name: "Sa",
  //         lastMessage: "Active now",
  //         timeStamp: "today"
  //     }
  // ]);

  // var props = chatData[0];

  // return (
    
  // )
}

export default WorkArea