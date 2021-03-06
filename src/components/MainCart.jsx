// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"; 
import { useCookies } from "react-cookie";
import LoadingCartItems from "../components/LoadingCartItems";
import ErrorCartItems from "../components/ErrorCartItems";
import LoadCartItems from "../components/LoadCartItems";
import { useEffect, useState } from "react";
import { listCartItems } from "../actions/cartActions";
import DeliveryAddresses from "../components/DeliveryAddresses";
import { Link } from 'react-router-dom';
import { userCheck } from "../actions/userActions";
import AddNewAddressModal from "../components/addNewAddressModal";
import { loadAddresses } from "../actions/addressesActions";
import DeleteAddressModal from "./DeleteAddressModal";
import EditAddressModal from "./EditAddressModal";
import { placeOrder } from "../actions/ordersActions";
import LoadingInButton from "../loadings/LoadingInButton";
import { useNavigate } from 'react-router-dom';
import AAddressICON from "../icons/address.png";
import CCCCCIcon from "../icons/contract.png";
import WaletIcon from "../icons/wallet.png";
import DiscountIcon from "../icons/discounts.png";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile2, mobile3, mobile4  } from "../responsive";



const Container = styled.div` 
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom:100px;
    align-items: center; 
`;

const Wrapper = styled.div`
    width:93%;
    
`;
  

const LoadCartPro = styled.div`
    display: flex;
    min-height: 100vh;
    padding-top: 80px;
    justify-content: center;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    width:70%;
    margin-right: 20px;
    background-color: #242526;
    min-height: 500px;
    border-radius: 10px;
    padding-bottom: 10px;
    ${mobile({ width: "100%" })}
`;

const LeftInside = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const CartLoadTypes = styled.div`
    display: flex; 
`;

const PathSingle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const PathMain = styled.div`
    width: 30px;
    height: fit-content;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e41e3f;
`;

const PathTo = styled.div`
    width: 1px;
    height: 100%;
    margin-left: -2px;
    border-right: 0.1rem dashed #e41e3f;
`;

const Icon = styled.img`
    width: 20px;
    padding-top:5px;
    padding-bottom:5px;
    height: 20px;
`;

const AddressesLoad = styled.div`
    display: flex; 
    margin-left: 10px;
    padding-top: 8px;
    flex-direction: column;
    width: 93%;
    ${mobile1({ width: "90%" })}
    ${mobile3({ width: "86%" })}

`;

const TitleText = styled.span`
    color: white;
    font-family: GilroyLight;
    font-size: 15px; 
    display:flex;
    flex:1;
`;


const ProductInCartLoad = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    padding-bottom: 15px;
    flex-direction: column;
`;


const PaymentMethodLoad = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    padding-bottom: 15px;
`;

const PaymentMethods = styled.div`    
    display: flex;
    align-items: center;
    ${mobile3({ flexDirection: "column", alignItems:"flex-start" })}

`;

const PaymentMethod = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    ${mobile3({ marginLeft: "0px", marginBottom:"15px", alignItems:"flex-start" })}

`;

const PaymentMethodLabel = styled.label`
    font-family: GilroyLight;    
    color: white;
    font-size: 14px;
    margin-left: 5px;
`;

const PaymentMethodInput = styled.input`
    
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 2px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #393a3b;
  background-color: #161616;
  border-radius: 50%;
  outline: none;

  :checked{
      
    background-color: #e41e3f;
  }
`;


const EnterPromoCode = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    padding-bottom: 15px;
    flex-direction: column;
`;

const PromoCodeInside = styled.div`
    display: flex;
`;

const PromoCodeInput = styled.input`
    outline: none;
    border: none;
    color: white;
    font-family: GilroyLight;
    font-size: 14px;
    width: 200px;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;
    background-color: #161616;
`;

const Right = styled.div`
    width: 30%;
    ${mobile({ width: "100%", marginTop:"20px" })}
`;

const RightMain = styled.div`
    background-color: #242526;
    width: 100%;
    border-radius: 10px;
    border-top: 5px solid #e41e3f;
    padding-bottom: 10px;
`;

const RightInside = styled.div`
  padding:20px;
`;

const LabelRightText = styled.label`
    font-size: 16px;
    font-family: GilroyLight;
    color: white;
    font-weight: bold;
`;

const LabelRight = styled.div`  
    padding-bottom: 15px;
    border-bottom: 1px solid #393a3b;
`;

const DetailsTotalCart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

const SingleDetailTotalCart = styled.div`
    display: flex;
    color: white;
    font-size: 15px;
    margin-bottom: 20px;
`;

