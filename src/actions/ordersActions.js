import axios from "axios"; 
import {clearCart}  from "../redux/cartRedux";


export const placeOrder = (user_UUID, userData, deliveryAddress, setPlacingOrder, navigate) => async(dispatch) => {  
    setPlacingOrder(true);

    const TOKEN = JSON.parse(userData).accessToken;
    
    try { 
        const userId = JSON.parse(userData).others._id;
        const res = await axios.post(
          "http://apieats.theristow.com/api/orders/", {user_UUID, userId, deliveryAddress },
          {headers: { token: `Bearer ${TOKEN}` }},
        );  
        const returnedOrderId = res.data._id;
        dispatch(clearCart());
        navigate("/dashboard/orders/order/"+returnedOrderId);
        setPlacingOrder(false);
    } catch (err) {    
        setPlacingOrder(false);
    }
};
 

export const orderDetails = (userData, navigate, orderId, fetchingStart, setOrderDetails, setOrderStatus,setCarrierId) => async(dispatch) => {  
    fetchingStart(true);
    const TOKEN = JSON.parse(userData).accessToken;
    
    try { 
        const userId = JSON.parse(userData).others._id;
        const res = await axios.get(
          "http://apieats.theristow.com/api/orders/"+orderId+"/"+userId,
          {headers: { token: `Bearer ${TOKEN}` }},
        );
        setOrderDetails(res.data);
        fetchingStart(false);
        setOrderStatus(res.data[0].orderStatus);
        if(res.data[0].carrierId !== "0"){
            console.log(res.data[0].carrierId);
            setCarrierId(res.data[0].carrierId);
        }
        // const returnedOrderId = res.data._id;
        // navigate("/dashboard/orders/order/"+returnedOrderId);
    } catch (err) {    
        navigate("/dashboard/orders/");
        // fetchingStart(false);
    }
};



export const getAllOrders = (userData, navigate, fetchingStart, setAllOrders) => async(dispatch) => {  
    fetchingStart(true);
    const TOKEN = JSON.parse(userData).accessToken;
    
    try { 
        const userId = JSON.parse(userData).others._id;
        const res = await axios.get(
          "http://apieats.theristow.com/api/orders/"+userId,
          {headers: { token: `Bearer ${TOKEN}` }},
        );
        setAllOrders(res.data);
        fetchingStart(false); 
    } catch (err) {    
        navigate("/dashboard/orders/");
        // fetchingStart(false);
    }
};


export const getDashboardStatistic = (userData, navigate, fetchingStart, setDashboardData) => async(dispatch) => {  
    fetchingStart(true);
    const TOKEN = JSON.parse(userData).accessToken;
        console.log(TOKEN);
    try { 
        const userId = JSON.parse(userData).others._id;
        console.log(userId);
        const res = await axios.get(
          `http://apieats.theristow.com/api/dashboard/stats/${userId}`,
          {headers: { token: `Bearer ${TOKEN}` }},
        );
        setDashboardData(res.data);
        fetchingStart(false); 
    } catch (err) {   
        fetchingStart(false); 
        // navigate("/dashboard");
        // fetchingStart(false);
    }
};

