import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductResearch from "./pages/ProductResearch";
import Cart from "./pages/Cart";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import { useCookies } from "react-cookie";
import uuid from 'react-uuid';
import { listCartItems } from "./actions/cartActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
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

  return ( 
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        ></Route>
        <Route
          path="/cart"
          element={<Cart user={user}/>}
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
      </Routes>
      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
