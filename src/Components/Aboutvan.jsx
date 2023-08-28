import React from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';

const Aboutus = () => {
  return (
    <div>
      <section className="section">
        <h1 className='heading'><u>About Us</u></h1>
        <div className='banner'>
          <img src="Images/logo.png" alt="Barber Image" className='img' />
          <h1 className='title'>New Jersey Unisex Salon</h1>
          <p>
            <i>
              Welcome to New Jersey, where beauty meets elegance and pampering is our expertise!
              {/* Rest of your content */}
            </i>
          </p>
        </div>
        
        {/* Carousel wrapper */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="Maria Kate"
            />
            {/* Rest of the slide content */}
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="John Doe"
            />
            {/* Rest of the slide content */}
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="Anna Deynah"
            />
            {/* Rest of the slide content */}
          </Carousel.Item>
        </Carousel>
        {/* End of Carousel wrapper */}
      </section>
    </div>
  );
};

export default Aboutus;
