import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductResearch from "./pages/ProductResearch";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import { useCookies } from "react-cookie";
import uuid from 'react-uuid';
import { listCartItems } from "./actions/cartActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "./redux/userRedux";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
   
  const dispatch = useDispatch();

  const [cookies, setCookie, removeCookie] = useCookies();
  const user = false;

  if(cookies.userUUID){
    // console.log(cookies.userUUID);
  }else{
    window.localStorage.clear();
    setCookie('userUUID', uuid(), { path: '/' });
  } 

  useEffect(() => {
    dispatch( 
        listCartItems({ 
            user_UUID:cookies.userUUID
        })
    );  
  }, []);
  const userData = localStorage.getItem("user");


  useEffect(() => {
    
    if(userData){
      dispatch(loginStart());
      dispatch(loginSuccess(userData));
      // console.log("DATAAAAAAAAAAAAAAAAAAAAAAAA  --------  " + userData)
    }
  }, [dispatch]);


  
  console.log("CURRENT USER: :: : : _ _ _ _ _ _ _--- - - - -  - - -    "+ currentUser)
  
   


  return ( 
    <>
    <BrowserRouter>
    {isFetching !==true &&
    <>
      <Navbar user={currentUser}/>

      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        ></Route>
        <Route
          path="/cart"
          element={<Cart user={currentUser}/>}
        ></Route> 
        <Route
          path="/products/category/:category"
          element={<ProductResearch />}
        ></Route> 
        <Route
          path="/products/category/:category/name/:name/min/:min/max/:max/shown/:shown/order/:order/pageNumber/:pageNumber/"
          element={<ProductResearch />}
          exact
        ></Route>
        {/* <Route
          path="/login"
          element={<Login />} 
        ></Route> */}
        <Route
          path="/register"
          element={<Register />} 
        ></Route>

        
        <Route path="/login" element={
          currentUser ? <Navigate to="/dashboard" /> : <Login />
          }></Route> 
          
        <Route
          path="/dashboard"
          element={currentUser ?  <Dashboard user={currentUser} page={"dashboard"} /> : <Navigate to="/" />}> 
        </Route> 
        
        <Route
          path="/dashboard/orders"
          element={currentUser ?  <Dashboard user={currentUser} page={"orders"}/> : <Navigate to="/" />}> 
        </Route>

        
        <Route
          path="/dashboard/orders/order/:orderId"
          element={currentUser ?  <Dashboard user={currentUser} page={"orders_order"}/> : <Navigate to="/" />}> 
        </Route>

      </Routes>
      <Footer />
        </>
        }

    </BrowserRouter>
    </>
  );
}

export default App;
