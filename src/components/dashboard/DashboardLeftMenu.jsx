import styled from "styled-components"; 
import { Link } from 'react-router-dom';
import DashboradIcon from "../../icons/dashboard.png";
import OrdersIcon from "../../icons/shopping-bag-delivered.png";
import AddressIcon from "../../icons/address.png";
import SavedMealsIcon from "../../icons/heart-full-white.png";
import MyNetworkIcon from "../../icons/my-network-white.png";
import ProfileIcon from "../../icons/user-white.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/userRedux";
import { mobile, desktop1, desktop, desktop2, desktop3, mobile1, mobile3, mobile4  } from "../../responsive";
import "./style.css";

// width: 100%;
// background-color: #242526;
// height: 50px;
// /* padding-top: 100px; */
// position: fixed;
// z-index: 3;
// position: bo;
// position: bottom;
// border-top: 1px solid #393a3b;
// bottom: 0;
// margin-top: 94px;

const LeftMenuMain = styled.div`
    width: 250px;
    background-color: #242526;
    height: 100vh; 
    border-right: 1px solid #393a3b;
    padding-top: 100px;
    position: fixed; 

    ${mobile3({ bottom: "0", 
                borderTop:"1px solid #393a3b", 
                borderRight:"none", 
                zIndex:"3", 
                position:"fixed", 
                width:"100%",
                height:"50px",
                paddingTop:"0px"
            
            })}


`;

const Links = styled.div`
    margin-top: 50px;
    ${mobile3({ marginTop: "0px", display:"flex" })}
`;

const SingleLink = styled.div`
    margin-bottom: 15px;
    margin-right: -1px;
    ${mobile3({ width: "100%", padding:"0px", display:"flex", justifyContent:"center", alignItems:"center" })}
`;

const LinkInside = styled.div`
    display: flex;
    padding: 40px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    ${mobile3({ width: "100%", padding:"0px", display:"flex", justifyContent:"center", alignItems:"center", height:"50px" })}
`;

const TextLink = styled.span`
    color: white;
    font-size: 14px;
    font-family:GilroyLight;
    
    ${mobile3({ display: "none" })}
`;

const LinkIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    ${mobile3({ marginRight: "0px" })}
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


const DashboardLeftMenu = ({setUsername, page, setUser, setLoadingUserData}) =>{

    const [LogoutModal, setLogOutModal] = useState(false);
    const dispatch = useDispatch();

    const logoutHandle = (e) =>{
        setLogOutModal(true);

    };
 
    const handleCancel = (e) => {
        e.preventDefault();
        setLogOutModal(false);
    };

    const handleLogoutYes = (e) =>{
        e.preventDefault();
        dispatch(logOut());
        
        localStorage.removeItem("user");
        setLoadingUserData(false);
        // dispatch(loginStart());
    };

    return(
        <>
            <LeftMenuMain>
                <Links>
                    <SingleLink className={page === "dashboard" ? "targetcho" : ""}>
                        <Link to="/dashboard" style={{textDecoration:"none"}} className="m-2-mmm2-">
                            <LinkInside>
                                <LinkIcon src={DashboradIcon} />
                                <TextLink>???????????????????? ??????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                    <SingleLink className={page === "orders" || page ==="orders_order" ? "targetcho" : ""}>
                        <Link to="/dashboard/orders" style={{textDecoration:"none"}} className="m-2-mmm2-">
                            <LinkInside>
                                <LinkIcon src={OrdersIcon} />
                                <TextLink>?????? ??????????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                    <SingleLink className={page === "addresses" ? "targetcho" : ""}>
                        <Link to="/dashboard/addresses" style={{textDecoration:"none"}} className="m-2-mmm2-">
                            <LinkInside>
                                <LinkIcon src={AddressIcon} />
                                <TextLink>?????? ????????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                    {/* <SingleLink className={page === "favorite" ? "targetcho" : ""}>
                        <Link to="/dashboard/favorite" style={{textDecoration:"none"}}>
                            <LinkInside>
                                <LinkIcon src={SavedMealsIcon} />
                                <TextLink>?????????????? ??????????????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                    <SingleLink className={page === "my-network" ? "targetcho" : ""}>
                        <Link to="/dashboard/my-network" style={{textDecoration:"none"}}>
                            <LinkInside>
                                <LinkIcon src={MyNetworkIcon} />
                                <TextLink>???????? ??????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink> */}
                    <SingleLink className={page === "profile" ? "targetcho" : ""} >
                        <Link to="/dashboard/profile" style={{textDecoration:"none"}} className="m-2-mmm2-">
                            <LinkInside>
                                <LinkIcon src={ProfileIcon} />
                                <TextLink>?????? ????????????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                    <br />
                    <SingleLink className="m---mobile">
                        <Link to="#" style={{textDecoration:"none"}} onClick={(e)=>{logoutHandle(e)}} className="m-2-mmm2-">
                            <LinkInside>
                                {/* <LinkIcon src={ProfileIcon} /> */}
                                <TextLink>???????????? ????</TextLink>
                            </LinkInside>
                        </Link>
                    </SingleLink>
                
                </Links>

            </LeftMenuMain>


            {LogoutModal && ( 
                <>   
                    <Modal>
                        <InsideModalAsk>
                            <InsideModalAskPro>
                                <MainTextModal>??????????????????! ???? ???? ????????????????.</MainTextModal>
                                <SecoundText>???????? ?????? ?????????????? ???????? ???????????? ???? ???? ???????????????? ???? ???????????? ?????????????</SecoundText>   
                                <ButtonsLoadHere>
                                    <SingleButton>
                                        <ButtonLink href="#" onClick={(e)=>{handleLogoutYes(e)}}>
                                            <SingleButtonInside>
                                                <TextMainY>???????????? ????</TextMainY>
                                            </SingleButtonInside>
                                        </ButtonLink>
                                    </SingleButton>
                                    <SingleButton>
                                        <ButtonLink href="#" onClick={(e)=>{handleCancel(e)}}>
                                            <SingleButtonInside>
                                                <TextMainY>????????????</TextMainY>
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
};

export default DashboardLeftMenu;