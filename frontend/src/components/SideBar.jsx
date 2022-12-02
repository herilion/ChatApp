import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.jpeg";
import '../styles/SideBar.css';

export default function SideBar({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      <div className="Container">
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h3>SOLOLA Chat</h3>
        </div>
        <div className="current-user">
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
        </div>
        <div className="contacts">
          {contacts.map((contact, index) => {
            return (
              <div
                key={contact._id}
                className={`contact ${index === currentSelected ? "selected" : ""
                  }`}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}