import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import axios from "axios"; 

export const login = async (dispatch, user, navigate) => {    
  dispatch(loginStart());
  console.log("HIIIIIIII");
  try {
      const res = await publicRequest.post("/auth/login", user); 
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate("/");
      dispatch(loginSuccess(JSON.stringify(res.data)));
  } catch (err) {
  console.log(err);
  dispatch(loginFailure()); 
  }
};

export const userCheck = async (userData, setUsername, setUser, setLoadingUserData) => {
    try {
      const res = await userRequest.post("http://apieats.theristow.com/api/auth/checktoken/");  
      console.log(res.data);
      const username = JSON.parse(userData).others.fullname;
      setUsername(username);
      setUser(userData);  
      setLoadingUserData(false);
    } catch (err) {
      localStorage.removeItem("user");
      setUser(null);  
      setLoadingUserData(false);
      setUsername(null);
    }
};


export const register = async (dispatch, user, navigate, setUser, setLoadingUserData, setEmailError, setRegisterLoading, setUsername) => {    
  // setLoadingUserData(true);
      // setLoadingUserData(true); 
  // dispatch(loginStart());
  // setRegisterLoading(true);
  try {
      const res = await publicRequest.post("/auth/register", user); 
      console.log(res.data);
      // setRegisterLoading(false);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate("/");
      setUser(res.data);
      setUsername(res.data.others.fullname);
      // setLoadingUserData(false);
      // localStorage.setItem('user', JSON.stringify(res.data));
      // navigate("/");
      // setUser(res.data);
      // setLoadingUserData(false);
      // return res.data.accessToken;
      // dispatch(loginSuccess(res));
  } catch (err) {
    if(err.response.data === "Email taken"){
      await setEmailError("Е-мајл адресата е зафатена");
    }
    setRegisterLoading(false);

    // dispatch(loginFailure()); 
    // setLoadingUserData(false);
  }
};


export const updateProfile = async (dispatch, userData, newFullname, newPhonenumber, newPassword, setUsername) => {    
  console.log(newFullname);
  console.log(newPhonenumber);
  console.log(newPassword);

  const TOKEN = JSON.parse(userData).accessToken;
  console.log(TOKEN);

  try {
      const userId = JSON.parse(userData).others._id;
      console.log(userId);
      const res = await axios.put(
        "http://apieats.theristow.com/api/user/"+userId,
        {newFullname, newPhonenumber, newPassword},
        {headers: { token: `Bearer ${TOKEN}` }},
      );
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(loginSuccess(JSON.stringify(res.data)));
      console.log(res);
      // setUsername(res.data.others.fullname);
  } catch (err) {  
    console.log(err);
  }
};


export const oldPasswordVerify = async (userData, setVerifiedPassword, oldPassword, setVerifyOldPassword) => {    
  const TOKEN = JSON.parse(userData).accessToken;
  console.log(TOKEN);
  try {
      setVerifiedPassword(true);
      const userId = JSON.parse(userData).others._id;
      console.log(userId);
      const res = await axios.post(
        "http://apieats.theristow.com/api/auth/passwordverify/"+userId,
        {oldPassword},
        {headers: { token: `Bearer ${TOKEN}` }},
      );  
      setVerifiedPassword(false);
      setVerifyOldPassword(false); 
  } catch (err) {
    console.log(err); 
    setVerifiedPassword(false);
  }
};

