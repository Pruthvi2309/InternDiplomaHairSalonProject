import React, { useState } from 'react';
import './login.css';

const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add further logic like sending a request to the backend for authentication.
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="login-label">Username:</label>
        <input
          type="text"
          id="username"
          className="login-input"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password" className="login-label">Password:</label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="login-button">LOGIN</button>
      </form>
    </div>
  );
};

export default Login1;
