import React, { useContext, useEffect, useState } from 'react'
import './../../styles/sidebar/Sidebar.css'
import '../../styles/sidebar/MobileSidebar.css'
import SBHeader from './SBHeader'
import SBSearchbar from './SBSearchbar'
import SBConversations from './SBConversations'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { myContext } from '../MainContainer'
import axios from 'axios'

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { refresh, setRefresh } = useContext(myContext);
    const [conversations, setConversations] = useState([]);

    const userData = JSON.parse(localStorage.getItem("userData"));

    if(!userData) {
        console.log("User not authenticated");
        navigate("/");
    }

    const user = userData.data;
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            },
        };

        axios.get("http://localhost:5000/chat/", config).then((response) => {
            console.log("Data refresh in sidebar ", response.data);
            setConversations(response.data);
        });
    }, [refresh]);

    // const [conversations, setConversations] = useState([
    //     {
    //         title: "Jinnah",
    //         lastMessage: "I'll call you later",
    //         timeStamp: "today"
    //     },
    //     {
    //         title: "Mohamed",
    //         lastMessage: "He's online",
    //         timeStamp: "yesterday"
    //     },
    //     {
    //         title: "Ali",
    //         lastMessage: "Ok got it",
    //         timeStamp: "today"
    //     }
    // ])

  return (
    <div className='sidebar'>
        <SBHeader />
        <SBSearchbar />
        <SBConversations 
            conversations = {conversations}
            refresh={refresh}
            setRefresh={setRefresh}
            userData={userData}
        />
    </div>
  )
}

export default Sidebar