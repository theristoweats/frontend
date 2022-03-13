// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
// import { mobile } from "../responsive"; 
import { Link } from "react-router-dom";
import Categories from "./Categories";
import logo from "../icons/logo-red-2.png";
import cartIcon from "../icons/shopping-cart.png";
import loginIcon from "../icons/login.png";
import userIcon from "../icons/user-white.png";

const Container = styled.div` 
  display: flex; 
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: #242526;
  z-index: 999;
  border-bottom: 1px solid #393a3b;
`;

const Wrapper = styled.div`
    width:93%;
`;

const Header = styled.div`
  display:flex;
  align-items:center;
  height: 60px;
`;

const Logo = styled.div` 
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img` 
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 10px;
`;

const LogoText = styled.h1`
  font-size: 17px;
  margin-left: 10px;
  color: white;
  font-family: GilroyMedium;
`;

const SearchBar = styled.div`
  margin-left:50px;
  position: relative;
  display: flex;
  flex: 1;
`;

const MyCartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MyCartImg = styled.img`
  width: 17px;
  height: 17px;
  filter: brightness(0) invert(1); 
`;

const MyCart = styled.div`
  background-color: #3a3b3c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CountCartItems = styled.div` 
  width: 18px;
  height: 18px;
  background-color: #e41e3f;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -5px;
`;

const CoutnerItems = styled.span`
  color: white;
  font-size: 11px;
  font-family: GilroyLight;
`;

const LoginContainer = styled.div` 
  margin-left: 20px;
  background-color: #e41e3f;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  justify-content: center;
`;

const LoginBtnText = styled.span`
  font-size: 14px;
  color: white;
  font-family: "GilroyLight";
`;

const LoginIcon = styled.img` 
  width: 15px;
  height: 15px;
  margin-left: 5px; 
`;


const CategoriesContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  margin-top: 61px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #242526;
  z-index: 999;
  border-bottom: 1px solid #393a3b;
`;

const CategoriesRow = styled.div`
  display:flex;
`; 

const Navbar = () => {
  return (
    <> 
     <Container>
       <Wrapper>
          <Header>
              <Link to="/" style={{ textDecoration: 'none'}}>
                <Logo>
                  <LogoImg src={logo}></LogoImg>
                  <LogoText>The Ristow Eats</LogoText>
                </Logo>
              </Link>
              <SearchBar></SearchBar>
              <MyCartContainer>
                <Link to="/cart">
                  <MyCart>
                    <MyCartImg src={cartIcon}></MyCartImg>
                    <CountCartItems>
                      <CoutnerItems>10</CoutnerItems>
                    </CountCartItems>
                  </MyCart>
                </Link>
              </MyCartContainer>
              <Link to="/login" style={{"textDecoration":"none"}}>
                <LoginContainer>
                  <LoginBtnText>Најави се</LoginBtnText>
                  <LoginIcon src={loginIcon}></LoginIcon>
                </LoginContainer>
              </Link>
              
          </Header>
       </Wrapper>
     </Container>
    
     <CategoriesContainer>
        <Wrapper>
          <CategoriesRow>
            <Categories />
          </CategoriesRow>
        </Wrapper>
     </CategoriesContainer>
    </>
  );
};

export default Navbar;
