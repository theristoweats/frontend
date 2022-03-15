import RegisterMain from "../components/RegisterMain"; 
 

const Register = ({setUsername, user, setUser, setLoadingUserData}) => { 

  return ( 
      <>
        <RegisterMain setUsername={setUsername} setUser={setUser} user={user} setLoadingUserData={setLoadingUserData}/>
      </>
  );
};

export default Register;
