import axios from "axios";
import { userRequest } from "../requestMethods";

export const loadAddresses = async (userData, setLoadingAddresses, setAddresses) => {
  
  // const user = JSON.parse(localStorage.getItem("user")); 
  const TOKEN = JSON.parse(userData).accessToken;
  console.log(TOKEN);

  setLoadingAddresses(true);  
  try { 
      const res = await axios.get("http://apieats.theristow.com/api/addresses/"+JSON.parse(userData).others._id,
      {headers: { token: `Bearer ${TOKEN}` }},
      );
      setLoadingAddresses(false);  
      setAddresses(res.data);
  } catch (err) { 
      setLoadingAddresses(false);  
    }
};

export const addAddress = async (userData, setAddNewAddress, lat, lng, name, addressShortName, addressDescription, setNewAddress, setDeliveryAddress) => {  
  setNewAddress(true); 
  const TOKEN = JSON.parse(userData).accessToken;
   
  try { 
      const userId = JSON.parse(userData).others._id;
      const res = await axios.post(
        "http://apieats.theristow.com/api/addresses/", {userId, lat, lng, name, addressShortName, addressDescription },
        {headers: { token: `Bearer ${TOKEN}` }},
      ); 
      setNewAddress(false);  

      setAddNewAddress(false); 
      setDeliveryAddress(false); 

  } catch (err) {  
      setNewAddress(false); 
      setAddNewAddress(false);
  }
};

export const deleteAddress = async (userData, addressId, setNewAddress, setAddressDeleteId) => {

    setAddressDeleteId(null);
    // setNewAddress(true); 
    const userId = JSON.parse(userData).others._id;
    try {
      const { data } = await axios.delete(
        `http://apieats.theristow.com/api/addresses/${userId}/${addressId}`
      ); 
      setNewAddress(true);
      setNewAddress(false);
      // console.log(itemId);
      // console.log("fetch");
      // dispatch({ type: CART_LIST_SUCCESS, payload: data });
    } catch (error) {
      // dispatch({ type: CART_LIST_FAIL, payload: error.message });
    }
};
export const editAddress = async (userData, setAddNewAddress, lat, lng, name, addressShortName, addressDescription, setNewAddress, addressID, setAddressEdit) => {  
  // setNewAddress(true); 
  console.log("ZOSTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"+lat,lng,name,addressShortName, addressDescription, addressID)
   
  try { 
      const TOKEN = JSON.parse(userData).accessToken;
      const userId = JSON.parse(userData).others._id;

      const res = await axios.put(
        "http://apieats.theristow.com/api/addresses/", {userId, lat, lng, name, addressShortName, addressDescription, addressID },
        {headers: { token: `Bearer ${TOKEN}` }},
      ); 
      setNewAddress(true); 

      setAddressEdit(false);
      setNewAddress(false);  

      // setAddNewAddress(false); 
  } catch (err) {  
      // setNewAddress(false); 
      // setAddNewAddress(false);  
  }
};

