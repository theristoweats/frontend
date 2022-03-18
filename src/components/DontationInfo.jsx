// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components"; 
import { mobile, desktop1 } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Wrapper = styled.div`
    width:93%;
`;

const Main = styled.div`
    background-color: #242526;
    width: 100%;
    height: 190px;
    border-radius: 10px;  
    ${mobile({ height: "200px" })}
`;

const Donation = styled.div `
    padding:30px;

`;

const Texts = styled.div`
    display:flex;
    flex-direction:column;
`;

const MainText = styled.h1`
    font-size: 25px;
    font-family: GilroyLight;
    color: white;
    ${mobile({ fontSize: "20px" })}
`;

const SimpleText = styled.p`
    color: #b8b8b8;
    font-size: 14px;
    font-family: GilroyLight;
    margin-top: 10px;
    ${mobile({ fontSize: "13px" })}

`;

const DontationBar = styled.div`
    margin-top:20px;
`;

const DatesDonation = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Date = styled.label` 
    color: white;
    font-family: GilroyLight;
    font-size: 14px;
    ${mobile({ fontSize: "12px" })}
`;

const PorgressBar = styled.div`
    position: relative;
    margin-top: 10px;
`;

const Bar = styled.div`
    position: relative;
    width: 100%;
    background-color: #18191ac7;
    height: 5px;
    border-radius: 10px;
`;

const Progress = styled.div`
    position: relative;
    width: 45%;
`;

const Collected = styled.span`
    font-family: GilroyLight; 
    position: absolute;
    right: 0;
    top: 0;
    margin-top: -14px;
    background-color: #e41e3f;
    z-index: 1;
    border: 3px solid #e41e3f;
    border-radius: 20px;
    color: white;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px; 
    ${mobile({ fontSize: "12px" })}
`;

const Movement = styled.div`
    background-color: #e41e3f;
    position: absolute;
    height: 5px;
    width: 100%;
    top: 0%;
    left: 0;
    border-radius: 10px;
`;

const DontationInfo = () => {
  return ( 
    <Container>
        <Wrapper>
            <Main>
                <Donation>
                    <Texts>
                        <MainText>Заедно да усреќиме</MainText>
                        <SimpleText><b>The Ristow Eats</b> на секоја 10 нарачка одвојува 100 денари за донации. Месечно се собираат пари за донации со секоја 10-та нарачка.</SimpleText>
                    </Texts>
                    <DontationBar>
                        <DatesDonation>
                            <Date>01/24/2022</Date>
                            <Date>02/24/2022</Date>
                        </DatesDonation>
                        <PorgressBar>
                            <Bar>
                                <Progress>
                                    <Collected>100,400 ден.</Collected>
                                    <Movement></Movement>
                                </Progress>
                            </Bar>
                        </PorgressBar>  
                    </DontationBar>
                </Donation>
            </Main>
        </Wrapper>
    </Container>
  );
};

export default DontationInfo;
