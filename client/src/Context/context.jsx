import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):null)
  const data = { user, password,token, setPassword, setUser,setToken };
useEffect(()=>{
localStorage.setItem('token',JSON.stringify(token))
try{
  const decoded=jwtDecode(token)
setUser(decoded)
}
catch(error){
  console.log(error);
}
},[token])

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
