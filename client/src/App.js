import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import "./App.css"
function App() {
  const username="fraidy"
  return (
    <Router>
        <nav>
        <NavLink to="/">דף הבית</NavLink>
        <NavLink to="/register">הרשמה</NavLink>
        <NavLink to="/login">כניסה</NavLink>
        </nav>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        </Routes>
        

    </Router>
  );
}

export default App;
