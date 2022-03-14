import styled from "styled-components";  
import ShoppingBag from "../../icons/shopping-bag-delivered.png";
import "./style.css";
import MyAddressesIcon from "../../icons/address.png";
import AddAddressIcon from "../../icons/add-white.png";
import { useEffect, useState } from "react";
import { loadAddresses } from "../../actions/addressesActions";
import DeliveryAddressesDashboard from "./DeliveryAddressesDashboard";
import DeleteAddressModal from "../DeleteAddressModal";
import EditAddressModal from "../EditAddressModal";
import AddNewAddressModal from "../addNewAddressModal";
import Loading from "../../loadings/LoadingMyOrders";

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

const PageInfoButtonAction = styled.button`
    margin-top: 10px;
    outline:none;
    border:none;
    background-color: #00000029;
    padding:10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    
    display: flex;
    align-items: center;
    width: 200px;
    background-color: #3a3b3c;
    cursor: pointer;
`;

const IconButtonAction = styled.img`

    width: 15px;
    height: 15px;
    margin-left: 5px;
`;

const TextInfoButtonAction = styled.span`
    font-size: 14px;
    color: white;
    font-family:GilroyLight;
`;

const LoadAddresses = styled.div`
    
    margin-top: 30px;
    display: flex;
    flex-flow: wrap;
`;


const ErrorAddress = styled.div`
  margin-top:20px;
  margin-bottom:15px;
`;

const ErrorAddressText = styled.span`
  color:#ababab;
  font-size:14px;
  font-family: GilroyLight;

`;

const AddNewAddressText = styled.a`
  font-family: GilroyLight;
  font-size:14px;
  color:#4a88da;
  text-decoration:none;
`;
const MyAddresses = () =>{
    const [addNewAddress, setAddNewAddress] = useState(false);

    const [addressEdit, setAddressEdit] = useState(null);

    const [loadingAddresses, setLoadingAddresses] = useState(true);

    const [newAddress, setNewAddress] = useState(false);

    const [allAddresses, setAddresses] = useState(0);

    const userData = localStorage.getItem("user"); 
    useEffect(() => { 
        loadAddresses(userData, setLoadingAddresses, setAddresses);  
    }, [newAddress]); 

    
    const handleAddNewAddress = (e) =>{
        e.preventDefault(); 
        setAddNewAddress(true); 
    }
    const [addressDeleteId, setAddressDeleteId] = useState(null);

    console.log(allAddresses);

    return(
    <> 
        <MainWrapper>
            <InsideWrapper>

                <MainPageInfo>

                    <TextPageInfo>
                        <MainTextPageInfo>Мои адреси</MainTextPageInfo>
                        <IconBoxPageInfo>
                            <IconPageInfo src={MyAddressesIcon}/>
                        </IconBoxPageInfo>
                    </TextPageInfo>

                    <PageInfoButtonAction onClick={(e)=>{handleAddNewAddress(e)}}>
                        <TextInfoButtonAction>Додади нова адреса </TextInfoButtonAction>
                        <IconButtonAction src={AddAddressIcon} />
                    </PageInfoButtonAction>

                </MainPageInfo>


                <LoadAddresses>
                    {(
                        allAddresses.length === 0 ? 
                        (<>
                        
                            <ErrorAddress>
                                <ErrorAddressText>Немате адреси, додадете! <AddNewAddressText href="#" onClick={(e)=>{handleAddNewAddress(e)}}>Додади.</AddNewAddressText></ErrorAddressText>   
                            </ErrorAddress>
                        
                        
                        </>)
                        : loadingAddresses ? (<Loading />) 
                        :
                        (<> <DeliveryAddressesDashboard allAddresses={allAddresses} setAddressDeleteId={setAddressDeleteId} setAddressEdit={setAddressEdit}/></>) 
                    )}

                </LoadAddresses>
   
            </InsideWrapper>
        </MainWrapper>

        {addNewAddress && (<>
            <AddNewAddressModal setAddNewAddress={setAddNewAddress} setNewAddress={setNewAddress}/> 
        </>)}
        
        {addressDeleteId && (<>
            <DeleteAddressModal addressDeleteId={addressDeleteId} setAddressDeleteId={setAddressDeleteId} setNewAddress={setNewAddress}/> 
        </>)}

        
        {addressEdit && (<>
            <EditAddressModal setNewAddress={setNewAddress} addressEdit={addressEdit} setAddressEdit={setAddressEdit}/> 
        </>)}
    </>
    )
};

export default MyAddresses;