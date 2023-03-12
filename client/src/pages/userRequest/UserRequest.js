import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";



const UserRequest = ({name,age}) => {
  const navigate = useNavigate()
  const [request,setRequest]=useState("");
  const [err, setErr] = useState(null);




   const handleClick=async ()=>{
        console.log("in handleClick");
        try {      
             const res = await axios.post("http://localhost:3000/api//user_request",  {request}, {
               withCredentials: true,
             });
             console.log(res.data)
             localStorage.setItem("token", JSON.stringify(res.data.accessToken));
             navigate("/");      
              } catch (err) {
             setErr(err.response.data?.message);
           }
  }
  
return (
  
   <div className="login-page">
    <h1>אזור אישי</h1>
      <input onChange={(e)=>{setRequest(e.target.value)}} type="text" placeholder="request" ></input>
      <button onClick={handleClick}>send request</button> 
      </div>
    /*
     
     */
   
)
}

export default UserRequest
