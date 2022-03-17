// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ArrowDown from "../icons/arrow-down.png";
import FbLoginIcon from "../icons/facebook-2.png";
import GoogleLoginIcon from "../icons/google.png";
import DbIcon from "../images/loginwin.png";
import { register } from "../actions/userActions";
import validator from 'validator';

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
  height: 100vh;
  display: flex; 
  padding-top: 90px;
`;

const Left = styled.div`
  width: 50%;
  background-color: #161616;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const LeftInside = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
`;

const ForgotPasswordRememberMe = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-between;
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
`;

const NotMemberRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #b4b4b4;
  font-size: 14px;
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
`;

const RightImg = styled.img` 
    width: 500px;
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

const InputWithErrorMessage = styled.div`
  position:relative;
`;

const InputErrorMessage = styled.div`
  position: absolute;
  top: 0;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-color: #e41e3f;
  display: flex;
  align-items: c;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: -49px;
`;

const InputErrorMessageText = styled.span`
  font-family: GilroyLight; 
  color:white;
  font-size:14px;
`;

const InputErrorMessageInside = styled.div`
  position:relative;
`;

const IconInputErrorMessage = styled.img`
  bottom: 0;
  margin-bottom: -31px;
  width: 30px;
  height: 30px;
  position:absolute
`;


const RegisterMain = ({setUsername, user, setUser, setLoadingUserData}) => {
  const navigate = useNavigate(); 

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  
  const [fullname, setFullName] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  
  const handelClick = (e) => {
      if (!(fullname && fullname.length > 1)){
        return false;
      }

      // if (!(phoneNumber && phoneNumber.length > 1)){
      //   return false;
      // }
 
      if (!(email && email.length > 1 && validator.isEmail(email))){
        if(email.length > 1){
          setEmailError("Не валидна е-мајл адреса.");
        }
        return false;
      }

      if (!(password && password.length >= 8)){
          if(password.length > 1){
            setPasswordError(true);
          }
          return false;
      }
      

      register(dispatch, {fullname, email, password}, navigate, setUser, setLoadingUserData, setEmailError, setRegisterLoading, setUsername);
  }; 

  const setEmailChange = (e) => {
    setEmail(e.target.value);
    if(emailError){
      setEmailError(null);
    } 
  };

  const setPasswordChange = (e) => {
    setPassword(e.target.value);
    if(passwordError){
      setPasswordError(false);
    }
  };
  
  return (
    <LoginLoad>
      <Left>
        <LeftInside>
          <LeftMainTexts>
            <MainText>Регистрирај нова сметка</MainText>
            <SingleText>Регистрирај со социјалните мрежи</SingleText>
          </LeftMainTexts>
          <LoginWithSocialMedia>            
            <LoginWithFacebook style={{"marginRight":"10px"}}>
              <IconFB src={FbLoginIcon} />
                Преку Facebook
            </LoginWithFacebook>
            <LoginWithGoogle>
              <IconGOOGLE src={GoogleLoginIcon} />
              Преку Google
            </LoginWithGoogle>
          </LoginWithSocialMedia>
          <OrWith>
            <Line></Line>
            <OrWithText>Или со</OrWithText>
            <Line></Line>
          </OrWith>
          <InputsProfileLogin> 
{/* 
            {error && <ErrorBox>
              <ErrorText>Погрешни податоци!</ErrorText>
            </ErrorBox>} */}
            <Input type="text"  placeholder="Име и презиме"  onChange={(e)=>setFullName(e.target.value)}/> 
            {/* <Input type="text"  placeholder="Телефонски број"  />  */}
            <InputWithErrorMessage>
             
              {emailError && <InputErrorMessage>
                 <InputErrorMessageInside>
                    <IconInputErrorMessage src={ArrowDown}/>
                    <InputErrorMessageText>{emailError}</InputErrorMessageText>
                 </InputErrorMessageInside>
              </InputErrorMessage> }

              <Input type="email" placeholder="Е-мајл"  onChange={(e)=>{setEmailChange(e)}}/>
            </InputWithErrorMessage>

            <InputWithErrorMessage>
       
             {passwordError && <InputErrorMessage>
                 <InputErrorMessageInside>
                    <IconInputErrorMessage src={ArrowDown}/>
                    <InputErrorMessageText>Кратка лозинка, мин. 8 букви.</InputErrorMessageText>
                 </InputErrorMessageInside>
              </InputErrorMessage> }

              <Input type="password" placeholder="Лозинка" onChange={(e)=>{setPasswordChange(e)}} />
            </InputWithErrorMessage>

            <LoginButton onClick={handelClick} disabled={registerLoading}>Регистрирај се</LoginButton>
            <NotMemberRegister>
              <NotMemberRegisterText>Веќе сте регистрирани?</NotMemberRegisterText>
              <Link to="/login" style={{textDecoration:"none", color:"white", marginLeft:"5px", fontWeight:"bold", fontFamily:"GilroyLight"}}>Најви се</Link>
               
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

export default RegisterMain;
