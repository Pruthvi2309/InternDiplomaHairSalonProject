 import React from 'react'
// import './Services1.css'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header';

const Services = () => {
  return (
    
    <Wrapper>
      <Header/>
    <div>
      {/* --- */}
      <section id="service">
        <div className="service-box">
            <div className="single-service">
                <img src="./images/pic-1.jpg"/>
              <div className="overlay"></div>
                <div className="service-desc">
                  <h3>Male</h3>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                  <NavLink to ="/Male"className='btn'>View More</NavLink>
                </div>
              </div>
          </div>

          {/* -- */}

          <div className="service-box">
            <div className="single-service">
                <img src="./images/pic-2.jpg"/>
              <div className="overlay"></div>
                <div className="service-desc">
                  <h3>Female</h3>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis aliquid magni soluta ipsa perferendis illum labore quia sit veritatis!</p>
                  <NavLink to ="/Female" className='btn'>View More</NavLink>
                </div>
              </div>
          </div>
      </section>
      {/* -- */}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
}

#service{
	margin-top: 10px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 5%;
}

.service-box{
    width: 80%;
    /* display: flex;
    flex-wrap: wrap;*/
    justify-content: space-around;
    margin: auto;
}

.single-service{
    flex-basis: 48%;
    text-align: center;
    border-radius: 7px;
    margin-bottom: 20px;
    color: #fff;
    position: relative;
}

.single-service img{
    width: 100%;
    border-radius: 7px;
}

.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 7px;
    cursor: pointer;
    background: linear-gradient(rgba(0,0,0,0.5),#663300);
    opacity: 0;
    transition: 1s;
}

.single-service:hover .overlay{
    opacity: 1;
}

.service-desc{
    width: 80%;
    position: absolute;
    bottom: 0;
	/* top: 20%; */
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: 1s;
}

.service-desc h3{
	font-size: 28px;
}

hr{
    background: #fff;
    height: 2px;
    border: 0;
    margin: 15px auto;
    width: 60%;
}

.service-desc p{
    font-size: 14px;
}

.single-service:hover .service-desc{
    bottom: 40%;
    opacity: 1;
}

.btn{
	padding: 4px 16px;
	margin-top: 8px;
	border: 2px solid #fff;
	background-color: #663300;
	box-shadow: 0 10px 20px -5px #00000070;
	color: #fff;
	border-radius: 50px;
}`

export default Services
