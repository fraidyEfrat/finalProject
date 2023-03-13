import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home';
import UserRequest from './pages/שואל/Request';
import "./App.css"
function App() {
  const username="fraidy"
  return (
    <div className="App">
      <Router>
          <nav className='main-nav'>
          <NavLink to="/">דף הבית</NavLink>
          <NavLink to="/register">הרשמה</NavLink>
          <NavLink to="/login">כניסה</NavLink>
          <NavLink to="/userRequest">איזור אישי</NavLink>
          </nav>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
           <Route path="/userRequest" element={<UserRequest/>}></Route> 

          </Routes>
          

      </Router>
    </div>
  );
}

export default App;
