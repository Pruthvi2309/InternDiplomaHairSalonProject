import React, { useState } from 'react';
// import './login.css';
import styled from 'styled-components';


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
    console.log('Username:', username);
    console.log('Password:', password);
   
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-label {
  font-size: 16px;
  margin-bottom: 5px;
}

.login-input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
`

export default Login1;
