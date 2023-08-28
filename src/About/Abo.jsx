import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Abo = () => {
  return (
    <Wrapper>
      <div className='bod'>
        <h1 className='hed'><u>About Us</u></h1>

        <div className="row">
          {/* Section left */}
          <div className="col-md-6">
            <img className='img1' src="images/NJ-Logo.png" alt="" />
            <div className="row">
            {/* <div className='col-md-3' id='loc-1'>
              <br/>
            <i className="fa-solid fa-location-dot"></i>1:
              Shop No. 1, Shakti Complex, Anand - Vidyanagar Rd, beside Apc, Ketivadi, Vallabh Vidyanagar, Anand, Gujarat 388001</div>
            <div className='col-md-3'>
            
            <i className="fa-solid fa-location-dot"></i>2:
              Shop No. 1, Shakti Complex, Anand - Vidyanagar Rd, beside Apc, Ketivadi, Vallabh Vidyanagar, Anand, Gujarat 388001
            </div> */}
            </div>
          </div>
          {/* section right */}
          <div className="col-md-6 text">
            <h5 className='pra'>Welcome to New Jersey, where beauty meets elegance and pampering is our expertise!</h5>

            <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 2500 }}
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="card-info">
                      <div className="card-avatar">
                      <img src="./images/NJ-Logo.png" alt="" />
                      </div>
                      <div className="card-title">Steve Jobs</div>
                      <div className="card-subtitle">CEO &amp; Co-Founder</div>
                    </div>
                    <ul className="card-social">
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                        </svg>
                      </li>
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                      </svg></li>
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-info">
                      <div className="card-avatar">
                        <img src="./images/NJ-Logo.png" alt="" />
                      </div>
                      <div className="card-title">Steve Jobs</div>
                      <div className="card-subtitle">CEO &amp; Co-Founder</div>
                    </div>
                    <ul className="card-social">
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                        </svg>
                      </li>
                      <li className="card-social__item">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                        </svg></li>
                        <li className="card-social__item">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                          </svg>
                        </li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-info">
                      <div className="card-avatar">
                      <img src="./images/NJ-Logo.png" alt="" />
                      </div>
                      <div className="card-title">Steve Jobs</div>
                      <div className="card-subtitle">CEO &amp; Co-Founder</div>
                    </div>
                    <ul className="card-social">
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                        </svg>
                      </li>
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                      </svg></li>
                      <li className="card-social__item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .bod{
  background: url('./images/salon.jpg') center/cover no-repeat;

  }
  .hed {
    text-align: center;
    margin-top: 10px;
    color: #33a1e4; /* Blue Color */
  }

  .text {
    margin-top: 100px;
    text-align: center;
  }

  .pra {
    margin-left: 15px;
    color: #333; /* Black Color */
  }

  .img1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 20px;
  }

  .p{
    display: block;
  width: 840px;
  height: 200px;
  margin: 10px;
  padding: 20px;
  }

  /* Swiper section */
  .slide {
    width: 100px;
    height: 100px;
    margin-top: 40px;
    border: 4px solid black;
    border-radius: 50%;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: none;

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    object-fit: cover;
    border-radius: 50%;
    width :25px; 
    height: 50%; 
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -4px;
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
  }

  / slider/
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 10%;
}
.card {
    width: 295px;
    height: 300px;
    background: #f5f5f5;
    padding: 2rem 1.5rem;
    transition: box-shadow .3s ease, transform .2s ease;
   }
   
   .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform .2s ease, opacity .2s ease;
   }
   
   /*Image*/
   .card-avatar img {
    --size: 60px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transition: transform .2s ease;
    margin-bottom: 1rem;
   }
   
   
   /*Card footer*/
   .card-social {
    transform: translateY(200%);
    display: flex;
    justify-content: space-around;
    width: 100%;
    opacity: 0;
    transition: transform .2s ease, opacity .2s ease;
    padding: 10px;
   }
   
   .card-social__item {
    list-style: none;
   }
   
   .card-social__item svg {
    display: block;
    height: 18px;
    width: 18px;
    fill: #515F65;
    cursor: pointer;
    transition: fill 0.2s ease ,transform 0.2s ease;
   }
   
   /*Text*/
   .card-title {
    color: #333;
    font-size: 1.5em;
    font-weight: 600;
    line-height: 2rem;
   }
   
   .card-subtitle {
    color: #859ba8;
    font-size: 0.8em;
   }
   
   /*Hover*/
   .card:hover {
    box-shadow: 0 8px 50px #23232333;
   }
   
   .card:hover .card-info {
    transform: translateY(-5%);
   }
   
   .card:hover .card-social {
    transform: translateY(100%);
    opacity: 1;
   }
   
   .card-social__item svg:hover {
    fill: #232323;
    transform: scale(1.1);
   }
   
   .card-avatar:hover {
    transform: scale(1.1);
   } 

   .reviewSwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .reviewSwiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .reviewSwiper-slide img {
    display: block;
    width: 10%;
  }

  .col-md-3{
    margin-left: 2rem;
    margin-top: 2.5rem;
    border-radius: 10px;
    width: 320px;
    height: 130px;
    display: flex;
    justify-content: space-between; 
    // align-items: center;
    
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    
  }

  .swiper-container {
    margin-top: 30px;
  }

`;

export default Abo;
