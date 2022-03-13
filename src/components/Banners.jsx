// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";  
 
const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-bottom:100px;
`;

const Wrapper = styled.div`
    width:93%;
`;

const BannerLeft = styled.img`
    width: 50%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-right:20px;
`;

const BannerRight = styled.img` 
    width: 50%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

const BannersLoad = styled.div`
    display:flex;
`;

const Banners = () => {
  return (  
      <Container>
          <Wrapper>
              <BannersLoad>
                <BannerLeft src="./images/firstbanner.png"></BannerLeft>
                <BannerRight src="./images/ordertrack.png"></BannerRight>
              </BannersLoad>
          </Wrapper>
      </Container>
  );
};



export default Banners;
