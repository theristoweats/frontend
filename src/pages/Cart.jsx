import React from "react";
import MainCart from "../components/MainCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Cart = ({user}) => {
  return (
    <>
      <MainCart user={user}/>
    </>
  );
};

export default Cart;
