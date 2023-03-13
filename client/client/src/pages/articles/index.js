import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import "./articles.scss";
import defaultImage from '../images/apple.jpg';
import defaultImage2 from '../images/mental-health.jpg';
import axios from "axios";
import { useState } from "react";
//import { Table,TableBody } from '@mui/material';
import Article from './Article';




const Articles = () => {

  const [err, setErr] = useState(null);
  const [arts, setArts] = useState([]);
  const [res, setRes] = useState([])
useEffect(()=>{getArticles()},[])
  const getArticles = async () => {
    console.log("in getArticles");
    try {
      console.log("eeeeeeeeeeee");
      const {data:_res}= await axios.get("http://localhost:3600/api/article") 
      if(_res?.length) {
        setRes(_res);        
        console.log(res);
      }
      //console.log(data);
      
      console.log("_res");
      console.log(_res);
      console.log("res");
      console.log(res);
      //const articles = await res.json();
      //console.log(res.data)
    } catch (err) {
      console.log(err);
      //setErr(err.response.data?.message);
    }
    setArts(await res.json());
  }

  /* <div>
    <h1>{"demo-article"}</h1>
    <img src={defaultImage}  alt="Medical Article" />
  </div>
  <div>
    <h1>{"demo-article"}</h1>
    <img src={defaultImage2}  alt="Medical Article" />
  </div> */
  //const r=res.data.map((article) => { return <img src={defaultImage} alt="trying to see if it works"> </img> })
  return (
    <>
    <div>articles---</div>
    {/* <Table>
      <TableBody>
      {res?.length && res.map((res)=>{return <Articles res={res} /> })}
    </TableBody>
    </Table> */}
          {res?.length && res.map((res)=>{return <Article imgsrc={res.picture} /> })}

    </>
  )
};

export default Articles
//