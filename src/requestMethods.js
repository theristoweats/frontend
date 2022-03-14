import axios from "axios";

const BASE_URL = "http://apieats.theristow.com/api/";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGVlMjBiNzg5YjQ3MTI4YWU0Y2IxZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTI1Njc3MSwiZXhwIjoxNjQ1NTE1OTcxfQ.mhnJ2YG8JaSZNut9i2IqR9HroTPDaL0aijjK5VAu_ok";

const user = JSON.parse(localStorage.getItem("user")); 
const TOKEN = user?.accessToken;
 
console.log(TOKEN);
 

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
 