import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components"; 
import { orderDetails } from "../../actions/ordersActions";
// import io from "socket.io-client";
import axios from "axios";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile3, mobile4  } from "../../responsive";

const TrackingOrderMain = styled.div`
    display:flex;
    height:100vh;
    position:relative;
    ${mobile1({ flexDirection:"column", height:"auto"})}

`;

const Left = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    ${desktop4({ position: "unset" })}
    ${mobile1({ height:"auto", order:"1"})}

`;

const Right = styled.div`
    background-color:transparent;
    width:100%;
    padding-left:1px;
    height:100vh;
    position:relative;
`;

const MapNotAllowedToLook = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;       
    background-color: #24252673;
    z-index: 1;
`;

const LeftInside = styled.div`
    margin-top:120px;
    margin-left:30px;    
    background-color: #242526;
    border: 1px solid #393a3b;
    width:300px;
    height:490px;
    border-radius:10px;
    ${desktop4({ height:"100vh", marginTop:"0px", marginLeft:"0px", backgroundColor:"transparent", border:"none" })}
    ${mobile1({ height:"auto", width:"100%"})}

`;

const LeftPro = styled.div`
    padding:20px;
    padding-top:10px;
`;

const InfoMainText = styled.span`
    font-size:17px;
    color:white;
    font-weight:bold;
    font-family: GilroyLight; 
`;

const OrderProducts = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    padding-right:10px;
    overflow-y: auto;
    height: 250px;
    margin-bottom:15px;
    ${desktop4({ height:"200px"})}
    ${desktop2({ height:"150px"})}
    ${mobile1({  height:"340px" })}

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: #161616;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #363636;
        border-radius: 10px;
          
    }
    ::-webkit-scrollbar-thumb:hover {    
        background: #555; 
    } 


`;

const OrderSingleProduct = styled.div`
    display:flex;
    margin-bottom:15px;
`;

const ProductImg = styled.div`
    width:fit-content;
    height:70px;
    background-color: #161616;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    padding-right: 5px;
    padding-left: 10px;
    margin-right: 10px;
`;

const ProductActImg = styled.img`
    width:60px;
    hegiht:60px;
    object-fit:contain;
`;

const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
`;

const Title = styled.span`
    font-size:14px;
    color:white;
    font-family: GilroyLight; 
`;

const Price = styled.span`
    font-size:13px;
    color:#bdbdbd;
    font-family: GilroyLight; 
    margin-top:8px;
`;

const OrderStatus = styled.div`
    display:flex;
    align-items:center;
    padding-top:13px;
    font-family: GilroyLight; 
`;
 
const TextOrderStatus = styled.span`
    font-family: GilroyLight; 
    color:white;
    font-size:14px;

`;

const OrderStatusCircle = styled.div`
    width:12px;
    height:12px;
    border-radius:50%;
    background-color:#f58b27;
    margin-right:5px;
`;

const TotalPrice = styled.div`
    display:flex;
    flex-direction:column;
`;

const SingleTotalPrice = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:15px;
`;

const TotalPriceLeft = styled.span`
    font-family: GilroyLight; 
    font-size:14px;
    color:white;
`;

const TotalPriceRight = styled.span`
    font-family: GilroyMedium; 
    font-size:14px;
    color:white;
`;

const InfoText = styled.div`
    position:realtive;
`;

const TextInfoNotAllowedMap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 124px;
    width: 300px;
    background: #e41e3f;
    color: white;
    padding:10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;
    margin-right: 40px;
    ${mobile1({ width:"100%", 
                paddingLeft:"0px", 
                paddingRight:"0px", 
                padding:"0px", 
                marginRight:"0px",
                marginTop:"97px",
                borderRadius:"0px"
            })}

`;
const TextInside = styled.span`
    font-family: GilroyLight; 
    color:white;
    font-size:14px;
`;

const CarrierBox = styled.div`
    width: 301px;
    height: 50px;
    background-color: #363636;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display:flex;
    align-items:center;
    ${desktop4({  paddingTop: "97px"})}
    ${mobile1({  paddingTop: "0px", width:"100%", borderRadius:"unset"})}

`;

