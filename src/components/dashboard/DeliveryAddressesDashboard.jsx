
import { useState, useEffect } from "react";
import styled from "styled-components";  
import AddressDeleteIcon from "../../icons/delete.png";
import AddressEditIcon from "../../icons/edit.png";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile3, mobile4  } from "../../responsive";

   
const SingleAddress = styled.div`
    
    width: 300px;
    min-height: 100px;
    border-radius: 10px;

    background-color: #242526;
    border-top: 5px solid #e41e3f;

    margin-right: 15px;
    margin-bottom:15px;

    ${mobile1({ width:"100%", marginRight:"0px"})}

`;

const InsideAddress = styled.div`
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
`;

const NameAddress = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

const TextNameAddres = styled.span`
    font-family:GilroyLight;
    color: white;
    font-size: 14px;
`;

const AddressActions = styled.div`
    display: flex;
    align-items: center;
`;


const ActionButton = styled.button`
    background:transparent;
    outline:none;
    border:none;
    cursor:pointer;
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

const AddressFullAddress = styled.div`
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const FullAddressText = styled.p`
    color: #c0c0c0;
    font-size: 13px;
    font-family:GilroyLight;
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
 
    return(
        <> 
                {allAddresses && allAddresses.map(address => (
                    // <SwiperSlide style={{width:"fit-content"}}>
                    //     <SingleAddress className={isActive == address._id ? 'address_for_delivery': ""} key={address._id} onClick={() => {deliveryAddress(address._id)}}>
                    //         <SingleAddressInside>
                    //             <SingleAddressTitleBox>
                    //                 <SingleAddressTitle>{address.addressShortName}</SingleAddressTitle>
                    //             </SingleAddressTitleBox>
                    //             <AddressActions>
                    //                 <ActionButton onClick={() => handleDeleteAddress(address._id)}><Delete src="icons/delete.png" /></ActionButton> 
                    //                 <ActionButton onClick={() => {handleEditAddress(address)}}><Edit src="icons/edit.png"></Edit></ActionButton>
                    //             </AddressActions>
                    //         </SingleAddressInside>
                    //         <FullAddressText>
                    //             <FullAddress>{address.addressLocation}</FullAddress>
                    //         </FullAddressText>
                            
                    //     </SingleAddress>
                    // </SwiperSlide>
                    <SingleAddress>

                        <InsideAddress>
                            <NameAddress>
                                <TextNameAddres>{address.addressShortName}</TextNameAddres>
                            </NameAddress>
                            <AddressActions>
                                <ActionButton onClick={() => handleDeleteAddress(address._id)}><Delete src={AddressDeleteIcon} /></ActionButton> 
                                <ActionButton onClick={() => {handleEditAddress(address)}}><Edit src={AddressEditIcon}></Edit></ActionButton>
                            </AddressActions>
                        </InsideAddress>

                        <AddressFullAddress>
                            <FullAddressText>{address.addressLocation}</FullAddressText>
                        </AddressFullAddress> 
                    </SingleAddress>
                ))} 

        
        </>

    );
};

export default DeliveryAddresses;