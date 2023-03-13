import { useParams } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom"
//import { TableRow,Button } from '@mui/material';
//import { styled } from '@mui/material/styles';
//import TableCell, { tableCellClasses } from '@mui/material/TableCell';



//import Myimg from {imgsrc};

const Article = ({initiator}) => {
const {imgsrc}=useParams();
  return (
    <>
    <img src={imgsrc} alt="Medical Article"></img>
    </>
  )
}

export default Article;

