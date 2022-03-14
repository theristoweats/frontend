import { useState } from "react";
import styled from "styled-components";  
import { oldPasswordVerify } from "../../actions/userActions";

const Modal = styled.div`
position: fixed;
width:100%;
height:100%;
background-color:#000000cf;
z-index:999;
top:0;
display: grid;
place-items: center;
left:0;
`;

const InsideModalAsk = styled.div` 
`;

const InsideModalAskPro = styled.div`
display:flex;
`;  

const MainTextModal = styled.h3`
font-family: GilroyLight; 
color:white;
font-size:23px;
`;

const SecoundText = styled.p`
font-family: GilroyLight; 
color:#979797;
margin-top:10px;
font-size:14px;
`;

const ButtonsLoadHere = styled.div`
display:flex;  
margin-top:45px;
`;

const SingleButton = styled.div`
margin-right:10px;
display:flex;
`;

const ButtonLink = styled.a`
text-decoration:none;
color:white;
font-family: GilroyLight; 
`;

const SingleButtonInside = styled.div`
display:flex;
width:100px;
height:30px;
font-family: GilroyLight;

background-color: #161616;
border: 1px solid #343434;
align-items:center;
justify-content: center;
text-align:center;
border-radius:10px;
`;

const TextMainY  = styled.span`
font-family: GilroyLight;
font-size:14px;
`;

const MapLadHere = styled.div`
    height:500px; 
    width:100%;
`;

const LeftModal = styled.div`
  width: 500px;
  background-color: #18191a;
  border-left:5px solid #e41e3f;
  border-radius:10px;
`; 

const LeftModalInside = styled.div`
  padding:30px;
`;

const InputAddresses = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;
`;


const InputText = styled.label`
  color:white;
  font-size:14px;
  font-family: GilroyLight; 
`;

const Input = styled.input`
  padding-left:15px;
  padding-right:15px;
  outline:none;
  font-family: GilroyLight; 
  border-radius:10px;
  height:45px;
  color:white;
  font-size:14px;
  border:none;
  margin-top:10px;
  background-color:#242424;
`;

const PasswordVerifyModal = ({setNewPassword, setVerifyOldPassword, setVerifiedPassword}) =>{ 

    const [oldPassword, setOldPassword] = useState();

    const handleCancel = (e) => {
      e.preventDefault();
    //   setNewPassword(null);
      setVerifyOldPassword(false);
    }
    const userData = localStorage.getItem("user"); 

    const handleVerify = (e) => {
        e.preventDefault();
        if(oldPassword && oldPassword.length > 8){
            oldPasswordVerify(userData, setVerifiedPassword, oldPassword, setVerifyOldPassword);
        }
    }

    return (
      <Modal>
            <InsideModalAsk>
                <InsideModalAskPro>
                    <LeftModal>
                      <LeftModalInside>
                         
                          <MainTextModal>Потврди лозинка</MainTextModal>
                          <SecoundText>За да ја промените вашата лозинка потребно е да ја потврдите старата.</SecoundText>   
                          
                          <InputAddresses style={{marginTop:"25px"}}>
                            <InputText>Стара лозинка</InputText>
                            <Input type="password" placeholder="*******" onChange={(e)=>setOldPassword(e.target.value)}/>
                          </InputAddresses>
 

                          <ButtonsLoadHere>
                              <SingleButton>
                                  <ButtonLink href="#" onClick={(e)=>{handleVerify(e)}}>
                                      <SingleButtonInside>
                                          <TextMainY>Потврди</TextMainY>
                                      </SingleButtonInside>
                                  </ButtonLink>
                              </SingleButton>
                              <SingleButton>
                                  <ButtonLink href="#" onClick={(e)=>{handleCancel(e)}}>
                                      <SingleButtonInside>
                                          <TextMainY>Откажи</TextMainY>
                                      </SingleButtonInside>
                                  </ButtonLink>
                              </SingleButton>
                          </ButtonsLoadHere>
                        </LeftModalInside>
                    </LeftModal> 
                </InsideModalAskPro>
            </InsideModalAsk>
        </Modal>
    );
};

export default PasswordVerifyModal;