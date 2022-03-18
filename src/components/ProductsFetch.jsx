// import { ProductsLoadPro } from "../data";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { addCartItem } from "../actions/cartActions";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartIcon from "../icons/shopping-cart.png";
import { useCookies } from "react-cookie";
import LoadingAddProductCart from "../loadings/LoadingAddProductCart";
import ErrorAddProductCart from "../loadings/ErrorAddProductCart";
import { mobile, desktop1 } from "../responsive";

// import {
//     cartAddToCartReducer
//   }from '../reducers/cartReducer';

const Product = styled.div` 
    background-color: #242526;
    width:300px;
    border-radius: 10px;
    display: flex;  
    flex-direction: column;
    margin-right: 10px;
    margin-bottom: 10px;
    ${mobile({ width: "100%" })}
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


// const ProductsList = styled.div`
//     display: flex; 
//     flex-direction: column;
// `; 

const ProductsLoadMain = styled.div`
    display:flex;
    flex-flow:wrap;
    margin-top:20px;
`;

const Button = styled.a`
    text-decoration:none;
    ${mobile({ width: "100%" })}

`;



// product modal
const ProductModalLoad = styled.div`
    position: fixed;
    width:100%;
    height:100%;
    background-color:#000000cf;
    z-index:999;
    top:0;
    display: grid;
    place-items: center;
    left:0;
`;

const InsideModalProduct = styled.div`
    width:600px;
    height:550px;
    border-radius:10px;
    border-top:5px solid #e41e3f;
    background-color:#18191a;
    ${mobile({ width: "100%", height:"500px;" })}
`;

const CloseToCartModalProduct = styled.div`
    display:flex;
    align-items:center
`;

const InsideProModalProduct = styled.div`
    padding:30px;
`;

const CloseModalProduct = styled.div`
    display:flex;
    flex:1;
`;

const CloseModalProductBtn = styled.button` 
    color:White;
    font-size:22px;
    background:transparent;
    outline:none;
    border:none;
    cursor:pointer;    
`;
 
const MyCartImg = styled.img`
  width: 17px;
  height: 17px;
  filter: brightness(0) invert(1); 
  margin-top:1px;
  margin-right:.1px;
`;

const MyCart = styled.div`
  background-color: #3a3b3c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainProductInformation = styled.div`
    overflow-y:auto;
    margin-top:20px;
    height:380px;
    width:100%;
    ${mobile({ height: "320px" })}
`;

const ModalProductImage = styled.div`
    background-color:#242526;
    width:100%;
    height:250px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({ height: "190px" })}
`;

const ModalProductImageLoad = styled.img`
    width:210px;
    height:210px;
    object-fit:contain;
    ${mobile({ height: "170px" })}
`;

const ModalProductTitle = styled.h1`
    color:white;
    font-size:25px;
    font-family: GilroyLight; 
    margin-top:20px;
    ${mobile({ fontSize: "20px" })}
`;

const ModalProductInformation = styled.div`
    margin-top:15px;
`;

const ModalProductInformationText = styled.h3` 
    font-family: GilroyLight; 
    color:#adadad;
    font-size:17px;
    ${mobile({ fontSize: "14px" })}
`;

const SingleInformation = styled.div`
    margin-top:15px;
    display:flex;
`;

const InformationType = styled.label`
    display:flex;
    flex:1;
    font-family: GilroyLight; 
    font-size:16px;
    color:#858585;
`;

const InformationValue = styled.span`
    color:white;
    font-family: GilroyLight;
    font-size:16px;
    ${mobile({ fontSize: "13px" })}
`;

const ModalProductAddToCartButtons = styled.div`
    display:flex;
    margin-top: 10px;
    align-items:center;
`;

const ProductQuantity = styled.div`
    display: flex;
    background-color: #161616;
    width:120px;
    height: 45px;
    align-items: center;
    border-radius: 10px;
    font-size: 14px;
    border: 1px solid #343434;
    ${mobile({ fontSize: "13px" })}
`;

const DecIncBtn = styled.button`
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #18191a;
    height: 45px;
    border-radius: 10px;
    color:white;
    outline:none;
    border:none;
    cursor:pointer;
    font-size:15px;
    font-family: GilroyLight;
    ${mobile({ fontSize: "13px" })}

`;

const CountDecIncBtn = styled.span`
    width: 40px;
    display: flex;
    font-family: GilroyLight;
    justify-content: center;
    font-size:16px;
    color:white;
    ${mobile({ fontSize: "13px" })}
`;

const ModalProductAddToCartButtonMain = styled.button`
    margin-left:10px;
    height:45px;
    width:100%;
    
    background-color: #161616;
    border: 1px solid #343434;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    outline:none;
    cursor:pointer;
`;

const ModalProductAddToCartButtonsIcon = styled.img`
    width:20px;
    height:20px;
    filter: brightness(0) invert(1); 
    margin-left:10px;
    ${mobile({ width: "17px", height:"17px" })}
