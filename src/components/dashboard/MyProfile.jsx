import styled from "styled-components";  
import "./style.css";
import MyProfileIcon from "../../icons/address.png";
import { useEffect, useState } from "react";
import { updateProfile } from "../../actions/userActions";
import PasswordVerifyModal from "./PasswordVerifyModal";
import VerifyPhoneNumberModal from "./VerifyPhoneNumberModal";
import { useDispatch, useSelector } from "react-redux";

const MainWrapper = styled.div``;

const InsideWrapper = styled.div`
    margin-top: 100px;
    padding: 45px;
`;

const MainPageInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextPageInfo = styled.div`
    display: flex;
    align-items: center;
`;

const MainTextPageInfo = styled.h1`
    font-family:GilroyLight;
    color: white;
    font-size: 30px;
`;

const IconBoxPageInfo = styled.div`
    margin-left: 15px;
    background-color: #e41e3f;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const IconPageInfo = styled.img`
    width: 20px;
    height: 20px;
`;  

const ProfileDetails = styled.div`
    margin-top: 30px;
`;

const InputBox = styled.div`
    margin-bottom: 15px;
`;

const InputBoxText = styled.label`
    color: #b8b8b8;
    font-family:GilroyLight;
    font-size: 14px;
`;

const InputMain = styled.div`
    display:flex;
`;

const Input = styled.input`

    margin-top: 10px;
    margin-bottom: 10px;
    width: 350px;
    height: 45px;
    border-radius: 10px;
    border: none;
    outline: none;

    background-color: #222222;
    color: white;
    padding-left: 15px;
    padding-right: 15px;
    font-family: GilroyLight;
`;

const ButtonSaveChanges = styled.button`
    background-color: #e41e3f;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 380px;
    border-radius: 10px;
    font-family: GilroyLight;
    outline:none;
    border:none;
    color:white;
    cursor:pointer;
`;

const MyProfile = ({setUsername}) =>{
    const dispatch = useDispatch();

    const { currentUser, isFetching, error } = useSelector((state) => state.user);

    const [verifiedPassword, setVerifiedPassword] = useState(false);
    const [verifyOldPassword, setVerifyOldPassword] = useState(false);
    const [verifyPhoneNumber, setVerifyPhoneNumber] = useState(false);
    
    const userData = currentUser; 
    const userId = JSON.parse(userData).others._id;
    const fullname = JSON.parse(userData).others.fullname;
    const email = JSON.parse(userData).others.email;
    const phonenumber = JSON.parse(userData).others.phonenumber;
    const [newFullname, setNewFullname] = useState();
    const [newPhonenumber, setNewPhonenumber] = useState();
    const [newPassword, setNewPassword] = useState();

    const handleSave = (e) =>  { 
        var pw = document.getElementById("passwordM").value;
        var phonenumber = document.getElementById("phoneNumber").value;

        if(!(newFullname !== undefined || newPhonenumber || pw.length > 0)){
            return false;
        }
        
        if(newPassword && newPassword.length < 8){
            return false;
        } 

        if(newFullname && newFullname.length > 0){
            updateProfile(dispatch, userData, newFullname, phonenumber, pw, setUsername, setVerifiedPassword);
        }

        if(newPhonenumber && newPhonenumber.length > 8){
            updateProfile(dispatch, userData, newFullname, phonenumber, pw, setUsername, setVerifiedPassword);
        }

        // if(phonenumber.length > 8){
        //     setVerifyPhoneNumber(true);
        // }

        if(pw.length > 8){
            setVerifyOldPassword(true);
        }
 
    }
    
    useEffect(() => { 
        if(verifiedPassword===true){
            var phonenumber = document.getElementById("phoneNumber").value;
            var pw = document.getElementById("passwordM").value;
            console.log(pw);
            updateProfile(dispatch, userData, newFullname, phonenumber, pw, setUsername, setVerifiedPassword);
            pw = '';
        }      
    }, [verifiedPassword]);

    return(
    <> 
        <MainWrapper>
            <InsideWrapper>

                <MainPageInfo>

                    <TextPageInfo>
                        <MainTextPageInfo>Мој профил</MainTextPageInfo>
                        <IconBoxPageInfo>
                            <IconPageInfo src={MyProfileIcon}/>
                        </IconBoxPageInfo>
                    </TextPageInfo>

                </MainPageInfo>

                <ProfileDetails>
                    <InputBox>
                        <InputBoxText>Име и презиме</InputBoxText>
                        <InputMain>
                            <Input type="text" placeholder="Вељко Велов" onChange={(e)=>setNewFullname(e.target.value)} defaultValue={fullname}/>
                        </InputMain>
                    </InputBox>  

                    
                     <InputBox>
                        <InputBoxText>Е-мајл</InputBoxText>
                        <InputMain>
                            <Input type="email" placeholder="info@eats.theristow.com" defaultValue={email} disabled={true}/>
                        </InputMain>
                    </InputBox>

                    <InputBox>
                        <InputBoxText>Телефонски број</InputBoxText>
                        <InputMain>
                            <Input type="text" placeholder="070141004" onChange={(e)=>setNewPhonenumber(e.target.value)} id="phoneNumber" defaultValue={phonenumber === "0" ? "": phonenumber}/>
                        </InputMain>
                    </InputBox>

                    
                    <InputBox>
                        <InputBoxText>Лозинка</InputBoxText>
                        <InputMain>
                            <Input type="password" placeholder="******" id="passwordM"/>
                        </InputMain>
                    </InputBox>

                    <ButtonSaveChanges onClick={(e)=>handleSave(e)}>Зачувај</ButtonSaveChanges>

                </ProfileDetails>

             
            </InsideWrapper>
        </MainWrapper>


        {verifyOldPassword && <PasswordVerifyModal setNewPassword={setNewPassword} setVerifyOldPassword={setVerifyOldPassword} setVerifiedPassword={setVerifiedPassword}/> }
       
        {/* {verifyPhoneNumber && <VerifyPhoneNumberModal setVerifyPhoneNumber={setVerifyPhoneNumber} /> } */}
    
        
    
    
    </>
    )
};

export default MyProfile;