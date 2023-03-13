import React from 'react';
import { Link,useNavigate } from "react-router-dom";
//import "./articles.scss";
import defaultImage from '../images/apple.jpg';
import defaultImage2 from '../images/mental-health.jpg';



const articles = () => {
  
  return (
    <>
    <div>
      <h1>{"demo-article"}</h1>
      <img src={defaultImage}  alt="Medical Article" />
    </div>
    <div>
      <h1>{"demo-article"}</h1>
      <img src={defaultImage2}  alt="Medical Article" />
    </div>
    </>
  )
}

export default articles