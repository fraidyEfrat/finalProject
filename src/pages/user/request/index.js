import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


//
const UserRequest = ({name,age}) => {
  const navigate = useNavigate()
  const [subject,setSubject]=useState("");
  const [request,setRequest]=useState("");
 
  const [err, setErr] = useState(null);
  const response="";
  const date=new Date();
  const status="send";

  //const id = JSON.parse(sessionStorage.getItem('user')).userId;
  

   const handleClick=async ()=>{
    //e.preventDefault();
      try {  
          let config = {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
          } 
        const data=new Date;
        const status="request:sent";
        console.log(data);
        await axios.post("http://localhost:3600/api/user_request",  {subject,request,data}, config);
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
      
      <input onChange={(e)=>{setSubject(e.target.value)}} type="text" placeholder=" נא לכתוב את נושא השאלה כאן " ></input><br/><br/>
      <input onChange={(e)=>{setRequest(e.target.value)}} type="text" placeholder=" נא לכתוב את שאלה כאן " ></input><br/><br/>
      <button onClick={handleClick}>שליחת השאלה</button> <br/><br/>
      <label> בקשתך נשלחה בהצלחה ניידעך במייל כאשר בקשתך תטופל בהקדם בהצלחה יום נעים מתנדבות מרכז מידע לבריאות האישה בני-ברק</label>
      
      </div>
    /*
     
     */
   //////////////
)
}

export default UserRequest
