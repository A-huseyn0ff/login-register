import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/context';



const Navbar = () => {
 const Navigate=useNavigate()
  const { user,setUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token'); 
      setUser(null); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <div>
      <Link to="/">Users</Link>
      {user ? (
        <>
          <Link to="/account">Account</Link>
         <button onClick={handleLogout}>Logout</button>

        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
