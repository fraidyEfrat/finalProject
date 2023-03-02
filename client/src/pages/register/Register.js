import React, { useState } from 'react'

const Register = () => {
  // const navigate=useNavigate()
  const [userName,seyUserName]=useState("");
  const[err,setErr]=useState(null);

  const handleClick=async(e)=>{
    setErr("");
    e.preventDefault();

    // try{
    //   await axios.post("http://localhost:3000/api/login",{userName});
    //    navigate("./login")
    // }catch(err){
    //   setErr(err.response.data?.message);
    // }
  };
  return (
    <div >
    <h1>Register</h1>
    {/* {arr &err}; */}
    </div>
    
  )
}

export default Register