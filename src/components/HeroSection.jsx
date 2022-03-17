// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
import shoppingcart from "../icons/shoppingcart.png";
import { mobile, desktop1 } from "../responsive";
import SearchBarIcon from "../icons/search-b.png";

const Container = styled.div` 
    display: flex;
    justify-content: center;
    padding-top: 60px;
    align-items: center; 
`;

const Wrapper = styled.div`
    width:93%;
`;
 
const HeroInside = styled.div`
    display: flex;
    align-items: center;
    background-color: #e41e3f;
    padding-left:40px;
    padding-bottom: 30px;
    padding-top: 30px;
    border-radius: 10px;
    margin-top: 70px;
    ${mobile({ paddingLeft: "0px" })}

`;

const Left = styled.div`
    width:50%;
    ${mobile({ width: "100%", paddingLeft:"20px", paddingRight:"20px" })}
`;


const Right = styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ display: "none" })}

`;

const Texts = styled.div`
`;

const MainText = styled.h1` 
    color: white;
    font-size: 50px;
    font-family: GilroyMedium;
    ${desktop1({ fontSize: "35px" })}
    ${mobile({ fontSize: "20px" })}
`;

const SimpleText = styled.p` 
    color: #d2d2d2;
    font-size: 14px;
    margin-top: 20px;
    font-family: GilroyLight;
    ${mobile({ display: "none" })}
`;

const SearchBar = styled.div`  
    position: relative;
    display: flex;
    flex: 1;
    margin-top:25px;
    width: 550px;
    position: relative;
    ${desktop1({ width: "450px" })}
    ${mobile({ width: "100%" })}

`;

const Input = styled.input`
    width: 550px;
    height: 24px;
    font-size: 14px;
    background-color: #0000002e;
    border-radius: 30px;
    border: 1px solid transparent;
    color: white;
    line-height: 1.43;
    padding: 10px;    
    padding-left:43px;
    outline: none;
    font-size: 14px; 
    font-family: GilroyLight;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #b3b3b3;
        opacity: 1;  
    }
    :-ms-input-placeholder {
        color: #b3b3b3;
        opacity: 1;
    }

    ${desktop1({ width: "450px", paddingRight:"148px" })}
    ${mobile({ width: "100%", height:"12px", fontSize:"12px", paddingRight:"20px" })}

`;

const SearchIcon = styled.img` 
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: .5;
    margin-top: 11px;
    margin-left: 14px;
    filter: brightness(0) invert(1); 
    ${mobile({ marginTop: "8px" })}

`;

const Button = styled.button`

    position: absolute;
    right: 0;
 
    background-color: #e41e3f;
    width: 130px;
    height: auto;    
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    border-radius: 20px;
    margin-top: 5px;
    margin-right: 5px;
    border:none;
    cursor:pointer;
    font-family: GilroyLight;
    outline:none;
    ${mobile({ display: "none" })}

`;

const CartImg = styled.img`
    width: 350px;
    height: 350px;
    object-fit: contain;
    ${desktop1({ width: "300px", height:"300px" })}
    ${mobile({ display: "none" })}

`;

const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
            <HeroInside>
                <Left>
                    <Texts>
                        <MainText>Одмори се ние ќе ти донесеме до пред врата се што ти треба!</MainText>
                        <SimpleText>Од сега со нас се ти е на дофат. Од комфорот на твојот кревет можеш да си испазаруваш. Ние ќе ти завршиме се, само ти треба да ја земиш нарачката од пред вата.</SimpleText>
                    </Texts>
                    <SearchBar>    
                        <Input placeholder="Пребарај, над 200 достапни производи" />
                        <SearchIcon src={SearchBarIcon}></SearchIcon>
                        <Button>Пребарај</Button>
                    </SearchBar>
                </Left>
                <Right>
                    <CartImg src={shoppingcart}></CartImg>
                </Right>
            </HeroInside>
        </Wrapper>
    </Container>
  );
};

export default HeroSection;
