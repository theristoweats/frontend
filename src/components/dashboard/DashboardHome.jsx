import styled from "styled-components"; 
import DashboardIcon from "../../icons/dashboard.png";
import ShoppingBag from "../../icons/shopping-bag-delivered.png";
import DollarIcon from "../../icons/dollar.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDashboardStatistic } from "../../actions/ordersActions";
import { mobile, desktop1, desktop, desktop2, desktop3, mobile1, mobile3, mobile4  } from "../../responsive";

const MainWrapper = styled.div`
`;

const InsideWrapper = styled.div`
    margin-top: 100px;
    padding: 45px;
    ${mobile3({ padding: "5%" })}

`;

const MainPageInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextPageInfo = styled.div`
    display: flex;
    align-items: center;
`;

const MainTextPageInfo = styled.h1`
    font-family:GilroyLight;
    color: white;
    font-size: 30px;
    ${mobile3({ fontSize: "20px" })}
`;

const IconBoxPageInfo = styled.div`
    margin-left: 15px;
    background-color: #e41e3f;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const IconPageInfo = styled.img`
    width: 20px;
    height: 20px;
`;

const DashboardStatisticBoxes = styled.div`
    margin-top: 30px;
    display: flex;
`;

const SingleBoxStatistics = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #242526;
    margin-right: 10px;
`;

const BoxInsideStatisitc = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
`;

const IconBoxStatistic = styled.div`
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 50%;
`;

const IconStatistic = styled.img`
    width: 24px;
    height: 24px;
`;

const CountStatisticHere = styled.div`
    display: flex;
    flex-direction: column;  
    flex: 1;
    margin-top: 15px;
`;

const StatisticNumber = styled.span`
    color: white;
    font-weight: bold;
    font-size: 35px;
    font-family:GilroyLight;
    ${mobile3({ fontSize: "20px" })}
`;


const StatisticText = styled.span`
    font-size: 15px;
    color: #acacac;
    margin-top: 5px;
    font-family:GilroyLight;
    ${mobile3({ fontSize: "14px" })}
`;

// donation info


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Wrapper = styled.div`
    width:100%;
`;

const Main = styled.div`
    background-color: #242526;
    width: 100%;
    height: 190px;
    border-radius: 10px;  
    ${mobile3({ height: "auto" })}
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
    ${mobile3({ fontSize: "20px" })}
`;

const SimpleText = styled.p`
    color: #b8b8b8;
    font-size: 14px;
    font-family: GilroyLight;
    margin-top: 10px;
    ${mobile3({ fontSize: "14px" })}
`;

const DontationBar = styled.div`
    margin-top:20px;
`;

const DatesDonation = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    ${mobile3({ marginBottom: "30px" })}
`;

const Date = styled.label` 
    color: white;
    font-size: 14px;
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


const DashboardHome = () =>{


    const [dashboardData, setDashboardData] = useState();
    const [fetching, fetchingStart] = useState();

    const navigate = useNavigate(); 
    const dispach = useDispatch();
    const userData = localStorage.getItem("user"); 
    
    useEffect(() => { 
        dispach(getDashboardStatistic(userData, navigate, fetchingStart, setDashboardData));          
    }, []);

    console.log(dashboardData);


    return(
    <> 
        <MainWrapper>
            <InsideWrapper>

                <MainPageInfo>

                    <TextPageInfo>
                        <MainTextPageInfo>Кориснички панел</MainTextPageInfo>
                        <IconBoxPageInfo>
                            <IconPageInfo src={DashboardIcon}/>
                        </IconBoxPageInfo>
                    </TextPageInfo>

                </MainPageInfo>

                <DashboardStatisticBoxes>

                    <SingleBoxStatistics style={{borderTop:"5px solid #e41e3f"}}>
                        <BoxInsideStatisitc>
                            <IconBoxStatistic style={{backgroundColor:"#e41e3f"}}>
                                <IconStatistic src={ShoppingBag}/>
                            </IconBoxStatistic>
                            <CountStatisticHere>
                                <StatisticNumber>{fetching ? (<>...</>) : dashboardData ? dashboardData.orders : "0"}</StatisticNumber>
                                <StatisticText>Нарачки</StatisticText>
                            </CountStatisticHere>
                        </BoxInsideStatisitc>
                    </SingleBoxStatistics>

                    
                    <SingleBoxStatistics style={{borderTop:"5px solid #f58b27"}}>
                        <BoxInsideStatisitc>
                            <IconBoxStatistic style={{backgroundColor:"#f58b27"}}>
                                <IconStatistic src={DollarIcon}/>
                            </IconBoxStatistic>
                            <CountStatisticHere>
                                <StatisticNumber>{fetching ? (<>...</>) : dashboardData ? dashboardData.spend : "0"} ден.</StatisticNumber>
                                <StatisticText>Сте потрошиле</StatisticText>
                            </CountStatisticHere>
                        </BoxInsideStatisitc>
                    </SingleBoxStatistics>
 

                </DashboardStatisticBoxes>

                <Container>
                    <Wrapper>
                        <Main>
                            <Donation>
                                <Texts>
                                    <MainText>Заедно да усреќиме</MainText>
                                    <SimpleText><b>The Ristow Eats</b> на секоја 10 нарачка донира 100 денари.</SimpleText>
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
            </InsideWrapper>
        </MainWrapper>
    </>
    )
};

export default DashboardHome;