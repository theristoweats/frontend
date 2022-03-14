import styled from "styled-components"; 
import { useState } from "react";
import {deleteCartItem,incDecCartItem} from "../actions/cartActions";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

const SingleProductInCart = styled.div`
display: flex;
width: 100%;
position: relative;
margin-bottom: 15px;
`;

const ImgMainProduct = styled.div`
background-color: #161616;
border-radius: 10px;
position: relative;
`;

const ProductLoadImgMain = styled.div`
width: 110px;
height: 110px;
display: flex;
align-items: center;
justify-content: center;
`;

const ProductImage = styled.img`
width:80px;
height:80px;
object-fit:contain;
`;

const ProductInCartInfo = styled.div`
display: flex;
align-items: center;
width: 100%;
`;

const ProductInfoInside = styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
flex: 1;
width: 100%;
`;

const ProductTitle = styled.label`
font-family: GilroyLight;
color: white;
font-size: 18px;
`;

const ProductPrice = styled.div`
font-weight: bold;
margin-top:15px;
color:white;
font-family: GilroyLight;
font-size:15px;
`;

const ProductQuantity = styled.div`
display: flex;
background-color: #161616;
width:100px;
height: 30px;
align-items: center;
border-radius: 10px;
font-size: 14px;
margin-top: 15px;
`;

const DecIncBtn = styled.button`
width: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: #18191a;
height: 30px;
border-radius: 10px;
color:white;
outline:none;
border:none;
cursor:pointer;
font-size:15px;
font-family: GilroyLight;

`;

const CountDecIncBtn = styled.span`
width: 40px;
display: flex;
font-family: GilroyLight;
justify-content: center;
font-size:15px;
color:white;
`;

const DeleteProductFromCart = styled.a`
display: flex;
align-items: center;
justify-content: center;
text-decoration:none;
`;

const IconDeleteProductFromCart = styled.img`    
width: 25px;
height: 25px;
`;



// delete item from cart modal
const Modal = styled.div`
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

const InsideModalAsk = styled.div`
    width:450px;
    height:215px;
    border-left:5px solid #e41e3f;
    background-color:#18191a;
    border-radius:10px
`;

const InsideModalAskPro = styled.div`
    padding:30px;
`;  

const MainTextModal = styled.h3`
    font-family: GilroyLight; 
    color:white;
    font-size:20px;
`;

const SecoundText = styled.p`
    font-family: GilroyLight; 
    color:#b3b3b3;
    margin-top:20px;
    font-size:14px;
`;

const ButtonsLoadHere = styled.div`
    display:flex;  
    margin-top:25px;
`;

const SingleButton = styled.div`
    margin-right:10px;
    display:flex;
`;

const ButtonLink = styled.a`
    text-decoration:none;
    color:white;
    font-family: GilroyLight; 
`;

const SingleButtonInside = styled.div`
    display:flex;
    width:100px;
    height:30px;
    font-family: GilroyLight;
    
    background-color: #161616;
    border: 1px solid #343434;
    align-items:center;
    justify-content: center;
    text-align:center;
    border-radius:10px;
`;

const TextMainY  = styled.span`
    font-family: GilroyLight;
    font-size:14px;
`;


const LoadCartItems = ({products, updateQuantity}) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const dispach = useDispatch();
    const user_UUID = cookies.userUUID;
    const [DeleteModal, OpenDeleteModal] = useState(false);
    const [itemForDelete, setItemForDelete] = useState(5);

    console.log(updateQuantity);

    const handleDelete = (e,itemId) =>{
        e.preventDefault();
        OpenDeleteModal(true); 
        setItemForDelete(itemId); 
    }

    const handleDeleteYes = (e) => {
        e.preventDefault(); 
        dispach(deleteCartItem({user_UUID, itemId:itemForDelete}));
        OpenDeleteModal(false);
        setItemForDelete(null);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        OpenDeleteModal(false);
        setItemForDelete(null);
    };

    const handleQuantityDec = (e, itemId, quantity) => {
        e.preventDefault();
        if(quantity > 1){
            dispach(incDecCartItem({user_UUID, itemId:itemId, type:"dec"}));
            console.log("hii dec" + quantity);
        }
    };
   
    const handleQuantityInc = (e, itemId) => {
        e.preventDefault();
        console.log("hii inc" + itemId);
        dispach(incDecCartItem({user_UUID, itemId:itemId, type:"inc"}));

    };
    //   console.log(cart2);
    
    //   console.log(cookies.userUUID);
    
      
      return (
      
        <>
        {products.map(product => ( 
            <SingleProductInCart>
                <ImgMainProduct>
                    <ProductLoadImgMain>
                        <ProductImage src={product.img}></ProductImage>
                    </ProductLoadImgMain>
                </ImgMainProduct>
                <ProductInCartInfo>
                    <ProductInfoInside>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice>{product.price} ден.</ProductPrice>
                        <ProductQuantity>
                            <DecIncBtn disabled={updateQuantity} onClick={(e)=>{handleQuantityDec(e, product._id, product.quantity)}}>-</DecIncBtn>
                            <CountDecIncBtn>{product.quantity}</CountDecIncBtn>
                            <DecIncBtn disabled={updateQuantity} onClick={(e)=>{handleQuantityInc(e, product._id)}}>+</DecIncBtn>
                        </ProductQuantity>
                    </ProductInfoInside>
                    <DeleteProductFromCart href="#" onClick={(e)=>{handleDelete(e, product._id)}}>
                        <IconDeleteProductFromCart src="../icons/delete.png"></IconDeleteProductFromCart>
                    </DeleteProductFromCart>
                </ProductInCartInfo>
            </SingleProductInCart>))}


            {DeleteModal && ( 
                <>   
                    <Modal>
                        <InsideModalAsk>
                            <InsideModalAskPro>
                                <MainTextModal>Вниманије! Ќе го избришете продуктот од кошничката.</MainTextModal>
                                <SecoundText>Дали сте сигурни дека сакате да го избришете продуктот од вашата кошничка?</SecoundText>   
                                <ButtonsLoadHere>
                                    <SingleButton>
                                        <ButtonLink href="#" onClick={(e)=>{handleDeleteYes(e)}}>
                                            <SingleButtonInside>
                                                <TextMainY>Избриши</TextMainY>
                                            </SingleButtonInside>
                                        </ButtonLink>
                                    </SingleButton>
                                    <SingleButton>
                                        <ButtonLink href="#" onClick={(e)=>{handleCancel(e)}}>
                                            <SingleButtonInside>
                                                <TextMainY>Откажи</TextMainY>
                                            </SingleButtonInside>
                                        </ButtonLink>
                                    </SingleButton>
                                </ButtonsLoadHere>
                            </InsideModalAskPro>
                        </InsideModalAsk>
                    </Modal>
                </>
            )}
        
        </>
      
      );
}
  
export default LoadCartItems;