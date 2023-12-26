import React, { useState } from 'react';
import './signup.scss';
import axios from 'axios';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3169/users/user', {
        Username: username,
        password: password,
      });

      
      console.log(response.data);
    } catch (error) {
      
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <form>
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
