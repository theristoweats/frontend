
import styled from "styled-components"; 

const MainLoadingScreen = styled.div`

    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#e41e3f;
`;

const LoadingScreen = () => {
   
    //   console.log(cart2);
    
    //   console.log(cookies.userUUID);
    
      
      return (<>
        <MainLoadingScreen>

            <h1 style={{color:"white", fontFamily:"GilroyLight", fontSize:"35px"}}>The Ristow Eats</h1>

        </MainLoadingScreen>
        
      </>);
}
  
export default LoadingScreen;