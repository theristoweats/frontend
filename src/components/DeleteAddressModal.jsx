import styled from "styled-components"; 
import { deleteAddress } from "../actions/addressesActions";
 
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
width:450px;
border-left:5px solid #e41e3f;
background-color:#18191a;
border-radius:10px
`;

const InsideModalAskPro = styled.div`
padding:30px;
`;  

const MainTextModal = styled.h3`
font-family: GilroyLight; 
color:white;
font-size:20px;
`;

const SecoundText = styled.p`
font-family: GilroyLight; 
color:#b3b3b3;
margin-top:20px;
font-size:14px;
`;

const ButtonsLoadHere = styled.div`
display:flex;  
margin-top:25px;
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
const DeleteAddressModal = ({addressDeleteId, setAddressDeleteId, setNewAddress, user}) =>{ 

    const userData = localStorage.getItem("user"); 
    
    const handleCancel = (e)=>{
        e.preventDefault();
        setAddressDeleteId(null);
    }

    const handleDeleteYes = (e) =>{
        deleteAddress(userData, addressDeleteId, setNewAddress, setAddressDeleteId);
    }

    return (
        <>

            <Modal>
                <InsideModalAsk>
                    <InsideModalAskPro>
                        <MainTextModal>Вниманије! Ќе ја избришете адресата.</MainTextModal>
                        <SecoundText>Дали сте сигурни дека сакате да ја избришете адресата?</SecoundText>   
                        <ButtonsLoadHere>
                            <SingleButton>
                                <ButtonLink href="#" onClick={(e)=>{handleDeleteYes(e)}}>
                                    <SingleButtonInside>
                                        <TextMainY>Избриши</TextMainY>
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
                    </InsideModalAskPro>
                </InsideModalAsk>
            </Modal>
        </>
    );
};

export default DeleteAddressModal;