`;

const ModalProductAddToCartButtonsText = styled.label`
    color:white;
    cursor:pointer;
    font-family: GilroyLight;
    font-size:15px;
    ${mobile({ fontSize: "13px" })}
`;
 

//////////////////////////////

const ProductsFetch = ({products}) => { 
    const [cookies, setCookie, removeCookie] = useCookies();
    const addToCartItems = useSelector((state) => state.addToCart);
    const { loading, error } = addToCartItems;

    const [modal, setModalIsOpen] = useState(false);
    const [modalProduct, setModalData] = useState(null); 
    const [quantity, setQuantity] = useState(1);
    const dispach = useDispatch();

    // const cart2 = useSelector(state=>state.cart2);

    const handleCloseModal = (e) => {
        setModalIsOpen(false);
        setModalData(null);
        setQuantity(1);
    };

    
    const handleQuantity = (type) => {
        if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
        } else {
        setQuantity(quantity + 1);
        }
    };

    
    console.log(loading);
    console.log(error);


    const handeAddToCart = () => {

        console.log(loading);
        console.log(error);
        
        // console.log(userUUID);
        dispach(addCartItem({product:modalProduct, quantity:quantity, user_UUID:cookies.userUUID}));
        
        // changeText("Додадено!");
    };

 
    const initialState = "Во кошничка";
    const [buttonText, setButtonText] = useState("Во кошничка"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    // the effect
    useEffect(() => { 
        if(buttonText !== initialState){
        setTimeout(() => setButtonText(initialState), [1000])
        }
    }, [buttonText])

    const changeText = (text) => setButtonText(text);

    return (
      <>
      <ProductsLoadMain>
        {products.map((item) => (
            // <Link to={`/product/${item._id}`} style={{ textDecoration: 'none'}}>
            <Button href="#" onClick={(e)=> {
                e.preventDefault();
                setModalData(item);
                setModalIsOpen(true);}}>
                <Product item={item} key={item._id}>
                    <Main>
                        <Image src={item.img}></Image>
                        <Name>{item.title}</Name>
                    </Main>
                    <Info>
                        <InfoWrapper>
                            <PriceInfo>
                                <Price>{item.price} ден.</Price>
                            </PriceInfo>
                            <AddToCart>
                                <AddToCartText>Во кошничка</AddToCartText>
                                <AddToCartIcon src={cartIcon}></AddToCartIcon>
                            </AddToCart>
                        </InfoWrapper>
                    </Info>
                </Product>
            </Button>
        ))} 
    </ProductsLoadMain>

    { modal && ( 
    <>
        
        <ProductModalLoad>
            <motion.div
                initial={{
                    y:500, 
                }}
                animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.3
                    }
                }}
                className="_Thloflop"
            >
            <InsideModalProduct>
                
                <InsideProModalProduct> 

                    <CloseToCartModalProduct>
                        <CloseModalProduct>
                            <CloseModalProductBtn onClick={handleCloseModal}>X</CloseModalProductBtn>
                        </CloseModalProduct>
                        <Link to="/cart">
                            <MyCart>
                                <MyCartImg src={cartIcon}></MyCartImg> 
                            </MyCart>
                        </Link>
                    </CloseToCartModalProduct>
        
                    <MainProductInformation>
                        <ModalProductImage>
                            <ModalProductImageLoad src={modalProduct.img}></ModalProductImageLoad>
                        </ModalProductImage>
                        <ModalProductTitle>{modalProduct.title}</ModalProductTitle>
        
                        <ModalProductInformation>
                            <ModalProductInformationText>Информации</ModalProductInformationText>
                            <SingleInformation>
                                <InformationType>Цена</InformationType>
                                <InformationValue><b>{modalProduct.price}</b> ден.</InformationValue>
                            </SingleInformation>
                        </ModalProductInformation>
                    </MainProductInformation>   
        
                    <ModalProductAddToCartButtons>
                        <ProductQuantity>
                            <DecIncBtn onClick={() => handleQuantity("dec")} >-</DecIncBtn>
                            <CountDecIncBtn>{quantity}</CountDecIncBtn>
                            <DecIncBtn onClick={() => handleQuantity("inc")} >+</DecIncBtn>
                        </ProductQuantity>
                        
    
                         
                        <ModalProductAddToCartButtonMain onClick={handeAddToCart}>
                            <ModalProductAddToCartButtonsText>{buttonText}</ModalProductAddToCartButtonsText>
                            <ModalProductAddToCartButtonsIcon src={cartIcon}></ModalProductAddToCartButtonsIcon>
                        </ModalProductAddToCartButtonMain>
                         
                    </ModalProductAddToCartButtons>
    
    
                </InsideProModalProduct>
    
            </InsideModalProduct>
            </motion.div>

        </ProductModalLoad> 
       </>)
      }
    </>
  );
};

export default ProductsFetch;
  