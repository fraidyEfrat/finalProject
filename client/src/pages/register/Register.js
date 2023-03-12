import React, { useState ,useNavigate} from 'react';
import axios from "axios";

const Register = () => {
  // const navigate=useNavigate()
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [city,setCity]=useState("");
  const [dateOfBirth,setDateOfBirth]=useState("");
  const [address,setAddress]=useState("");
  const [id,setId]=useState("");
  const [phone,setPhone]=useState("");
  const [watsup,setWatsup]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState(1);

  const [err, setErr] = useState(null);



  const handleRegister=async(e)=>{
    setErr("");
    e.preventDefault();

    try{
     const res= await axios.post("http://localhost:3000/api/user/",{firstName,lastName,email,city,dateOfBirth,address,id,phone,watsup,password,role});
      console.log("after await");
      console.log(res.data);
      // navigate("./login")
    }catch(err){
      setErr(err.response.data?.message);
    }
  };
  return (
    <div >
    <h1>Register</h1>
    <input onChange={(e)=>{setFirstName(e.target.value)}}  placeholder='first name'></input><br></br><br></br>;
    <input  onChange={(e)=>{setLastName(e.target.value)}}   placeholder='last name'></input><br></br><br></br>
    <input  onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input><br></br><br></br>
    <input  onChange={(e)=>{setCity(e.target.value)}} placeholder='city'></input><br></br><br></br>
    <input  onChange={(e)=>{setDateOfBirth(e.target.value)}} placeholder='age'></input><br></br><br></br>
    <input  onChange={(e)=>{setAddress(e.target.value)}} placeholder='address'></input><br></br><br></br>
    <input  onChange={(e)=>{setId(e.target.value)}} placeholder='id'></input><br></br><br></br>
    <input  onChange={(e)=>{setPhone(e.target.value)}} placeholder='phone number'></input><br></br><br></br>
    <input  onChange={(e)=>{setWatsup(e.target.value)}} placeholder='watsup'></input><br></br><br></br>
    <input  onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'></input><br></br><br></br>

    <button onClick={handleRegister}>register</button>
    
    {/* {arr &err}; */}
    </div>
    
  )
}

export default Register