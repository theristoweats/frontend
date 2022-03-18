// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
// import { ProductsLoad } from "../data";
import { mobile, desktop1 } from "../responsive";
import MapImg from "../images/locateme.png";
  
const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width:93%;
`;

const Main = styled.div`
    width: 100%;
    background-color: #242526;
    height: 200px;
    margin-top: 50px; 
    align-items: center;
    border-radius: 10px;
    display: flex; 
    align-items: center;
    ${mobile({ flexDirection: "column", height:"auto" })}
`;

const OrderTrack = styled.div`
    display: flex;
    padding-right:10px;
    padding-top: 5px;
    align-items: center;
    ${mobile({ flexDirection: "column", padding:"25px", paddingRight:"25px" })}
`;
 
const Left = styled.div`
    width: 45%;
    padding-left: 30px;
    padding-right: 30px;
    ${mobile({ width: "100%" })}

`;

const Right = styled.div`
    width: 55%;
    ${mobile({ width: "100%", marginTop:"20px" })}
`;

const Texts = styled.div`
    display:flex;
    flex-direction:column;
`;

const MainText = styled.h1`
    font-family: GilroyLight;
    color: white;
    margin-bottom: 10px;
    font-size: 25px;
    ${mobile({ fontSize: "20px"})}
`;

const SimpleText = styled.p`
    color: #b8b8b8;
    font-size: 13px; 
    font-family: GilroyLight;
    ${mobile({ fontSize: "12px"})}
`;

const Button = styled.button`
    margin-top: 15px;
    background-color: #e41e3f;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    width: 150px;
    height: 35px;
    outline:none;
    border:none;
    font-family: GilroyLight;
    color:white;
    cursor:pointer;
`;

const Map = styled.img`
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const OrderTracking = () => {
  return (  
      <Container>
          <Wrapper>
            <Main>
                <OrderTrack>
                    <Left>
                        <Texts>
                            <MainText>Дознај до кај ти е нарачката</MainText>
                            <SimpleText>Со нас го следите целиот процес на вашата нарачка. Веќе нема да бидеш во заблуда, до каде, уште колку време колку брзо ќе дојде нарачката до пагот на твојата врата!</SimpleText>
                            {/* <Button>Дознај повеќе</Button> */}
                        </Texts>
                    </Left>
                    <Right>
                        <Map src={MapImg}></Map>
                    </Right>
                </OrderTrack>
            </Main>
          </Wrapper>
      </Container>
  );
};

export default OrderTracking;