const SingleDetailTotalCartName = styled.label`
    display: flex;
    flex: 1;
    font-family: GilroyLight;
    color: #c4c4c4;
    font-size: 14px;
`;


const SingleDetailTotalCartValue = styled.label`
    font-family: GilroyLight;
    font-weight: bold;
`;

const TotalToPay = styled.div`
    display: flex;
    color: white;
    padding-top: 15px;
    border-top: 1px solid #393a3b;
`;

const TotalToPayName = styled.label`
    font-family: GilroyLight;
    flex: 1;
    font-size: 15px;
`;

const TotalToPayValue = styled.span`
    font-family: GilroyLight;
    font-weight: bold;
`;

const ButtonPlaceOrder = styled.button`
    display: flex;
    align-items: center;
    font-family: GilroyLight;
    justify-content: center;
    width: 100%;
    font-family: GilroyLight;
    height: 45px;
    border:none;
    background-color: #e41e3f;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    outline:none;
    cursor:pointer;
    margin-top:15px;

        
    &:disabled{
        opacity:.5;
        cursor:not-allowed;
        margin-bottom:10px;
    }
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

const TextAndAddNew = styled.div`
  display:flex;
`;

const AddNewAddressText = styled.a`
  font-family: GilroyLight;
  font-size:14px;
  color:#4a88da;
  text-decoration:none;
`;

const TextErrorOrderButton = styled.span` 
    font-family: GilroyLight;
    color:white;
    font-size:14px;
`;



const TextLoad= styled.span`
    color:white;
    font-size:14px;
    font-family: GilroyLight; 
