// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";    
import notResults from "../icons/no-results.png";
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom:100px;
`;

const Wrapper = styled.div`
    width:93%;
`; 

const LoadingMain= styled.div`
    width:100%;
    height:700px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const TextLoad= styled.span`
    color:white;
    font-size:20px;
    font-family: GilroyLight; 
    text-align:center;
`;

const ImgLoaPro = styled.img`
    width:300px;
    hegiht:300px;
    opacity:.8;
`;

const Left = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Right = styled.div`
    width:50%;
`;


const TextNotFf = styled.h1`
    font-size:35px;
    font-family: GilroyMedium; 
    color:white;
`;

const AnotherTextMain = styled.p`
    color:#ababab;
    font-size:16px;
    font-family: GilroyLight; 
    width:500px;
    margin-top:20px;
`;

const Button = styled.div`
    margin-top:20px;
    border-radius:10px;
    border:none;
    outline:none;
    padding-left:20px;
    padding-right:20px;
    font-family: GilroyLight; 
    padding-top:10px;
    padding-bottom:10px;
    cursor:pointer;
    border:1px solid #393a3b;
    color:white;
    background:transparent;
    font-size:15px;
`;

const ButtonBoxHere = styled.div`
    display:flex;

`;

const ErrorScreen = () => { 
  
   
  return (
      <>
      <Container>
          <Wrapper>

            <LoadingMain>
                <Left>
                    <ImgLoaPro src={notResults}></ImgLoaPro>
                </Left>
                <Right>
                    <TextNotFf>Не се пронајдени продукти</TextNotFf>
                    <AnotherTextMain>За жал се селучи некаков проблем, не се грижи можеш да се обидеш повторно</AnotherTextMain>
                    <ButtonBoxHere>
                        <Link to="/products/category/all" style={{textDecoration:'none'}}><Button>Кон сите продукти</Button></Link>
                    </ButtonBoxHere>
                </Right>
            </LoadingMain> 
          </Wrapper>

      </Container>
    </>
);
};

export default ErrorScreen;
