import React from 'react';

import styled from 'styled-components'

export const ContactUs = () => {
  return (
    <Wrapper>
    <div>
      <div className="contact_us_green">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
              <form className="form-box">
                <div className="container-block form-wrapper">
                  <div className="head-text-box">
                    <p className="text-blk contactus-head">
                      Contact us
                    </p>
                    <p className="text-blk contactus-subhead">
                      New Jersey Unisex Salon
                    </p>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7464931181853!2d72.93279037483741!3d22.551167233756424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4ff3c556af0d%3A0xe1c3c55b598e6c71!2sNew%20Jersey%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1690886696665!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: '0' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                      <p className="text-blk input-title">
                        FIRST NAME
                      </p>
                      <input className="input" id="ijowk-6" name="FirstName" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        LAST NAME
                      </p>
                      <input className="input" id="indfi-4" name="Last Name" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        EMAIL
                      </p>
                      <input className="input" id="ipmgh-6" name="Email" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        PHONE NUMBER
                      </p>
                      <input className="input" id="imgis-5" name="PhoneNumber" />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                      <p className="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </p>
                      <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <button className="submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper =styled.div`
/* ContactUs Component CSS */
.contact_us_green {
    background-color: #e8f7f3;
    padding: 40px 0;
  }
  
  .responsive-container-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .big-container {
    max-width: 1140px;
    margin: 0 auto;
  }
  
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  .form-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .head-text-box {
    text-align: center;
  }
  
  .contactus-head {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .contactus-subhead {
    font-size: 16px;
    margin: 5px 0;
  }
  
  .input-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  
  .input,
  .textinput {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .submit-btn {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #45a049;
  }
  
  /* Mobile Styles */
  @media (max-width: 767px) {
    .responsive-cell-block {
      width: 100%;
    }
  }
  
  /* Tablet Styles */
  @media (min-width: 768px) and (max-width: 991px) {
    .wk-tab-12 {
      width: 100%;
    }
    .wk-tab-6 {
      width: 50%;
    }
  }
  
  /* Desktop Styles */
  @media (min-width: 992px) {
    .wk-desk-12 {
      width: 100%;
    }
    .wk-desk-6 {
      width: 50%;
    }
  }
  
  /* iPad Pro Landscape Styles */
  @media (min-width: 1024px) and (max-width: 1365px) {
    .wk-ipadp-10 {
      width: 83.33%;
    }
    .wk-ipadp-6 {
      width: 50%;
    }
  }
  
  /* iPad Portrait Styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    .wk-ipadp-10 {
      width: 100%;
    }
    .wk-ipadp-6 {
      width: 50%;
    }
  }`
export default ContactUs;