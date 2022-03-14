import styled from "styled-components"; 
import "./buttonLoadingStyle/index.css";

const LoadPro = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const LoadingInButton = () => {
   
    //   console.log(cart2);
    
    //   console.log(cookies.userUUID);
    
      
      return (<> 
        <LoadPro>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </LoadPro>
      </>);
}
  
export default LoadingInButton;