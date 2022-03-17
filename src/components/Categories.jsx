import styled from "styled-components";
import { 
    Link
} from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const SingleCategory = styled.div`
  margin-right: 10px;
  border-right: 1px solid #393a3b;
  padding-right: 10px;
  display: flex; 
  align-items: center;
`;

const CategoryName = styled.span`
  color: #e0e0e0;
  font-size: 13px;
  font-family: GilroyLight;
`;
 


const Categories = () => {

  const [cat, setCategories] = useState([]); 

  useEffect(() => {
      const getCats = async () => {
        try {
          const res = await axios.get("http://apieats.theristow.com/api/categories");  
          setCategories(res.data);  
        } catch (err) {}
      };
      getCats();
    }, []);

  return ( 
    <>       
    <Swiper 

      slidesPerView={"auto"}
      onSlideChange={() => console.log('slide change')}
    > 
      {cat.map((item) => (
        <SwiperSlide style={{width:"fit-content"}}>
          <Link to={`/products/category/${item.category_url}`} style={{ textDecoration: 'none', width: 'fit-content'}}>
            <SingleCategory  key={item._id}>
              <CategoryName>{item.category_name}</CategoryName>
            </SingleCategory>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>  
    </>

  );
};

export default Categories;
