// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions"; 
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import FbLoginIcon from "../icons/facebook-2.png";
import GoogleLoginIcon from "../icons/google.png";
import DbIcon from "../images/loginwin.png";
// import SocialButton from "../actions/SocialButtons";
import { mobile, desktop1, desktop, desktop2, desktop3, mobile1, mobile3 } from "../responsive";

const Container = styled.div` 
    display: flex;
    justify-content: center;
    padding-top: 60px;
    align-items: center; 
`;

const Wrapper = styled.div`
    width:93%;
`;

const LoginLoad = styled.div`
  height: auto;
  display: flex; 
  padding-top: 90px;
  ${mobile1({ width: "100%", hegiht:"100vh" })}
`;

const Left = styled.div`
  width: 50%;
  background-color: #161616;
  display: flex;
  align-items: center;
  justify-content: center; 
  ${mobile1({ width: "100%", paddingTop:"100px", paddingBottom:"100px" })}
  ${mobile3({   paddingTop:"70px", paddingBottom:"70px"})}

   
`;

const LeftInside = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${mobile1({ width: "100%", paddingTop:"100px", paddingBottom:"100px" })}
  ${mobile3({ width: "85%", paddingTop:"0px", paddingBottom:"0px"})}

`;

const LeftMainTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.h1`
  font-size: 30px;
  font-family: GilroyLight;
  color: white;
  ${mobile3({ fontSize: "25px"})}
`;

const SingleText = styled.p`
  font-size: 15px;
  color: #c2c2c2;
  margin-top: 10px;
  font-family: GilroyLight;
`;

const LoginWithSocialMedia = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  ${mobile3({ flexDirection: "column"})}

`;

const LoginWithFacebook = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  border:none;
  border: 1px solid #444444;
  height: 45px; 
  border-radius: 10px;
  cursor:pointer;
  font-family: GilroyLight;
  background-color:transparent;
  color:white;
  ${mobile3({ width: "100%"})}
`;

const IconFB = styled.img`
  margin-right: 10px;
  width: 22px;
  height: 22px;
`;



const LoginWithGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  border:none;
  border: 1px solid #444444;
  height: 45px; 
  border-radius: 10px;
  cursor:pointer;
  font-family: GilroyLight;
  background-color:transparent;
  color:white;
  ${mobile3({ width: "100%", marginTop:"10px;"})}
`;

const IconGOOGLE = styled.img`
  margin-right: 10px;
  width: 22px;
  height: 22px;
`;

const OrWith = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  margin-top: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3e4042;
`;

const OrWithText = styled.div`
  width: 240px;
  color: white;
  font-family: GilroyLight;
  font-size: 14px;
`;

const InputsProfileLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Input = styled.input`
  
  width: 400px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  outline: none;
  background-color: #222222;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
  font-size: 14px;
  font-family: GilroyLight; 
  ${mobile3({ width: "100%"})}
`;

const ForgotPasswordRememberMe = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-between;
  ${mobile3({ width: "100%"})}
`;

const RememberMe = styled.a`
  color: #b4b4b4;
  text-decoration:none;
  font-family: GilroyLight;
  font-size: 14px;
`;

const ForgotedPassword = styled.a`  
  text-decoration:none;
  font-family: GilroyLight;
  color: #b4b4b4;
  font-size: 14px;
`;

const LoginButton = styled.button`
  width: 420px;
  height: 50px;
  background-color: #e41e3f;
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
  outline:none;
  border-radius: 10px;
  font-family: GilroyLight;
  color:white;
  font-size:15px;
  margin-top:25px;
  cursor:pointer;

  &:disabled{
    opacity:.5;
    cursor:not-allowed;
  } 
  ${mobile3({ width: "100%"})}

`;

const NotMemberRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #b4b4b4;
  font-size: 14px;
  ${mobile3({ flexDirection: "column"})}
`;

const NotMemberRegisterText = styled.p`
  color: #b4b4b4;
  font-family: GilroyLight;
`;

const RegisterClick = styled.a`
  color: white;
  margin-left: 5px;
  font-weight: bold;
  text-decoration:none;
  font-family: GilroyLight; 
`;

const Right = styled.div`
  width: 50%;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center; 
  ${mobile1({ display: "none" })}
`;

const RightImg = styled.img` 
    width: 500px; 
    ${mobile1({ width: "400px" })}

`;

const ErrorBox = styled.div`
  width:420px;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;  
  background-color: #101010;
  border-left: 5px solid #e41e3f;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ErrorText = styled.span`
  font-family: GilroyLight; 
  color:white;
  font-size:15px;
`;

const HeroSection = () => {
  // const useCookies = useCookies();
  const navigate = useNavigate(); 

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  
  const handelClick = (e) => {
    if(email && password) login(dispatch, {email, password}, navigate); 
  }; 

  // // setUser("da");
  // // console.log(user);
  // const handleSocialLogin = (user) => {
  //   console.log(user);
  // };

  // const handleSocialLoginFailure = (err) => {
  //   console.error(err);
  // };


  return (
    <LoginLoad>
      <Left>
        <LeftInside>
          <LeftMainTexts>
            <MainText>Најави се на твојата сметка</MainText>
            <SingleText>Најава со социјалните мрежи</SingleText>
          </LeftMainTexts>
          <LoginWithSocialMedia>    
          {/* <SocialButton
            provider="facebook"
            appId="492231135730862"
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            Login with Facebook
          </SocialButton>         */}
            <LoginWithFacebook style={{"marginRight":"10px"}}>
              <IconFB src={FbLoginIcon} />
              Најава со Facebook
            </LoginWithFacebook>
            <LoginWithGoogle>
              <IconGOOGLE src={GoogleLoginIcon} />
              Најава со Google
            </LoginWithGoogle>
          </LoginWithSocialMedia>
          <OrWith>
            <Line></Line>
            <OrWithText>Или со</OrWithText>
            <Line></Line>
          </OrWith>
          <InputsProfileLogin> 

            {error && <ErrorBox>
              <ErrorText>Погрешни податоци!</ErrorText>
            </ErrorBox>}
            <Input type="text" placeholder="Е-мајл" onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password"  placeholder="Лозинка" onChange={(e)=>setPassword(e.target.value)}/> 
            <ForgotPasswordRememberMe>
              <RememberMe href="#">Запомни ме</RememberMe>
              <ForgotedPassword href="#">Запоравена лозинка?</ForgotedPassword>
            </ForgotPasswordRememberMe>
            <LoginButton onClick={handelClick} disabled={isFetching}>Најави се</LoginButton>
            <NotMemberRegister>
              <NotMemberRegisterText>Сеуште не сте регистрирани?</NotMemberRegisterText>
              <Link to="/register" style={{textDecoration:"none", color:"white", marginLeft:"5px", fontWeight:"bold", fontFamily:"GilroyLight"}}>Регистрирај се</Link>
            </NotMemberRegister>
          </InputsProfileLogin>
        </LeftInside>
      </Left>
      <Right>
        <RightImg src={DbIcon}/>
      </Right>
    </LoginLoad>
  );
};

export default HeroSection;
