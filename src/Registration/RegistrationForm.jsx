import React from 'react';
import './newreg.css'; // Replace "styles.css" with the correct path to your CSS file

const RegistrationForm = () => {
  return (
    <div className="container">
      <div className="title">User Registration</div>
      <div className="content">
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Contect Number</span>
              <input type="contect number" placeholder="Enter your contect number" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your password" required />
            </div>
            {/* Add more user details fields here */}
          </div>

          <div className="gender-details">
            <div className="gender-title">Gender</div>
            <div className="category">
              <label>
                <input type="radio" name="gender" id="dot-1" required />
                <span className="dot one"></span>
                Male
              </label>
              <label>
                <input type="radio" name="gender" id="dot-2" required />
                <span className="dot two"></span>
                Female
              </label>
              <label>
                <input type="radio" name="gender" id="dot-3" required />
                <span className="dot three"></span>
                Other
              </label>
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
