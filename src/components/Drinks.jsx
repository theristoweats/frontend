// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
import { ProductsLoad } from "../data";
 import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const Wrapper = styled.div`
    width:93%;
`;

const ProductsList = styled.div`
    display: flex; 
    flex-direction: column;
`;

const MainTexts = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
`;

const Left = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
`;

const Right = styled.a`
    color: #cacaca;
    font-size: 15px;
    font-weight: bold;
    font-family: GilroyLight;
    text-decoration:none;
`;

const Text = styled.h2`  
    color: white;
    font-size: 25px;
    font-family: GilroyLight;
`;

const Products = styled.div`
    display:flex;
    margin-top:20px;
`;

const Product = styled.div` 
    background-color: #242526;
    width:300px;
    border-radius: 10px;
    display: flex;  
    flex-direction: column;
    margin-right: 20px;
`;

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;
    width: 100%;
    padding-top: 30px;
    flex-direction: column;
    padding-bottom: 10px;

`;

const Image = styled.img`
    width: 200px;
    height: 220px;
    object-fit: contain;
`;

const Name = styled.label`
    font-family: GilroyLight;
    color: white;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 14px;
`;

const Info = styled.div`
    border-top:1px solid #3e4042;
    width: 100%;
    margin-top: 10px;     
`;
    
const InfoWrapper = styled.div`
    
    padding: 20px;
    display: flex;
    align-items: center;
    height: 20px;
`;

const Price = styled.span`
    color: white;
    font-weight: bold;
    font-family: GilroyLight;
    font-size: 16px;
`;

const AddToCartText = styled.span`
    color: white;
    font-family: GilroyLight;
    font-size:13px;
`;

const PriceInfo = styled.div` 
    display:flex;
    flex:1;
`;

const AddToCart = styled.div` 
    background-color:#3a3b3c; 
    width: 140px;
    height: 30px;
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddToCartIcon = styled.img`
    width: 15px;
    height: 15px; 
    filter: brightness(0) invert(1); 
    margin-left: 5px;

`;

const DrinksCategory = styled.div`
    margin-top: 30px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`;

const DrinksCategoryMain = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;

const SingleDrinksCategory = styled.div`     
    margin-right: 30px;
`;

const DrinksCategoryName = styled.span`
    color: #dbdbdb;
    font-size: 15px;
    font-family: GilroyLight;
`;

const BarDrinksCategory = styled.div`
    width: 100%;
    height: 1px;
    background-color: #393a3b;
    position: relative;
`;

const ProgressBarDrinksCategory = styled.div`
    position: absolute;
    width: 100px;
    height: 1px;
    background-color: #e41e3f;
`;

const Drinks = () => {
  return ( 
    <Container>
        <Wrapper>
            <ProductsList>
                <MainTexts>
                    <Left>
                        <Text>Пијалоци</Text>
                    </Left>
                    <Right href="#">Погледни ги сите</Right>
                </MainTexts>
                {/* <DrinksCategory>
                    <DrinksCategoryMain>
                        <SingleDrinksCategory>
                            <DrinksCategoryName>Безалкохолни</DrinksCategoryName>
                        </SingleDrinksCategory>
                        <SingleDrinksCategory>
                            <DrinksCategoryName>Алкохолни</DrinksCategoryName>
                        </SingleDrinksCategory>
                        <SingleDrinksCategory>
                            <DrinksCategoryName>Жестоко</DrinksCategoryName>
                        </SingleDrinksCategory>
                        <SingleDrinksCategory>
                            <DrinksCategoryName>Кафе и чај</DrinksCategoryName>
                        </SingleDrinksCategory>
                        <SingleDrinksCategory>
                            <DrinksCategoryName>Енергетски</DrinksCategoryName>
                        </SingleDrinksCategory>
                    </DrinksCategoryMain>
                    <BarDrinksCategory>
                        <ProgressBarDrinksCategory></ProgressBarDrinksCategory>
                    </BarDrinksCategory>
                </DrinksCategory> */}
                <Products>
                    
                <Swiper

                slidesPerView={"auto"}
                onSlideChange={() => console.log('slide change')}
                > 

                    {ProductsLoad.map((item) => (
                        <SwiperSlide style={{width:"fit-content"}}>

                        <Product item={item} key={item.id}>
                            <Main>
                                <Image src={item.img}></Image>
                                <Name>{item.name}</Name>
                            </Main>
                            <Info>
                                <InfoWrapper>
                                    <PriceInfo>
                                        <Price>{item.price} ден.</Price>
                                    </PriceInfo>
                                    <AddToCart>
                                        <AddToCartText>Во кошничка</AddToCartText>
                                        <AddToCartIcon src="./icons/shopping-cart.png"></AddToCartIcon>
                                    </AddToCart>
                                </InfoWrapper>
                            </Info>
                        </Product>

                        </SwiperSlide>
                    ))} 
                
                </Swiper>
                    
                </Products>
            </ProductsList>
        </Wrapper>
    </Container>
  );
};

export default Drinks;
