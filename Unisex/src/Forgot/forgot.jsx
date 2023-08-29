import React, { useState } from 'react';
import styled from 'styled-components'

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the submission and change the password.
    if (newPassword === confirmPassword) {
      // Passwords match, perform the password change logic here (e.g., API call).
      console.log('Password changed successfully for email:', email);
      setMessage('Password changed successfully!');
      // Optionally, you can redirect the user to a login page after successful password change.
      // window.location.href = '/login';
    } else {
      // Passwords do not match, show an error message.
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <Wrapper>
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p>Enter your email address and new password to reset your password.</p>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {message && <div className="message">{message}</div>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

.forgot-password-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  }
  
  h2 {
    text-align: center;
  }
  
  p {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .message {
    color: green;
    text-align: center;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  `
export default Forgot;
