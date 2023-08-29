import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Appiontment1 = () => {
  return (
    <Wrapper>
      <Header/>   
      <div className='body'>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="wrapper">
                <form action="">
                  <h1 style={{ fontSize: 32.5 }}>Appointment</h1>
                  <div className="input-box" id='input-box'>
                    <input type="text" placeholder="Full Name" required />
                    <i className='bx bxs-user'></i>
                  </div>

                  <div className="input-box" id='input-box'>
                    <input type="text" placeholder="Mobile No" required />
                    <i className='bx bxs-phone'></i>
                  </div>

                  <div className="input-box" id="date-time">
                    <input type="date" placeholder="Select Date" required />
                  </div>

                  <div className="input-box" id="date-time">
                    <input type="time" placeholder="Select Time" required />
                  </div>

                  <div className="input-box" id="date-time">
                    <select name="gender" id="options">
                      <option value="Select Gender">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>

                  <div className="input-box" id="services">
                    <select name="services" id="options">
                      <option value="Select Service">Select Service</option>
                      <option value="Service 1">Service 1</option>
                      <option value="Service 2">Service 2</option>
                      <option value="Service 3">Service 3</option>
                    </select>
                  </div>
                  {/* <span className='cost'>
                    Total Cost : ₹ 500
                  </span> */}
                  <button type="submit" id="btn">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap'); 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('./images/salon.jpg') center/cover no-repeat;
  position: relative;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
}

body::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

body::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}



.container .card{
    position: relative;
    width: 500px;
    height: 100%;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    }
  
  h1{
    margin-left: -20px;
    font-weight: 400;
    color: #000;
    // padding: 10px;
    }
  
  .wrapper{
    width: 200px;
    background: transparent;
    color: #fff;
    border-radius: 40px;
    margin-left: 45px;
  }
  
  .wrapper .input-box{
    width: 100%;
    height: 30px;
    margin: 30px 0;
  }
  
  .input-box input{
    width: 180%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #fff;
    border-radius: 40px;
    font-size: 16px;
    color: #000;
    padding: 20px 45px 20px 20px;
    border: 2px solid black;
    margin-left: -100px;
  }
  
  .input-box input::placeholder{
    color: #000;
  }

  .input-box i{
    position: relative; 
    top: -95%;
    right: -194px;
    color: black;
    font-size: 20px;
  }
  
  .input-box #date-time{
    text-decoration: none;
    border: 2px solid blue;
  }
  
  .input-box #options{
    background-color: #fff;
    color: #000;
    margin-left: 55px;
    padding-bottom: -30px;
    padding: 3px 5px 3px 5px;
    text-decoration: none;
    border: none;
    border: 2px solid #000;
    border-radius: 45px;
    margin-left: 10px;
  }
  
  #btn{
    padding: 6px 20px;
    text-align: center;
    margin-left: 75px;
    border-radius: 50px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    border: 2px solid black;
    cursor: pointer;
    margin-left: 35px;
    margin-top: 2rem;
    margin-bottom: 10px;
  }

  .cost{
    color: #000;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .card {
      width: 90%;
      margin: 10px;
    }

    .input-box input,
    .input-box select {
      width: 100%;
      margin-left: 0;
    }
  }
  
  `

export default Appiontment1;