import React from "react"; 
import HeroSection from "../components/HeroSection";
import PopularProducts from "../components/PopularProducts";
import DontationInfo from "../components/DontationInfo";
import ForYouProducts from "../components/ForYouProducts";
import OrderTracking from "../components/OrderTracking";
import Drinks from "../components/Drinks";
import Banners from "../components/Banners";

const Home = () => {
  return (
    <div> 
      <HeroSection />
      <PopularProducts />
      <DontationInfo />
      <ForYouProducts />
      <OrderTracking />
      <Drinks />
      <Banners /> 
    </div>
  );
};

export default Home;
