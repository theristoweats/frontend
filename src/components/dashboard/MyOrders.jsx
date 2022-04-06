import styled from "styled-components";  
import ShoppingBag from "../../icons/shopping-bag-delivered.png";
import "./style.css";
import { getAllOrders } from "../../actions/ordersActions";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../loadings/LoadingMyOrders";
import io from "socket.io-client";
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile3, mobile4  } from "../../responsive";


const MainWrapper = styled.div``;

const InsideWrapper = styled.div`
    margin-top: 100px;
    padding: 45px;
    ${mobile3({ padding: "5%" })}

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
    margin-left:10px;
    ${desktop4({ marginLeft:"10px" })}
    ${desktop2({ marginLeft:"5px" })}
    ${mobile3({ fontSize: "20px", marginLeft:"0px" })}

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


const LoadOrdersPro = styled.div`
    display:flex;
    flex-flow:wrap;
    margin-top:20px;
`;

const SingleOrderPro = styled.div`
    width:450px;
    height:fit-content;
    background-color:#242526;
    border-radius:10px;
    margin:10px;

    ${desktop4({ width: "400px" })}
    ${desktop2({ width: "350px", margin:"5px" })}
    ${mobile3({ width: "100%", margin:"0px", marginBottom:"10px" })}


`;

const InsideSingleOrderPro = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    padding-bottom:0px;
    padding-top:0px;
`;


const InsideSingleOrderProHa = styled.div`
    padding:20px; 
    padding-top:0px;
    padding-bottom:0px;
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
`;

const IncolumnH = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
`;

const OrderNumber = styled.label`
    font-family:GilroyLight;
    font-size:15px;
    font-weight:bold;
    color:white;
`;

const OrderTime = styled.span`
    font-family:GilroyLight;
    font-size:13px;
    color:#b9b9b9;
`;

const OrderProducts = styled.div`
    display:flex; 
    align-items:center;
`;

const OrderProductsText = styled.label`
    font-family:GilroyLight;
    font-size:14px;
    color:#b9b9b9;
`;


const OrderProductsTextValue = styled.label`
    font-family:GilroyLight;
    font-size:14px;
    color:white;
    font-weight:bold;
    margin-left:5px;
`;

const OrderTrackingButton = styled.div`
    border:1px solid #606060;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:10px;
    display:flex;
    align-items:center;
`;

const OrderTrackingButtonText = styled.span`
    padding-left:15px;
    font-family:GilroyLight;
    font-size:13px;
    color:#b9b9b9;
