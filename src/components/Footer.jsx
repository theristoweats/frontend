// import {
//     Facebook,
//     Instagram,
//     MailOutline,
//     Phone,
//     Pinterest,
//     Room,
//     Twitter,
// } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, desktop1 } from "../responsive";

// import { mobile } from "../responsive";
 
const Container = styled.div`
    min-height: 200px;
    width:100%;
    justify-content: center;
    display: flex;
    background-color: #242526;
    border-top: 1px solid #393a3b;
    // margin-top: 100px;
`;

const Wrapper = styled.div` 
    width:93%;
`;

const Main = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
`;

const LogoText = styled.div`
    color: white;
    font-family: GilroyMedium;
    font-size:20px;
`;

// const LogoIcon = styled.img`
//     width:40px;
//     height:40px;
//     border-radius:10px;
// `;

const FirstFooterLinks = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    
`;

const FooterLink = styled.div`
    display: flex;
    flex-direction:column; 
`;

const LinksTitle = styled.label` 
    font-size-adjust: 16px;
    color: #d8d8d8;
    font-family: GilroyLight;
`;

const LinkName = styled.span`
    margin-top: 10px;
    color: #868686;
    font-size: 14px; 
    font-family: GilroyLight;
`;

const ClickableLink = styled.a` 
    font-family: GilroyLight;
    text-decoration:none;
    color: #868686;
`;

const NewsLetter = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Input = styled.input`
    width: 200px;
    border: none;

    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-family: GilroyLight;
    font-size:13px;
    background-color: rgba(255, 255, 255, 0.075);
    color: white;
`;

const ButtonSubscribe = styled.button`
    outline:none;
    border:none;

    padding: 10px;
    background-color: #e41e3f;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    font-family: GilroyLight;
    color: white;
    font-size:13px;
    cursor:pointer;
`;

const SocialMedia = styled.div`
    margin-top: 20px;
    display: flex;
`;

const SocialMediaSingle = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    padding: 8px;   
    border-radius: 50%;
    margin-right: 10px; 
`;

const SocialMediaIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const SafePayment = styled.div`
    margin-top: 10px;
    display: flex;
`;

const VisaPayment = styled.div`
    background-color: #0063b4;
    display: flex;
    width: 60px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const VisaPaymentIcon = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
`;

const MastercartPayment = styled.div`
    background-color: #364962;
    display: flex;
    width: 60px;
    border-radius: 5px;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
`;

const MastercartPaymentIcon = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
`;


const Footer = () => {

  return ( 
      <Container>
          <Wrapper>
            <Main>
                <Logo>
                    {/* <LogoIcon src="./icons/logo-red-2.png"></LogoIcon> */}
                    <LogoText>The Ristow Eats</LogoText>
                </Logo>
                <FirstFooterLinks>
                    <FooterLink>
                        <LinksTitle>??????????</LinksTitle>
                        <LinkName>?????????????? ??????????:<br />00:00 - 24:00</LinkName>
                        <LinkName>?????????????? ???? ????????????</LinkName>
                        <LinkName>???????????? ??????????????</LinkName>
                        <LinkName>?????????????? ???? ????????????????</LinkName>
                        <LinkName>?????????????? ???? ???????????? ????????????</LinkName>
                    </FooterLink>
                    <FooterLink>
                        <LinksTitle>??????????????</LinksTitle>
                        <LinkName>??????????????:<br />075440625</LinkName>
                        <LinkName>??-????????:<br />info@eats.theristow.com</LinkName>
                        <LinkName>??????????:<br />?????????????????? ????.20 ??????????????????????</LinkName>
                    </FooterLink>
                    <FooterLink>
                        <LinksTitle>????????????????????</LinksTitle>
                        <LinkName><ClickableLink href="#">???????????????? ???? ??????????????????</ClickableLink></LinkName>
                        <LinkName><ClickableLink href="#">?????????? ???????????? ???? ??????????????????</ClickableLink></LinkName>
                        <LinkName><ClickableLink href="#">???????????????? ???? ????????????????????</ClickableLink></LinkName>
                    </FooterLink>
                    <FooterLink>
                        <LinksTitle>?????????????????? ????</LinksTitle>
                        <NewsLetter>
                            <Input placeholder="???????????? ??-???????? ????????????"></Input>
                            <ButtonSubscribe>??????????????</ButtonSubscribe>
                        </NewsLetter>
                        <SocialMedia>
                            <SocialMediaSingle>
                                <SocialMediaIcon src="./icons/instagram.png"></SocialMediaIcon>
                            </SocialMediaSingle>
                            <SocialMediaSingle>
                                <SocialMediaIcon src="./icons/facebook.png"></SocialMediaIcon>
                            </SocialMediaSingle>
                            <SocialMediaSingle>
                                <SocialMediaIcon src="./icons/twitter.png"></SocialMediaIcon>
                            </SocialMediaSingle>
                            <SocialMediaSingle>
                                <SocialMediaIcon src="./icons/youtube-logotype.png"></SocialMediaIcon>
                            </SocialMediaSingle>
                        </SocialMedia>
                    </FooterLink>

                </FirstFooterLinks>
                <FirstFooterLinks>
                    <FooterLink>
                        <LinksTitle>???????????????? ??????????</LinksTitle>
                        <LinkName>???????? ?????????? ???? ???????????????? <br />The Ristow Eats ?? 2021</LinkName>
                    </FooterLink>
                    <FooterLink>
                        <LinksTitle>??????????????????</LinksTitle>
                        <LinkName><ClickableLink href="#">?????????? ?????????????? ????????????????</ClickableLink></LinkName>
                        <LinkName><ClickableLink href="#">?????????? ????????????</ClickableLink></LinkName>
                        <LinkName><ClickableLink href="#">?????????? ????????????????????</ClickableLink></LinkName>
                        <LinkName><ClickableLink href="#">?????????????????? ???? ????????????</ClickableLink></LinkName>
                    </FooterLink>
                    <FooterLink>
                        <LinksTitle>???????????????? ??????????????</LinksTitle>
                        <SafePayment>
                            <VisaPayment>
                                <VisaPaymentIcon src="./icons/Visa-Logo-PNG-Image.png"></VisaPaymentIcon>
                            </VisaPayment>
                            <MastercartPayment>
                                <MastercartPaymentIcon src="./icons/Mastercard-Logo.png"></MastercartPaymentIcon>
                            </MastercartPayment>
                        </SafePayment>
                    </FooterLink>
                    <FooterLink></FooterLink>
                    <FooterLink></FooterLink>
                    <FooterLink></FooterLink>

                </FirstFooterLinks>
            </Main>
          </Wrapper>
      </Container>
  );
};

export default Footer;
  