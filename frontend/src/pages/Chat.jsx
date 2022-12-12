import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import user from '../assets/user.png'
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/SideBar";
import '../styles/Chat.css'

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
      setContacts(data.data);
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <div className="biggContainer">
        <div className="userInfo">
          <img src={user} alt="user logo" />
          <span>{currentUserName}</span>
        </div>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <></>
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </div>
    </>
  );
}