import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";



const UserRequest = ({name,age}) => {
  const navigate = useNavigate()
  const [request,setRequest]=useState("");
  const [err, setErr] = useState(null);




   const handleClick=async ()=>{
    //e.preventDefault();
      try {  
          let config = {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
          }    
        const res = await axios.post("http://localhost:3600/api/user_request",  {request}, config);
        navigate("/")
      } catch (err) {
        console.log(err);
        setErr(err.response.data?.message);
      }
    };
  //       console.log("in handleClick");
  //       try {  
          
          


          
  //            const res = await axios.post("http://localhost:3600/api/user_request",  {request}, {
  //              withCredentials: true,
  //            });
  //            console.log(res.data)

  //            localStorage.setItem("token", JSON.stringify(res.data.accessToken));
  //            navigate("/");      
  //             } catch (err) {
  //            setErr(err.response.data?.message);
  //          }
  // }
  
return (
  
   <div className="user-request-page">
    <h1>אזור אישי</h1>
      <input onChange={(e)=>{setRequest(e.target.value)}} type="text" placeholder=" נא לכתוב את שאלה כאן " ></input>
      <button onClick={handleClick}>שליחת השאלה</button> 
      
      </div>
    /*
     
     */
   
)
}

export default UserRequest
