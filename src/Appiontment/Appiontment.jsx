import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Appointment = () => {
  const [appiontment_name, setAppiontmentName] = useState('');
  const [appiontment_contact, setContact] = useState('');
  const [appiontment_date, setDate] = useState('');
  const [appiontment_time, setTime] = useState('');
  const [gender, setGender] = useState('');
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  // const [gender, setGender] = useState('Male');
  const [selectedSubService, setSelectedSubService] = useState('');
  const [subServices, setSubServices] = useState([]);
  // const [selectedService, setSelectedService ] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  

  useEffect(() => {
    fetchServices();
  }, [gender]);

  const fetchServices = async () => {
    if (gender) {
      try {
        console.log(`Fetching services with gender: ${gender}`);
        const response = await axios.get(`http://localhost:4000/services?gender=${gender}`);
        setServices(response.data.services);
      } catch (error) {
        console.log('Error fetching services:', error);
      }
    }
  };
  

  const collectData = async () => {
    const data = {
      appiontment_name,
      appiontment_contact,
      appiontment_date,
      appiontment_time,
      gender,
      services: selectedServices,
    };
  
    try {
      const response = await axios.post('http://localhost:4000/appointment', data, {
        headers: {
          'Content-Type': 'application/json', // Ensure correct content type
        },
      });
  
      if (response.status === 200) {
        console.log('Appointment booked successfully');
        resetForm();
      }
    } catch (error) {
      console.log('Error booking appointment', error);
    }
  };

const fetchSubServices = async () => {
  if (selectedService) {
    try {
      const encodedService = encodeURIComponent(selectedService);
      const url = `http://localhost:4000/services?gender=${gender}&service=${encodedService}`;

      const response = await axios.get(url);
      setSubServices(response.data.services);
    } catch (error) {
      console.log('Error fetching sub-services:', error);
    }
  }
};
  useEffect(() => {
    fetchSubServices();
  }, [selectedService, gender]);
  

  const resetForm = () => {
    setAppiontmentName('');
    setContact('');
    setDate('');
    setTime('');
    setGender('');
    setSelectedServices([]);
  };

  return (
    <Wrapper>
      <div className='body'>
        <div className='container'>
          <div className='card'>
            <div className='content'>
              <div className='wrapper'>
                <form>
                  <h1 style={{ fontSize: 32.5 }}>Appointment</h1>
                  <div className='input-box'>
                    <input
                      type='text'
                      value={appiontment_name}
                      onChange={(e) => setAppiontmentName(e.target.value)}
                      placeholder='Full Name'
                      required
                    />
                    <i className='bx bxs-user'></i>
                  </div>

                  <div className='input-box'>
                    <input
                      type='number'
                      value={appiontment_contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder='Mobile No'
                      required
                    />
                    <i className='bx bxs-phone'></i>
                  </div>

                  <div className='input-box'>
                    <input
                      type='date'
                      value={appiontment_date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder='Select Date'
                      required
                    />
                  </div>

                  <div className='input-box'>
                    <input
                      type='time'
                      value={appiontment_time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder='Select Time'
                      required
                    />
                  </div>

                  <div className='input-box'>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value=''>Select Gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      {/* <option value='Both'>Both</option> */}
                    </select>
                  </div>

                  <div className='input-box'>
                  <select
                    value={selectedServices} // Change this line to fix the issue
                    onChange={(e) => setSelectedServices([e.target.value])} // Wrap the value in an array
                  >
                    <option value=''>Select a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
            {/* <div className='input-box'>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value=''>Select a Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
      </div> */}
      {/* <div className='input-box'>
        <select
          value={selectedSubService}
          onChange={(e) => setSelectedSubService(e.target.value)}
        >
          <option value=''>Select a Sub-Service</option>
          {subServices.map((subService, index) => (
            <option key={index} value={subService}>
              {subService}
            </option>
          ))}
        </select>
      </div> */}

                     <input type="hidden" name="allselser[]" value={selectedServices} onSelect={(e)=>setSelectedServices(e.target.value)}/>
                  <div className='selected-services'>
                    <h6>Selected Services:</h6>
                    <ul>
                      {selectedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <NavLink to  = "/Login1">
                  <button type='button' onClick={collectData} className='sub'>
                    Book Appointment
                  </button>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap'); 
  
/* Your existing CSS styles here */

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('./images/salon.jpg') center/cover no-repeat;
  position: relative;

}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  margin: 20px;
  z-index: 1;
}

.card {
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
  backdrop-filter: blur(5px);
  margin-top: 43px;
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: #333;
}

.wrapper {
  width: 100%;
}

.input-box {
  width: 150%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 40px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  background-color: #fff;
  border: 2px solid black;
  margin-left:-50px;
}

.input-box input,
.input-box select {
  width: 100%;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #000;
  background: transparent;
}

.input-box i {
  padding: 10px;
  font-size: 1.2rem;
  color: #000;
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
      margin-left: 38px;
      margin-top: 1rem;
      margin-bottom: 11px
    }

#btn:hover {
  background-color: #555;
}

.cost {
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
}
.bxs-user:before {
  color: #000;
}
.sub {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
}

.sub:hover {
  background-color: #555;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    margin: 10px;
  }

  .card {
    max-width: 90%;
    margin: 10px auto;
    padding: 15px;
  }

  .input-box {
    border-radius: 20px;
  }

  h1 {
    font-size: 2.5vw;
  }

  .cost {
    font-size: 0.8rem;
  }
}



  `

  export default Appointment;
