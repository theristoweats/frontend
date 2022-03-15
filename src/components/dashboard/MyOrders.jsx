import styled from "styled-components";  
import ShoppingBag from "../../icons/shopping-bag-delivered.png";
import "./style.css";
import { getAllOrders } from "../../actions/ordersActions";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../loadings/LoadingMyOrders";
import io from "socket.io-client";


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

const LoadAllOrders = styled.div`

    margin-top: 30px;

    background-color: #242526;
    min-height: 300px;
    width: 100%;
    border-radius: 10px;
    border-top: 5px solid #e41e3f;
`;
 
const HeaderTable = styled.div`
    display: flex;
    flex-direction: column;  
    padding: 20px;
    padding-bottom:0px;
    
`;


const InsideHeaderTable = styled.div`
    display: flex; 
    padding-bottom: 15px;
    border-bottom: 1px solid #424242;
`;

const SingleHeaderText = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const TableHeaderText = styled.span`
    font-family:GilroyLight;
    color: #cccccc;
    font-size: 14px;
`;

const TableData = styled.div`
    display:flex;
    width:100%;
`;

const LoadAllOrdersUser = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

const InsideTableData = styled.div`
    display: flex; 
    width:100%;
    // padding-bottom: 15px;
    
    padding-top:15px;
    border-bottom: 1px solid #424242;    
    padding-bottom:15px; 
    margin-left:20px;
    margin-right:20px;
`;

const OrderStatus = styled.div`
    width: 10px;
    height: 10px;
    background-color: #f58b27;
    border-radius: 50%;
    margin-right: 10px;
`;

const TrackOrder = styled.div`
    background-color: #3a3b3c;
    padding-left: 10px;
    padding-right: 13px;
    border-radius: 10px;
    padding-top: 5px;
    cursor: pointer;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
`;

const IconOrderDetails = styled.img`
    filter: brightness(0) invert(1);
    width: 23px;
    height: 23px;
    opacity: .7;
`;

const SingleOrder = styled.div`
    width:100%;
`;

const socket = io.connect("http://apieats.theristow.com/");

const MyOrders = () =>{

    const [allOrders, setAllOrders] = useState();
    const [fetching, fetchingStart] = useState();

    const navigate = useNavigate(); 
    const dispach = useDispatch();
    const userData = localStorage.getItem("user"); 
    const userId = JSON.parse(userData).others._id;

    useEffect(() => { 
        dispach(getAllOrders(userData, navigate, fetchingStart, setAllOrders));
        socket?.emit("ordersUpdateJoin", userId);
    }, []);

    useEffect(() => { 
        socket?.on('new-status-order-user', (data) => { 
            dispach(getAllOrders(userData, navigate, fetchingStart, setAllOrders));
        });  
    }, []);
    
    console.log(allOrders);

    return(
    <> 
        <MainWrapper>
            <InsideWrapper>

                <MainPageInfo>

                    <TextPageInfo>
                        <MainTextPageInfo>Мои нарачки</MainTextPageInfo>
                        <IconBoxPageInfo>
                            <IconPageInfo src={ShoppingBag}/>
                        </IconBoxPageInfo>
                    </TextPageInfo>

                </MainPageInfo>

                <LoadAllOrders>

                    <HeaderTable>
                        <InsideHeaderTable> 
                            <SingleHeaderText>
                                <TableHeaderText>Број</TableHeaderText>
                            </SingleHeaderText>
                            <SingleHeaderText>
                                <TableHeaderText>Доставувач</TableHeaderText>
                            </SingleHeaderText>
                            <SingleHeaderText>
                                <TableHeaderText>Цена</TableHeaderText>
                            </SingleHeaderText>
                            <SingleHeaderText>
                                <TableHeaderText>Статус</TableHeaderText>
                            </SingleHeaderText>
                            <SingleHeaderText>
                                <TableHeaderText></TableHeaderText>
                            </SingleHeaderText>
                            {/* <SingleHeaderText>
                                <TableHeaderText></TableHeaderText>
                            </SingleHeaderText> */}
                        </InsideHeaderTable>
                        
                    </HeaderTable>

                    {fetching ? (<Loading />) : 
                        (<> 
                          {allOrders && 
                          
                          (allOrders.map((order) => (

                                <LoadAllOrdersUser>
                                    <SingleOrder>
                                        <TableData>
                                            <InsideTableData> 
                                                <SingleHeaderText>
                                                    <TableHeaderText>#{order.pro_Id}</TableHeaderText>
                                                </SingleHeaderText>
                                                <SingleHeaderText>
                                                    <TableHeaderText>{order.carrierName === "0" ? "..." : order.carrierName}</TableHeaderText>
                                                </SingleHeaderText>
                                                <SingleHeaderText>
                                                    <TableHeaderText>{order.amount} ден.</TableHeaderText>
                                                </SingleHeaderText>
                                                <SingleHeaderText>
                                                    {order.orderStatus === "pending" && 
                                                        (<>   
                                                            <OrderStatus />
                                                            <TableHeaderText>Се чека потврда</TableHeaderText>
                                                        </>)
                                                    }
                                                    {order.orderStatus === "accepted" && 
                                                        (<>   
                                                            <OrderStatus style={{backgroundColor:"#4caf50"}}/>
                                                            <TableHeaderText>Прифатена од доставувач</TableHeaderText>
                                                        </>)
                                                    }
                                                    {order.orderStatus === "shopping" && 
                                                        (<>   
                                                            <OrderStatus style={{backgroundColor:"#2196f3"}}/>
                                                            <TableHeaderText>Се пазарува</TableHeaderText>
                                                        </>)
                                                    }
                                                    {order.orderStatus === "ontheway" && 
                                                        (<>   
                                                            <OrderStatus style={{backgroundColor:"#3f51b5"}}/>
                                                            <TableHeaderText>На пат</TableHeaderText>
                                                        </>)
                                                    }
                                                    
                                                    {order.orderStatus === "delivered" && 
                                                        (<>   
                                                            <OrderStatus style={{backgroundColor:"#e91e63"}}/>
                                                            <TableHeaderText>Доставена</TableHeaderText>
                                                        </>)
                                                    }
                                                </SingleHeaderText>
                                                <SingleHeaderText style={{display: "flex", justifyContent: "flex-end"}}>
                                                    <Link style={{textDecoration:"none"}} to={`/dashboard/orders/order/${order._id}`}>
                                                        <TrackOrder>
                                                            <div class="lds-ripple"><div></div><div></div></div> 
                                                            <TableHeaderText style={{marginLeft:"17px"}}>Следи нарачка</TableHeaderText>
                                                        </TrackOrder>
                                                    </Link>
                                                </SingleHeaderText>
                                                {/* <SingleHeaderText  style={{display: "flex", justifyContent: "flex-end"}}>
                                                    <IconOrderDetails src={orderDetailsImg} />
                                                </SingleHeaderText> */}
                                            </InsideTableData> 
                                        </TableData>
                                    </SingleOrder>
                                        
                                </LoadAllOrdersUser>
                          )))}

                        </>)
                    }

                </LoadAllOrders>
 
            </InsideWrapper>
        </MainWrapper>
    </>
    )
};

export default MyOrders;