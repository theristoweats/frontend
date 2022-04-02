import DashboardLeftMenu from "./DashboardLeftMenu";
import styled from "styled-components"; 
import TrackingOrder from "./TrackingOrder";
import DashboardHome from "./DashboardHome";
import MyOrders from "./MyOrders";
import MyAddresses from "./MyAddresses";
import MyProfile from "./MyProfile";
import io from "socket.io-client";
import { useEffect } from "react";

const LoadDashboardMain = styled.div`
    display: flex;
    min-height: 100vh;
`; 

const DashboardRight = styled.div`
    width: 100%;
    margin-left: 250px;
`;
const socket = io.connect("https://apieats.theristow.com/");


const Dashboard = ({setUsername, setUser, setLoadingUserData, user, page}) =>{

    // console.log("NEW PAGE");
    useEffect(() => { 
        // socket.disconnect();  
        // socket.connect(); 
        // socket?.emit("disc");
        console.log("DASHB");
      }, [page]); 
    return(
    <> 
        <LoadDashboardMain>
            <DashboardLeftMenu setUsername={setUsername} page={page} setUser={setUser} setLoadingUserData={setLoadingUserData}/>
            <DashboardRight>
                {page === "dashboard" && (<> <DashboardHome /> </>) }
                {page === "orders_order" && (<> <TrackingOrder socket={socket}/> </>) }
                {page === "orders" && (<> <MyOrders socket={socket}/> </>) }
                {page === "addresses" && (<> <MyAddresses /> </>) }
                {page === "profile" && (<> <MyProfile setUsername={setUsername}/> </>) }
            </DashboardRight>
        </LoadDashboardMain>
    </>
    
    )
};

export default Dashboard;