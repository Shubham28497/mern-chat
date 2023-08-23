import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats,setChats]= useState([])
  const fetchCharts = async () => {
    const {data} = await axios.get("/api/chat");
    setChats(data)
  };

useEffect(()=>{
  fetchCharts();
})

  return <div>{chats.map((chat)=>(
    <div key={chat._id}>{chat.chatName}</div>
  ))}</div>;
};

export default ChatPage;
