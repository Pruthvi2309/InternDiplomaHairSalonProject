import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Header from '../Header/Header';

const Abo = () => {
  return (
    <Wrapper>
      <Header/>
      <div>

        <h1 className='hed'><u>About Us</u></h1>

        <div className="row">
          {/* Section left */}
          <div className="col-md-6">
            <img className='img1' src="images/salon.jpg" alt="" />
          </div>
          {/* section right */}
          <div className="col-md-6 text">
            <p>Welcome to New Jersey, where beauty meets elegance and pampering is our expertise!</p>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                //   disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="Slide 1" className='slide' />
                <h4 className='text-1'>Content for Slide 1</h4>
                <p>Best service. A stop for all your beauty concerns from hair to pedicure. Amazing staff, very homely. You will keep coming back. :) Perks- A lovely cat- Leo to keep you entertained the whole time. Ask for Tejal for a skilled facial treatment - you will not be disappointed.</p>

              </SwiperSlide>
              <SwiperSlide>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="Slide 1" className='slide' />
                <h4 className='text-1'>John Doe</h4>
                <p>Best salon provided the best hair cutting experience! The luxury ambiance and talented stylist.
                  Highly recommend!</p>

              </SwiperSlide>
              <SwiperSlide>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="Slide 1" className='slide' />
                <h4 className='text-1'>John Doe</h4>
                <p>Very good haircut overall I’m from the USA so I’m am used to getting cuts with the same barber and didn’t expect india to cut my hair the right way but New Jersey changed my opinion. Probably one of the best haircut experiences ever.</p>

              </SwiperSlide>
            </Swiper>
          </div>
        </div>



      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.hed{
    text-align:center;
    margin-top:10px;
}
.text{
    margin-top:100px;
}

.img1{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top:100px;
}


// Swiper section
.slide{
    width:100px;
    height:100px;
    margin-top: 40px;
    border: 4px solid black;
    border-radius: 50%;
}
5
.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    // display: block;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
    bottom:-4px;
    top:var(--swiper-pagination-top, auto);
    left:0;
    width:100%;
  }
  `;
export default Abo;
