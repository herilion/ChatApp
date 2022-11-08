import './App.css';
import NavigationBar from './composants/Navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Chat from './pages/Chat';
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
