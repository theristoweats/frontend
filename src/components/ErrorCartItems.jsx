// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";     
import { Link } from 'react-router-dom';
 

const AnotherTextMain = styled.p`
    color:#ababab;
    font-size:14px;
    font-family: GilroyLight;  
`; 
const ErrorCartItems = () => { 
   
  return (
      <> 
        <AnotherTextMain>Нема испазарени производи. <Link to="/products/category/all" style={{color:"#4f95f3", textDecoration:"none", fontFamily:"GilroyLight"}}>Погледни ги производите</Link></AnotherTextMain>             
    </>
);
};

export default ErrorCartItems;
