import { useState } from "react";
import { Link } from "react-router-dom";



const Login = ({name,age}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [err, setErr] = useState(null);


     const handleClick=()=>{
          console.log("in handleClick");
          // try {      
          //      const res = await axios.post("http://localhost:3000/api/login",  { username, password}, {
          //        withCredentials: true,
          //      });
          //      console.log(res.data)
          //      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
          //      // navigate("/book/list")
          //    } catch (err) {
          //      setErr(err.response.data?.message);
          //    }
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
    
        <input type="text" placeholder="email" onChange={changeEmail} ></input>
        <input type="text" placeholder="password"></input> 
        <button onClick={handleClick()}>login</button> 
        <Link to="/register">רישום</Link>
        </div>
      /*
       
       */
     
  )
}

export default Login
