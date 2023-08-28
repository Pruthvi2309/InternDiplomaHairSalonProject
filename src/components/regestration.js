import React, {useState} from 'react';
import './react.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>   
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="Number">
                  <label className="form__label" for="PhoneNumber">Phone Number</label>
                  <input  type="Number" id="Num" className="form__input" placeholder="Phone Number"/>
              </div>
              <div className="User Name">
                  <label className="form__label" for="UserName">Username</label>
                  <input  type="text" id = "UR" className="form__input" placeholder="Username"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Submit</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;