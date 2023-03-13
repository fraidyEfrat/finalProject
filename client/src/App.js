import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
<<<<<<< HEAD
import Home from './pages/home';
import UserRequest from './pages/שואל/Request';
=======
import Home from './pages/home/Home';
import UserRequest from './pages/userRequest/UserRequest';
import Articles from './pages/articles/Articles';
>>>>>>> 5a25300f8dded1b82517562b09ef01b760b2af81
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
          <NavLink to="/articles">מאמרים</NavLink>
          </nav>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/userRequest" element={<UserRequest/>}></Route> 
          <Route path="/articles" element={<Articles/>}></Route> 
          </Routes>
          

      </Router>
    </div>
  );
}

export default App;
