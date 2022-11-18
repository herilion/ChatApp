import './App.css';
import NavigationBar from './composants/Navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AppContext, socket } from './contexts/appContext';

function App() {
  //the rooms
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  // users and message
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const user = useSelector((state) => state.user);
  return (
    <AppContext.Provider value={{
      socket, currentRoom, setCurrentRoom,
      members, setMembers,
      messages, setMessages,
      privateMemberMsg, setPrivateMemberMsg,
      rooms, setRooms,
      newMessages, setNewMessages
    }}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {!user && (
            <>
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </>
          )}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;
