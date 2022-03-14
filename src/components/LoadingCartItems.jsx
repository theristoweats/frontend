// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
// import "../style/loadingcartitems.css";   


const TextLoad= styled.span`
    color:white;
    font-size:14px;
    font-family: GilroyLight; 
`;


const LoadingCartItems = () => { 
  
   
  return (
      <>
        <TextLoad>Вчитување ...</TextLoad>
    </>
);
};

export default LoadingCartItems;