`;

// const socket = io.connect("http://localhost:5000/");


const MyOrders = ({socket}) =>{

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

    const converttime = (time) => { 
        time = new Date(time).toISOString();
        const date =  time.slice(8, 10) + "." + time.slice(5, 7) + "." + time.slice(0, 4);
        return date + " во " + time.slice(11, 16);
    }

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


                <LoadOrdersPro>
  
                    {fetching ? (<Loading />) : 
                        (<> 
                          {allOrders && 
                          
                          (allOrders.map((order) => (
                            <SingleOrderPro>
                                
                                <IncolumnH style={{marginTop:"0px", borderBottom:"1px solid #18191a", paddingTop:"15px", paddingBottom:"15px"}}> 
                                    <InsideSingleOrderProHa>

                                        <OrderNumber>#{order.pro_Id}</OrderNumber>
                                        <OrderTime>{converttime(order.time)}</OrderTime>
                                    </InsideSingleOrderProHa>
                                </IncolumnH>
                                <InsideSingleOrderPro> 

                                    <IncolumnH> 
                                        <OrderProducts>
                                            <OrderProductsText>Доставувач: <span style={{fontWeight:"bold",color:"white"}}>{order.carrierName === "0" ? "Сеуште нема" : order.carrierName}</span></OrderProductsText>  
                                        </OrderProducts>  
                                    </IncolumnH>

                                    <IncolumnH> 
                                        <OrderProducts>
                                            <OrderProductsText>Продукти:</OrderProductsText> 
                                            <OrderProductsTextValue>{order.products.length}</OrderProductsTextValue>
                                        </OrderProducts> 
                                        <OrderProducts>
                                            <OrderProductsText>Вкупно:</OrderProductsText> 
                                            <OrderProductsTextValue>{order.amount} ден.</OrderProductsTextValue>
                                        </OrderProducts> 
                                    </IncolumnH>
                                    
                                </InsideSingleOrderPro>
                                
                                <IncolumnH style={{marginTop:"0px", borderTop:"1px solid #18191a", paddingTop:"15px"}}> 
                                    <InsideSingleOrderProHa>

                                        <OrderProducts>
                                            <Link style={{textDecoration:"none"}} to={`/dashboard/orders/order/${order._id}`}>
                                                <OrderTrackingButton>
                                                    <div class="lds-ripple"><div></div><div></div></div> 
                                                    <OrderTrackingButtonText>Следи <span className="m-m23-mobile">нарачка</span></OrderTrackingButtonText>
                                                </OrderTrackingButton> 
                                            </Link>
                                        </OrderProducts> 
                                        <OrderProducts>  
                                            {order.orderStatus === "pending" && 
                                                (<>   
                                                    <OrderStatus />
                                                    <TableHeaderText>Се чека потврда</TableHeaderText>
                                                </>)
                                            }
                                            {order.orderStatus === "accepted" && 
                                                (<>   
                                                    <OrderStatus style={{backgroundColor:"#4caf50"}}/>
                                                    <TableHeaderText>Прифатена <span className="m-m23-mobile-3">од доставувач</span></TableHeaderText>
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
                                        </OrderProducts> 
                                    </InsideSingleOrderProHa>
                                </IncolumnH>
                            </SingleOrderPro>
                                // <LoadAllOrdersUser>
                                //     <SingleOrder>
                                //         <TableData>
                                //             <InsideTableData> 
                                //                 <SingleHeaderText>
                                //                     <TableHeaderText>#{order.pro_Id}</TableHeaderText>
                                //                 </SingleHeaderText>
                                //                 <SingleHeaderText>
                                //                     <TableHeaderText>{order.carrierName === "0" ? "..." : order.carrierName}</TableHeaderText>
                                //                 </SingleHeaderText>
                                //                 <SingleHeaderText>
                                //                     <TableHeaderText>{order.amount} ден.</TableHeaderText>
                                //                 </SingleHeaderText>
                                //                 <SingleHeaderText>
                                //                     {order.orderStatus === "pending" && 
                                //                         (<>   
                                //                             <OrderStatus />
                                //                             <TableHeaderText>Се чека потврда</TableHeaderText>
                                //                         </>)
                                //                     }
                                //                     {order.orderStatus === "accepted" && 
                                //                         (<>   
                                //                             <OrderStatus style={{backgroundColor:"#4caf50"}}/>
                                //                             <TableHeaderText>Прифатена од доставувач</TableHeaderText>
                                //                         </>)
                                //                     }
                                //                     {order.orderStatus === "shopping" && 
                                //                         (<>   
                                //                             <OrderStatus style={{backgroundColor:"#2196f3"}}/>
                                //                             <TableHeaderText>Се пазарува</TableHeaderText>
                                //                         </>)
                                //                     }
                                //                     {order.orderStatus === "ontheway" && 
                                //                         (<>   
                                //                             <OrderStatus style={{backgroundColor:"#3f51b5"}}/>
                                //                             <TableHeaderText>На пат</TableHeaderText>
                                //                         </>)
                                //                     }
                                                    
                                //                     {order.orderStatus === "delivered" && 
                                //                         (<>   
                                //                             <OrderStatus style={{backgroundColor:"#e91e63"}}/>
                                //                             <TableHeaderText>Доставена</TableHeaderText>
                                //                         </>)
                                //                     }
                                //                 </SingleHeaderText>
                                //                 <SingleHeaderText style={{display: "flex", justifyContent: "flex-end"}}>
                                //                     <Link style={{textDecoration:"none"}} to={`/dashboard/orders/order/${order._id}`}>
                                //                         <TrackOrder>
                                //                             <div class="lds-ripple"><div></div><div></div></div> 
                                //                             <TableHeaderText style={{marginLeft:"17px"}}>Следи нарачка</TableHeaderText>
                                //                         </TrackOrder>
                                //                     </Link>
                                //                 </SingleHeaderText> 
                                //             </InsideTableData> 
                                //         </TableData>
                                //     </SingleOrder>
                                        
                                // </LoadAllOrdersUser>
                          )))}

                        </>)
                    }
                    

                </LoadOrdersPro>

{/* 
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
                                            </InsideTableData> 
                                        </TableData>
                                    </SingleOrder>
                                        
                                </LoadAllOrdersUser>
                          )))}

                        </>)
                    }

                </LoadAllOrders> */}
 
            </InsideWrapper>
        </MainWrapper>
    </>
    )
};

export default MyOrders;