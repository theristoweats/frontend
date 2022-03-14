// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";    
import "../style/loadingpage.css";   


const LoadingMain= styled.div`
    width:100%;
    height:700px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const TextLoad= styled.span`
    color:white;
    font-size:20px;
    font-family: GilroyLight; 
    text-align:center;
`;


const LoadingScreen = () => { 
  
   
  return (
      <>
        <LoadingMain>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </LoadingMain> 
    </>
);
};

export default LoadingScreen;
