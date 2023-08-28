import React, { useState } from 'react';

const Register = () => {
  const [username, setName] = useState('');
  const [useremail, setemail] = useState('');
  const [usercontact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:4000/Register', {
      method: 'post',
      body: JSON.stringify({ username, useremail, usercontact, gender, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(result);
  };

  const containerStyle = {
    maxWidth: '700px',
    width: '100%',
    backgroundColor: 'transparent',
    padding: '25px 30px',
    borderRadius: '5px',
    boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
    background: 'rgba(255, 255, 255, 0.5)',
    height: '100%', 
  };
  

  const titleStyle = {
    fontSize: '25px',
    fontWeight: '500',
    position: 'relative',
  };
  const bodyStyle = {
    // Define the styles for the section element
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '10px',
    backgroundImage: "url('./images/salon.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  const titleBeforeStyle = {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '3px',
    width: '30px',
    borderRadius: '5px',
    background: 'linear-gradient(135deg, #71b7e6, #9b59b6)',
  };

  const userDetailsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px 0 12px 0',
  };

  const inputBoxStyle = {
    marginBottom: '15px',
    width: 'calc(100% /  1 - 10px)',
  };

  const inputBoxDetailsStyle = {
    display: 'block',
    fontWeight: '500',
    marginBottom: '5px',
  };

  const inputStyle = {
    height: '45px',
    width: '100%',
    outline: 'none',
    fontSize: '16px',
    borderRadius: '5px',
    paddingLeft: '15px',
    border: '1px solid #ccc',
    borderBottomWidth: '2px',
    transition: 'all 0.3s ease',
  };

  const inputFocusStyle = {
    borderColor: '#9b59b6',
  };

  const genderTitleStyle = {
    fontSize: '20px',
    fontWeight: '500',
  };

  const categoryStyle = {
    display: 'flex',
    width: '80%',
    margin: '14px 0',
    justifyContent: 'space-between',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const dotStyle = {
    height: '18px',
    width: '18px',
    borderRadius: '50%',
    marginRight: '10px',
    background: '#d9d9d9',
    border: '5px solid transparent',
    transition: 'all 0.3s ease',
  };

  const dotCheckedStyle = {
    background: '#9b59b6',
    borderColor: '#d9d9d9',
  };

  const buttonStyle = {
    height: '45px',
    margin: '35px 0',
  };

  const buttonInputStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, #71b7e6, #9b59b6)',
    marginTop: '-22px',
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(-135deg, #71b7e6, #9b59b6)',
  };

  return (
    <section style={bodyStyle}>
      <div style={containerStyle}>
        <div style={titleStyle}>User Registration</div>
        <div className="content">
          <form>
            <div style={userDetailsStyle}>
              <div style={inputBoxStyle}>
                <span style={inputBoxDetailsStyle}>Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={username}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={inputBoxStyle}>
                <span style={inputBoxDetailsStyle}>Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)}
                  value={useremail}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={inputBoxStyle}>
                <span style={inputBoxDetailsStyle}>Contact Number</span>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  onChange={(e) => setContact(e.target.value)}
                  value={usercontact}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={inputBoxStyle}>
                <span style={inputBoxDetailsStyle}>Password</span>
                <input
                  type="Password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <div style={genderTitleStyle}>Gender</div>
              <div style={categoryStyle}>
                <label style={labelStyle}>
                <input
                  type="radio"
                  name="gender"
                  value="Male" // Set the value to the desired gender
                  onChange={(e) => setGender(e.target.value)}
                  required
                  style={inputStyle}
                /> 
                  Male
                </label>
                <label style={labelStyle}>
                <input
                  type="radio"
                  name="gender"
                  value="Female" // Set the value to the desired gender
                  onChange={(e) => setGender(e.target.value)}
                  required
                  style={inputStyle}
                />
                  
                  Female
                </label>
                <label style={labelStyle}>
                <input
                    type="radio"
                    name="gender"
                    value="Other" // Set the value to the desired gender
                    onChange={(e) => setGender(e.target.value)}
                    required
                    style={inputStyle}
                  />
                  Other
                </label>
              </div>
            </div>

            <div style={buttonStyle}>
              <input
                type="submit"
                value="Register"
                onClick={collectData}
                style={{ ...buttonInputStyle, ...(buttonHoverStyle) }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
