import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/context';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext)

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3169/users/login', {
        Username: username,
        password: password,
      });
      const token = response.data;
      localStorage.setItem('token', token);
      setUser(response.data)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <div>
      <div>
        <form>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;