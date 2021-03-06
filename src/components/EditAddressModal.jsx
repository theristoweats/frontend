import styled from "styled-components"; 
import mapStyles from "./mapStyles";
 
import { useEffect, useState } from "react";
import { addAddress, editAddress } from "../actions/addressesActions";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile3, mobile4  } from "../responsive";

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
// width:750px; 
// border-left:5px solid #e41e3f;
// border-radius:10px
`;

const InsideModalAskPro = styled.div`
display:flex;
${mobile1({ flexDirection:"column", overflowX:"scroll", height:"100vh"})}

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
  width:400px;
  border-top-left-radius: 10px;
  width: 400px;
  background-color: #18191a;
  border-bottom-left-radius: 10px;
  ${mobile1({ order:"1", width:"100%", borderRadius:"0px"})}

`;


const RightModal = styled.div`
  width:600px;
  ${mobile1({ width:"100%"})}

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

const EditAddressModal = ({setNewAddress, addressEdit, setAddressEdit}) =>{ 

    // console.log(addressEdit.addressCoordinates[0].lat);
    // console.log(addressEdit.addressCoordinates[0].lng);
    // console.log("daaaaa "+addressEdit);
 
    
    const handleCancel = (e) => { 
      e.preventDefault();
      setAddressEdit(null);
    };

    const userData = localStorage.getItem("user"); 


    const handleSaveNewAddress = (e) =>{
      var lat = document.getElementById('address_lat').value;
      var lng = document.getElementById('address_lng').value; 
      var name = document.getElementById('autoComplement').value; 
      var addressShortName = document.getElementById('addressShortName').value; 
      var addressDescription = document.getElementById('addressLongDescription').value; 

    //   if(!(lat > 0 && lng > 0 && name.length > 0 && addressShortName && addressDescription)) {
    //     return false;
    //   }

      console.log("EBI SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"+lat,lng,name,addressShortName,addressDescription);
      editAddress(userData, addressEdit, lat, lng, name, addressShortName, addressDescription, setNewAddress, addressEdit._id, setAddressEdit);  
    }; 

    useEffect(() => {
      window.initMap(addressEdit.addressCoordinates[0].lat,addressEdit.addressCoordinates[0].lng);
    }, []); 
    console.log(addressEdit.addressCoordinates[0].lat,addressEdit.addressCoordinates[0].lng)

    return (
      <Modal>
            <InsideModalAsk>
                <InsideModalAskPro>
                    <LeftModal>
                      <LeftModalInside>
                        
                          <Input type="hidden" id="address_lat" defaultValue={addressEdit.addressCoordinates[0].lat}/>
                          <Input type="hidden" id="address_lng" defaultValue={addressEdit.addressCoordinates[0].lng}/>
                          
                          <MainTextModal>???????????? ???????? ????????????</MainTextModal>
                          <SecoundText>???? ???? ???????????????? ???? ???????????????? ???????????? ????????????????. ???????????????????? ???? ?????????? ???? ???????????? ??????????.</SecoundText>   
                          
                          <InputAddresses style={{marginTop:"25px"}}>
                            <InputText>????????????</InputText>
                            <Input type="text" placeholder="???????????? ????????????????" id="autoComplement" defaultValue={addressEdit.addressLocation}/>
                          </InputAddresses>

                          <InputAddresses>
                            <InputText>???????????? ??????</InputText>
                            <Input type="text" placeholder="?????? ????????????????????" id="addressShortName" defaultValue={addressEdit.addressShortName}/>
                          </InputAddresses>

                          <InputAddresses>
                            <InputText>?????????????? ????????</InputText>
                            <Input type="text" placeholder="???????? ???????????????? ?????? ?????????? ????????????????. ???????? ???? ???? ???????????? ???? ???????? ?????? ??????????."  id="addressLongDescription"  defaultValue={addressEdit.addressLongDescription}/>
                          </InputAddresses>

                          <ButtonsLoadHere>
                              <SingleButton>
                                  <ButtonLink href="#" onClick={(e)=>{handleSaveNewAddress(e)}}>
                                      <SingleButtonInside>
                                          <TextMainY>??????????????</TextMainY>
                                      </SingleButtonInside>
                                  </ButtonLink>
                              </SingleButton>
                              <SingleButton>
                                  <ButtonLink href="#" onClick={(e)=>{handleCancel(e)}}>
                                      <SingleButtonInside>
                                          <TextMainY>????????????</TextMainY>
                                      </SingleButtonInside>
                                  </ButtonLink>
                              </SingleButton>
                          </ButtonsLoadHere>
                        </LeftModalInside>
                    </LeftModal>
                    <RightModal>
                      <MapLadHere>
                            {/* <MapWrapped
                              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI`}
                              loadingElement={<div style={{ height: `100%`, borderTopRightRadius:`10px`, borderBottomRightRadius:`10px` }} />}
                              containerElement={<div style={{ height: `100%`, borderTopRightRadius:`10px`, borderBottomRightRadius:`10px` }} />}
                              mapElement={<div style={{ height: `100%`, borderTopRightRadius:`10px`, borderBottomRightRadius:`10px` }} />}
                            
                            
                            />
                             */}

                        <div id="map" style={{height:"100%"}}></div>
                      </MapLadHere>
                    </RightModal>
                </InsideModalAskPro>
            </InsideModalAsk>
        </Modal>
    );
};

export default EditAddressModal;