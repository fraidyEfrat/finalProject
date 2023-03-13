import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import ArticleItem from './articleItem';

import { Table,TableBody } from '@mui/material';


const ArticlesList = () => {
    const [articels, setArticels] = useState([]);
    useEffect(() => {
      async function fetchData() {
          const {data:_articels} = await axios.get("http://localhost:3600/api/article")
          if(_articels?.length) setArticels(_articels)         
          console.log(_articels);
        }
        fetchData()
    }, []);
//cursor pointer

  return (   
    <>
    <div>articels---</div>
    <Table>
    <TableBody>
        <h2>theeeeeeeeeeeee</h2>

       {articels?.length && articels.map((article)=>{return <><ArticleItem article={article} /> </>})}
     </TableBody>
    </Table>
    </>
  )
}

export default ArticlesList;

// return (   
//     <>
//     <div>articels---</div>
//     <Table>
//       <TableBody>
//       {articels?.length && articels.map((article)=>{return <ArticleItem article={article} /> })}
//     </TableBody>
//     </Table>
//     </>
//   )