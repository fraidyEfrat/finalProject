import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";



const Login = ({name,age}) => {
    const navigate = useNavigate()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [err, setErr] = useState(null);




     const handleClick=async ()=>{
          console.log("in handleClick");
          try {      
               const res = await axios.post("http://localhost:3600/api/auth/login",  { email, password}, {
                 withCredentials: true,
               });
               console.log(res.data)
               localStorage.setItem("token", res.data.accessToken);
               navigate("/");      
                } catch (err) {
               setErr(err.response.data?.message);
             }
    }
     const changeEmail=(e)=>{
         setEmail(e.target.value);
     }  
     const changePassword=(e)=>{
        setEmail(e.target.value);
     } 
return (
    
     <div className="login-page">
        <h1>Login{name}the age is{age}</h1>
    
        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="email" ></input>
        <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="password"></input> 
        <button onClick={handleClick}>login</button> 
        <Link to="/register">רישום</Link>
        </div>
      /*
       
       */
     
  )
}

export default Login
