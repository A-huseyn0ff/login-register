import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/context';


const Navbar = () => {
  
  const { user } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      
      await axios.delete('http://localhost:3169/users/login');
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
         <button onClick={ handleLogout}>Logout</button>

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
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../Context/context';
// import axios from 'axios';

// const Navbar = () => {
//   const { user, setUser } = useContext(UserContext);

//   const handleLogout = async () => {
//     try {
      
//       await axios.delete('http://localhost:3169/users/login');
//       localStorage.removeItem('token'); 
//       setUser(null); 
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <div>
//       <Link to="/">Users</Link>
//       {user ? (
//         <>
//           <Link to="/account">Account</Link>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <>
//           <Link to="/login">Login</Link>
//           <Link to="/signup">SignUp</Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;