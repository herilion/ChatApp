import './App.css';
import NavigationBar from './composants/Navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='element=' />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
