

import styled from "styled-components";

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
    width:650px;
    height:550px;
    border-radius:10px;
    background-color:#18191a;
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
`;

const ModalProductImage = styled.div`
    background-color:#242526;
    width:100%;
    height:250px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ModalProductImageLoad = styled.img`
    width:210px;
    height:210px;
    object-fit:contain;
`;

const ModalProductTitle = styled.h1`
    color:white;
    font-size:25px;
    font-family: GilroyLight; 
    margin-top:20px;
`;

const ModalProductInformation = styled.div`
    margin-top:15px;
`;

const ModalProductInformationText = styled.h3` 
    font-family: GilroyLight; 
    color:#adadad;
    font-size:18px;
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

`;

const CountDecIncBtn = styled.span`
    width: 40px;
    display: flex;
    font-family: GilroyLight;
    justify-content: center;
    font-size:16px;
    color:white;
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
`;

const ModalProductAddToCartButtonsText = styled.label`
    color:white;
    cursor:pointer;
    font-family: GilroyLight;
    font-size:15px;

`;

/////////////////////////////////////

const ModalProductLoad = ({modal}) => {
 
    return (
        <>
    { modal && <ProductModalLoad>
        <InsideModalProduct>
            
            <InsideProModalProduct>
              <CloseToCartModalProduct>
                  <CloseModalProduct>
                      <CloseModalProductBtn>X</CloseModalProductBtn>
                  </CloseModalProduct>
                  <MyCart>
                      <MyCartImg src="../icons/shopping-cart.png"></MyCartImg> 
                  </MyCart>
              </CloseToCartModalProduct>
  
              <MainProductInformation>
                  <ModalProductImage>
                      <ModalProductImageLoad src='https://firebasestorage.googleapis.com/v0/b/theristoweats-7c8f1.appspot.com/o/1645614832240ananas.png?alt=media&token=08405e50-8b9d-473b-a8fd-964269d0cf9d'></ModalProductImageLoad>
                  </ModalProductImage>
                  <ModalProductTitle>Ананас и карафиолчиња даа тукаа</ModalProductTitle>
  
                  <ModalProductInformation>
                      <ModalProductInformationText>Информации</ModalProductInformationText>
                      <SingleInformation>
                          <InformationType>Цена</InformationType>
                          <InformationValue><b>145</b> ден.</InformationValue>
                      </SingleInformation>
                  </ModalProductInformation>
              </MainProductInformation>   
  
              <ModalProductAddToCartButtons>
                  <ProductQuantity>
                      <DecIncBtn>-</DecIncBtn>
                      <CountDecIncBtn>5</CountDecIncBtn>
                      <DecIncBtn>+</DecIncBtn>
                  </ProductQuantity>
                  <ModalProductAddToCartButtonMain>
                      <ModalProductAddToCartButtonsText>Во кошничка</ModalProductAddToCartButtonsText>
                      <ModalProductAddToCartButtonsIcon src="../icons/shopping-cart.png"></ModalProductAddToCartButtonsIcon>
                  </ModalProductAddToCartButtonMain>
              </ModalProductAddToCartButtons>
  
  
            </InsideProModalProduct>
  
        </InsideModalProduct>
      </ProductModalLoad> }
      </>
    );
};

export default ModalProductLoad;