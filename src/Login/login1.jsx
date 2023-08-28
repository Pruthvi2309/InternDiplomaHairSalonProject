import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const collectData = async () => {
    let result = await fetch('http://localhost:4000/login1', {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // alert`login succesful`;
    console.log(result); 
    if (result.status === 200) {
      // Login successful
      console.log('Login Successful');
      alert('Login Successful');
    } else {
      // Login failed
      console.log('Error');
      alert('Login Failed');
    }
  
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: "url('./images/salon.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    maxWidth: '350px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '25px 30px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  };

  const labelStyle = {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#555',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const forgotPasswordStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#007bff',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle} className="login-container">
      <form onSubmit={collectData} style={formStyle} className="login-form">
        <h1 style={titleStyle} className="login-title">
          LOGIN
        </h1>
        <label style={labelStyle} className="login-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          style={inputStyle}
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={labelStyle} className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          style={inputStyle}
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <p style={forgotPasswordStyle}>
          <NavLink to="/Forgot">Forgot Password?</NavLink>
        </p>
        <div style={buttonContainerStyle}>
          <button
            type="submit"
            style={{ ...buttonStyle, ...(buttonHoverStyle) }}
            className="login-button"
          >
            LOGIN
          </button>
        </div>
        <p>Don't have an account? <NavLink to="/Register">Register here</NavLink></p>
      </form>
    </div>
  );
};

export default Login1;