const CarrierFirstText = styled.span`
    font-family: GilroyLight; 
    color:#a1a1a1;
    font-size:14px;
    display:flex;
    flex:1;
     
`;

const CarrierSecText = styled.span`
    font-family: GilroyLight; 
    color:white;
    padding-right:10px;
    font-size:14px;
`;


const CarrierText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
`;

const ProTextNotAllowedMap = styled.div`
    ${mobile1({  paddingTop: "10px", paddingLeft:"5%", paddingRight:"5%", paddingBottom:"10px"})}
    
`;

// const socket = io.connect("http://localhost:5000");
// https://developers.google.com/maps/documentation/javascript/react-map


const TrackingOrder = ({socket}) => {

    useEffect(() => {
        socket.disconnect(); 
        socket.connect();
    }, []); 
     

    const [carrierId, setCarrierId] = useState();
    const [_orderStatus, setOrderStatus] = useState();
    const [carrierDetailsLoad, setCarrierDetailsLoad] = useState();

    const [fetching, fetchingStart] = useState();
    const [orderDetailsFetch, setOrderDetails] = useState();

    const navigate = useNavigate(); 
    const dispach = useDispatch();
    const userData = localStorage.getItem("user"); 

    const {
        orderId = null
    } = useParams();

    useEffect(() => { 
        dispach(orderDetails(userData, navigate, orderId, fetchingStart, setOrderDetails, setOrderStatus, setCarrierId));          
        socket?.emit("orderStatusJoin", orderId);
        // console.log("ORDER IDDDDDDDDDDDDDDDDD " + orderId)
    }, [orderId]);

    
    

    useEffect(() => {
        window.initMapTracking();
        // window.updateLocation();
      }, []); 
    
    useEffect(() => { 
        socket?.on('new-status', (data) => {
            setOrderStatus(data.orderStatus);
            setCarrierId(data.carrierID);
            // if(!carrierId){
            //     socket?.emit("liveTrackingJoin", data.carrierID);
            // }

        });

        socket?.on('carrier-location', (data) => { 
            window.updateLocation(data.lat, data.lng);
        }); 
        
    }, []);

    useEffect(() => { 
        if(carrierId){
            if(_orderStatus !== "delivered"){
                socket?.emit("liveTrackingJoin", carrierId);
                console.log("JOINEDDDDDDDDDDDDDDDDDDDD - -- - - - JOIN "+carrierId);
            }
            const getCarrier = async () => {
              try {
                const TOKEN = JSON.parse(userData).accessToken;
                const carrierDetails = await axios.get(
                    "https://apieats.theristow.com/api/carriers/details/"+carrierId,
                    {headers: { token: `Bearer ${TOKEN}` }},
                );
                var carrierDetails_Data = carrierDetails.data.fullname+" - "+carrierDetails.data.phoneNumber;
                window.setCarrierDetails(carrierDetails_Data);
                setCarrierDetailsLoad(carrierDetails_Data);
            } catch (err) {}
            };
            getCarrier();
        }
    }, [carrierId, _orderStatus]);

    useEffect(() => { 
        if(_orderStatus === "ontheway"){
            window.setMarkerCarrier();
        }

        if(_orderStatus === "delivered"){
            window.clearMarkerCarrier();
        }
    }, [_orderStatus]);

    console.log("hi");

    


    return(
        <>
            <TrackingOrderMain>
               
                    {fetching ? (<>??????????????????</>) : (<> <Left>
                   
                    <LeftInside>
                        
                    <CarrierBox>
                        <CarrierText>
                            <CarrierFirstText>????????????????????:</CarrierFirstText>
                            {carrierDetailsLoad ? (<CarrierSecText>{carrierDetailsLoad}</CarrierSecText>) : (<CarrierSecText>???? ???????? ???? ?? ?????????????????? ???? ??????????.</CarrierSecText>) }
                        </CarrierText>
                    </CarrierBox>

                        {orderDetailsFetch && 
                            <LeftPro>
                                <InfoMainText>?????????????? ???????? #{orderDetailsFetch[0].pro_Id}</InfoMainText>
                                {_orderStatus === "pending" && (<>
                                    <OrderStatus>
                                        <OrderStatusCircle />
                                        <TextOrderStatus>???? ???????? ??????????????</TextOrderStatus>
                                    </OrderStatus>
                                </>)}
                                {_orderStatus === "accepted" && (<>
                                    <OrderStatus>
                                        <OrderStatusCircle style={{backgroundColor:"#4caf50"}}/>
                                        <TextOrderStatus>?????????????????? ???? ????????????????????</TextOrderStatus>
                                    </OrderStatus>
                                </>)}
                                {_orderStatus === "shopping" && (<>
                                    <OrderStatus>
                                        <OrderStatusCircle style={{backgroundColor:"#2196f3"}}/>
                                        <TextOrderStatus>???? ????????????????</TextOrderStatus>
                                    </OrderStatus>
                                </>)}
                                {_orderStatus === "ontheway" && (<>
                                    <OrderStatus>
                                        <OrderStatusCircle style={{backgroundColor:"#3f51b5"}}/>
                                        <TextOrderStatus>???? ??????</TextOrderStatus>
                                    </OrderStatus>
                                </>)}
                                {_orderStatus === "delivered" && (<>
                                    <OrderStatus>
                                        <OrderStatusCircle style={{backgroundColor:"#e91e63"}}/>
                                        <TextOrderStatus>??????????????????</TextOrderStatus>
                                    </OrderStatus>
                                </>)}
                                <OrderProducts>
                                    {orderDetailsFetch[0].products.map((item) => (
                                        <OrderSingleProduct key={item._id}>
                                            <ProductImg>
                                                <ProductActImg src={item.img}/>
                                            </ProductImg>
                                            <ProductInfo>
                                                <Title>{item.title} </Title>
                                                <Price>{item.quantity}x {item.price / item.quantity} ??????.</Price>
                                            </ProductInfo>
                                        </OrderSingleProduct>
                                    ))}
                                </OrderProducts>
                                <TotalPrice>
                                    <SingleTotalPrice>
                                        <TotalPriceLeft style={{color:"#bdbdbd"}}>??????????????</TotalPriceLeft>
                                        <TotalPriceRight>110 ??????.</TotalPriceRight>
                                    </SingleTotalPrice>
                                    <SingleTotalPrice>
                                        <TotalPriceLeft style={{color:"#bdbdbd"}}>????????????</TotalPriceLeft>
                                        <TotalPriceRight>0 ??????.</TotalPriceRight>
                                    </SingleTotalPrice>
                                    <SingleTotalPrice>
                                        <TotalPriceLeft>????????????</TotalPriceLeft>
                                        <TotalPriceRight>{orderDetailsFetch[0].amount} ??????.</TotalPriceRight>
                                    </SingleTotalPrice>
                                </TotalPrice>
                            </LeftPro>
                        }
                    </LeftInside>
                </Left></>)}
                <Right>
                    {_orderStatus !== "ontheway" && _orderStatus !== "delivered" && (<MapNotAllowedToLook>
                        <InfoText>
                            <TextInfoNotAllowedMap>
                                <ProTextNotAllowedMap>
                                    <TextInside>???????? ???????????????????????? ?????????? ???? ?????? ???? ???????????? ???? ???? ?????????????? ???? ????????????.</TextInside>
                                </ProTextNotAllowedMap>
                            </TextInfoNotAllowedMap>
                        </InfoText>

                    </MapNotAllowedToLook>) }
                    {_orderStatus === "delivered"  && (<MapNotAllowedToLook>
                        <InfoText>
                            <TextInfoNotAllowedMap>
                                <ProTextNotAllowedMap>
                                    <TextInside>?????????????????? ?? ??????????????????, ???? ?????????????????????? ???? ??????????????????!</TextInside>
                                </ProTextNotAllowedMap>
                            </TextInfoNotAllowedMap>
                        </InfoText>

                    </MapNotAllowedToLook>) }
                    <div id="mapLiveTracking" style={{height:"100%"}}></div>
                </Right>
            </TrackingOrderMain>
            
        </>
    )
}

export default TrackingOrder;