`;


const MainCart = ({user}) => { 
    // const { currentUser, isFetching } = useSelector((state) => state.user);

    const navigate = useNavigate(); 


    const [placingOrder, setPlacingOrder] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState(false);

    console.log("ADDRESS FOR DELIVERYYYYYYYYYYYYYYYYYYYYYYYYYYYY " + deliveryAddress);

    const [newAddress, setNewAddress] = useState(false);

    const [addNewAddress, setAddNewAddress] = useState(false);
    const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch( 
//         listCartItems({  
//             user_UUID:cookies.userUUID
//         })
//     );  
//   }, []);   
  const [cookies, setCookie, removeCookie] = useCookies();
  

  const cart = useSelector(state=>state.cart);
  const { loading, error, products, total, quantity, updateQuntityStatus } = cart; 
  const delivery_price = 70;

  

  console.log(products);
 

//   const user = useSelector(state=>state.user.currentUser);
  
//   const cartItemsList = useSelector((state) => state.cart2); 
//   const { loading, error, cartitems, total, quantity } = cartItemsList; 

//   const cart2 = useSelector(state=>state.cart2);

    const handleAddNewAddress = (e) =>{
        e.preventDefault(); 
        setAddNewAddress(true); 
    }
    
    const [loadingAddresses, setLoadingAddresses] = useState(true);
    
    const [allAddresses, setAddresses] = useState(0);

    const userData = localStorage.getItem("user"); 
    useEffect(() => { 
        loadAddresses(userData, setLoadingAddresses, setAddresses);  
    }, [newAddress]); 

    console.log("LOADING ADDRESSESSSSSSSSSSSSSSSSSSSS _--__ __ __ _ -- " + loadingAddresses);
    console.log("NEW ADDRESSSSSSSSSSS " +newAddress);

    const [addressDeleteId, setAddressDeleteId] = useState(null);
    const [addressEdit, setAddressEdit] = useState(null);


    // PLACE ORDER YEYEYE
    const handlePlaceOrder = () => { 
        dispatch(placeOrder(cookies.userUUID, userData, deliveryAddress, setPlacingOrder, navigate));
    }

  return (
    <>
    {/* { loading ? 
        (<Loading />) 
    : error ? 
        ( <ErrorCart />) 
    : (<> */}
     <Container>
        <Wrapper>
            <LoadCartPro> 
                <Left>
                    <LeftInside>
                        <CartLoadTypes>
                            <PathSingle>   
                                <PathMain>
                                    <Icon src={AAddressICON}></Icon>
                                </PathMain>
                                <PathTo></PathTo>
                            </PathSingle>
                            <AddressesLoad>
                                <TextAndAddNew>
                                    <TitleText>???????????? ???? ??????????????</TitleText>
                                    {user && ( <AddNewAddressText href="#" onClick={(e)=>{handleAddNewAddress(e)}}>???????????? ????????</AddNewAddressText> ) }
                                </TextAndAddNew>
                                
                                {user ? (
                                        allAddresses.length === 0 ? 
                                        (<>

                                        
                                            <ErrorAddress>
                                                <ErrorAddressText>???????????? ????????????, ????????????????! <AddNewAddressText href="#" onClick={(e)=>{handleAddNewAddress(e)}}>????????????.</AddNewAddressText></ErrorAddressText>   
                                            </ErrorAddress>
                                        
                                        
                                        </>)

                                        : loadingAddresses ? (<TextLoad>?????????????????? ...</TextLoad>) 
                                        :
                                        (<> <DeliveryAddresses allAddresses={allAddresses} setAddressDeleteId={setAddressDeleteId} setAddressEdit={setAddressEdit} setDeliveryAddress={setDeliveryAddress}/></>) 
                                    )
                                    : (
                                    <>
                                        <ErrorAddress>
                                            <ErrorAddressText>???? ???? ???????????????? ???????????? ???????? ???? ?????? ????????????????. <Link to="/login" style={{textDecoration:"none", color:"#ff5a75", fontFamily:"GilroyLight"}}>???????????? ????.</Link></ErrorAddressText>   
                                        </ErrorAddress>
                                    </>
                                )}

                            </AddressesLoad>
                        </CartLoadTypes>

                        <CartLoadTypes>
                            <PathSingle>   
                                <PathMain>
                                    <Icon src={CCCCCIcon}></Icon>
                                </PathMain>
                                <PathTo></PathTo>
                            </PathSingle>
                            <AddressesLoad>
                                <TitleText>???????????? ???? ??????????????????</TitleText>
                                <ProductInCartLoad>
                                    { 
                                        loading===true ? 
                                            (<LoadingCartItems />) 
                                        : error ? 
                                            ( <ErrorCartItems />)  
                                        : quantity === 0 ? 
                                            (<ErrorCartItems />) 
                                        : 
                                            (<LoadCartItems products={products[0]} updateQuantity={updateQuntityStatus} />)
                                    }
                                </ProductInCartLoad>
                            </AddressesLoad>
                        </CartLoadTypes>

                        <CartLoadTypes>
                            <PathSingle>   
                                <PathMain>
                                    <Icon src={WaletIcon} ></Icon>
                                </PathMain>
                                <PathTo></PathTo>
                            </PathSingle>
                            <AddressesLoad>
                                <TitleText>?????????? ???? ??????????????</TitleText>
                                <PaymentMethodLoad>
                                    <PaymentMethods>
                                        <PaymentMethod>
                                            <PaymentMethodInput type="radio" name="paymentMethood" id="paymentMethood-cash" checked></PaymentMethodInput>
                                            <PaymentMethodLabel for="paymentMethood-cash">???? ????????????</PaymentMethodLabel>
                                        </PaymentMethod>
                                        <PaymentMethod style={{"opacity":".6","cursor":"not-allowed",}}>
                                            <PaymentMethodInput type="radio" name="paymentMethood" id="paymentMethood-online" disabled style={{"cursor":"not-allowed",}}></PaymentMethodInput>
                                            <PaymentMethodLabel for="paymentMethood-online" style={{"cursor":"not-allowed",}}>????????????</PaymentMethodLabel>
                                        </PaymentMethod>
                                        <PaymentMethod style={{"opacity":".6","cursor":"not-allowed",}}>
                                            <PaymentMethodInput type="radio" name="paymentMethood" id="paymentMethood-crypto" disabled style={{"cursor":"not-allowed",}}></PaymentMethodInput>
                                            <PaymentMethodLabel for="paymentMethood-crypto" style={{"cursor":"not-allowed",}}>????????????</PaymentMethodLabel>
                                        </PaymentMethod>
                                    </PaymentMethods>
                                </PaymentMethodLoad>
                            </AddressesLoad>
                        </CartLoadTypes>

                        <CartLoadTypes>
                            <PathSingle>   
                                <PathMain>
                                    <Icon src={DiscountIcon} ></Icon>
                                </PathMain>
                                <PathTo></PathTo>
                            </PathSingle>
                            <AddressesLoad style={{"opacity":".5"}}>
                                <TitleText>???????????????????? ??????</TitleText>
                                <EnterPromoCode>
                                    <PromoCodeInside>
                                        <PromoCodeInput type="text" placeholder="???????????????????? ??????"></PromoCodeInput>
                                    </PromoCodeInside>
                                </EnterPromoCode>
                            </AddressesLoad>      
                        </CartLoadTypes>
                            

                    </LeftInside>
                </Left>

                <Right>
                    <RightMain> 
                        <RightInside>
                            <LabelRight>
                                <LabelRightText>???????????? ???? ??????????????????</LabelRightText>
                            </LabelRight>
                            <DetailsTotalCart>
                                <SingleDetailTotalCart>
                                    <SingleDetailTotalCartName>????????????:</SingleDetailTotalCartName>
                                    <SingleDetailTotalCartValue>{cart.total} ??????.</SingleDetailTotalCartValue>
                                </SingleDetailTotalCart>

                                
                                <SingleDetailTotalCart>
                                    <SingleDetailTotalCartName>??????????????:</SingleDetailTotalCartName>
                                    <SingleDetailTotalCartValue>{delivery_price} ??????.</SingleDetailTotalCartValue>
                                </SingleDetailTotalCart>
                                
                                <SingleDetailTotalCart>
                                    <SingleDetailTotalCartName>????????????:</SingleDetailTotalCartName>
                                    <SingleDetailTotalCartValue>0 ??????.</SingleDetailTotalCartValue>
                                </SingleDetailTotalCart>

                            </DetailsTotalCart>
                            <TotalToPay>
                                <TotalToPayName>????????????:</TotalToPayName>
                                <TotalToPayValue>{cart.total + delivery_price} ??????.</TotalToPayValue>
                            </TotalToPay>
                        </RightInside>
                    </RightMain>
                    {
                        user ? 
                        (
                            quantity === 0 ? (
                                <>
                                    <ButtonPlaceOrder disabled={true}>?????????????? ????????</ButtonPlaceOrder>
                                    <TextErrorOrderButton>???? ???? ???????????????? ???????? ???? ????????????????????????. <Link to="/products/category/all" style={{color:"#4f95f3", textDecoration:"none", fontFamily:"GilroyLight"}}>???????????????? ???? ??????????????????????</Link></TextErrorOrderButton>
                                </>
                            ) :(
                                deliveryAddress === false ? (
                                    <>
                                        <ButtonPlaceOrder disabled={true}>?????????????? ????????</ButtonPlaceOrder>
                                        <TextErrorOrderButton>???? ???? ???????????????? ???????? ???? ???????????????? ????????????.</TextErrorOrderButton>
                                    </>
                                    
                                ) :(
                                    JSON.parse(user).others.phonenumber === "0" ? (
                                        <>
                                            <ButtonPlaceOrder disabled={true}>?????????????? ????????</ButtonPlaceOrder>
                                            <TextErrorOrderButton>???? ???? ???????????????? ???????? ???? ?????????????? ???????????????????? ????????. <Link to="/dashboard/profile" style={{color:"#4f95f3", textDecoration:"none", fontFamily:"GilroyLight"}}>?????????? ????????</Link></TextErrorOrderButton>
                                        </>
                                    ) :(
                                        placingOrder === true ? (
                                            <>
                                                <ButtonPlaceOrder>
                                                    <LoadingInButton />
                                                </ButtonPlaceOrder>
                                            </>
                                        ) :(
                                            <>
                                                <ButtonPlaceOrder onClick={()=> handlePlaceOrder()}>
                                                    ?????????????? ????????
                                                </ButtonPlaceOrder>
                                            </>
                                        )
                                    )
                                )
                            )
                        ): (<>
                            
                            <ButtonPlaceOrder disabled={true}>?????????????? ????????</ButtonPlaceOrder>
                            <TextErrorOrderButton>???? ???? ???????????????? ???????? ???? ?????? ????????????????. <Link to="/login" style={{textDecoration:"none", color:"#ff5a75", fontFamily:"GilroyLight"}}>???????????? ????.</Link></TextErrorOrderButton>
                        </>)
                    
                    }
                </Right>

            </LoadCartPro>
        </Wrapper>
    </Container>

    {addNewAddress && (<>
        <AddNewAddressModal setAddNewAddress={setAddNewAddress} setNewAddress={setNewAddress} setDeliveryAddress={setDeliveryAddress}/> 
    </>)}


    {addressDeleteId && (<>
        <DeleteAddressModal addressDeleteId={addressDeleteId} setAddressDeleteId={setAddressDeleteId} setNewAddress={setNewAddress}/> 
    </>)}
    
    {addressEdit && (<>
        <EditAddressModal setNewAddress={setNewAddress} addressEdit={addressEdit} setAddressEdit={setAddressEdit}/> 
    </>)}

 
     
    </>
  );
};

export default MainCart;
