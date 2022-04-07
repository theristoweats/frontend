
import { useState, useEffect } from "react";
import styled from "styled-components"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { loadAddresses } from "../actions/addressesActions";
import LoadingCartItems from "../components/LoadingCartItems";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile2, mobile3, mobile4  } from "../responsive";


const Addresses = styled.div`
margin-top: 20px;
display: flex;
width: 100%;
padding-bottom: 15px;

`;

const SingleAddress = styled.div`
transition: .1s;
width: 300px;
min-height: 100px;
border-radius: 10px;

background-color: #161616;

margin-right: 15px;
cursor:pointer;
${mobile2({ width: "96%"})}

`;

const SingleAddressInside = styled.div`
padding: 20px;
padding-top: 15px;
padding-bottom: 15px;
display: flex;
align-items: center;
`;

const SingleAddressTitleBox = styled.div`    
display: flex;
flex: 1;
align-items: center;
`;

const SingleAddressTitle = styled.label`
color: white;
font-family: GilroyLight;
font-size: 14px;
`;

const AddressActions = styled.div`
display: flex;
align-items: center;
`;

const Delete = styled.img`
width: 24px;
height: 24px;
margin-left: 5px;
`;

const Edit = styled.img`
width: 24px;
height: 24px;
margin-left: 5px;
`;

const FullAddressText = styled.div`
padding: 20px;
padding-top: 15px;
padding-bottom: 15px;
`;

const FullAddress = styled.p`    
color: #c0c0c0;
font-size: 13px;
font-family: GilroyLight;
`;

const ActionButton = styled.button`
    background:transparent;
    outline:none;
    border:none;
    cursor:pointer;
`;

const DeliveryAddresses = ({allAddresses, setAddressDeleteId, setAddressEdit, setDeliveryAddress}) => {
    const [isActive, setActive] = useState();

    const handleDeleteAddress = (addressId) => {
        setAddressDeleteId(addressId);
    }

    const handleEditAddress = (address) =>{ 
        console.log("neee " + address)
        setAddressEdit(address);
    }

    const deliveryAddress = (id) => {
        setActive(id);
        setDeliveryAddress(id);
    } 

    return(
        <>
            <Addresses> 
        
            <Swiper 
                style={{marginLeft:"unset"}}
                slidesPerView={"auto"}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >  
                {allAddresses && allAddresses.map(address => (
                    <SwiperSlide style={{width:"fit-content"}}>
                        <SingleAddress className={isActive == address._id ? 'address_for_delivery': ""} key={address._id} onClick={() => {deliveryAddress(address._id)}}>
                            <SingleAddressInside>
                                <SingleAddressTitleBox>
                                    <SingleAddressTitle>{address.addressShortName}</SingleAddressTitle>
                                </SingleAddressTitleBox>
                                <AddressActions>
                                    <ActionButton onClick={() => handleDeleteAddress(address._id)}><Delete src="icons/delete.png" /></ActionButton> 
                                    <ActionButton onClick={() => {handleEditAddress(address)}}><Edit src="icons/edit.png"></Edit></ActionButton>
                                </AddressActions>
                            </SingleAddressInside>
                            <FullAddressText>
                                <FullAddress>{address.addressLocation}</FullAddress>
                            </FullAddressText>
                            
                        </SingleAddress>
                    </SwiperSlide>
                ))} 

            </Swiper>
            </Addresses>
        
        </>

    );
};

export default DeliveryAddresses;