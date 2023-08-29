import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header';

const Cards = () => {
  const [product1Rating, setProduct1Rating] = useState(0);
  const [product2Rating, setProduct2Rating] = useState(0);

  const handleRatingChange = (productId, rating) => {
    if (productId === 1) {
      setProduct1Rating(rating);
    } else if (productId === 2) {
      setProduct2Rating(rating);
    }
  };

  return (
    <Wrapper>
      <Header/>
      <h1 className='pro'>Buy our Amazing product</h1>
      <div className="row row-cols-1 row-cols-md-2 g-2" id="size">
        <div className="col">
          <div className="card">
            <img src="images/wax.webp" className="card-img-top img" alt="..." />
            <div className="card-body">
              <div className="title">
                <h3 className="card-title">Hair wax</h3>
              </div>
              {/* <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={`product1-star-${index}`}
                    role="img"
                    aria-label="Rating"
                    onClick={() => handleRatingChange(1, index + 1)}
                  >
                    {index < product1Rating ? '⭐' : '☆'}
                  </span>
                ))}
              </div> */}
              <NavLink to = '/Product1'>
                <button className="btn btn-link">View More Details</button>
              </NavLink>
              <div className="button-group">
                {/* <button className="btn btn-primary"><i className="fa-solid fa-cart-plus"></i> Add to Cart</button> */}
                <button className="btn btn-success"><i className="fa-solid fa-check"></i> Buy</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/oil.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="title">
                <h5 className="card-title">Hair oil</h5>
              </div>
              {/* <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={`product2-star-${index}`}
                    role="img"
                    aria-label="Rating"
                    onClick={() => handleRatingChange(2, index + 1)}
                  >
                    {index < product2Rating ? '⭐' : '☆'}
                  </span>
                ))}
              </div> */}
              <NavLink to = '/Product2'>
                <button className="btn btn-link">View More Details</button>
              </NavLink>
              <div className="button-group">
                {/* <button className="btn btn-primary"><i className="fa-solid fa-cart-plus"></i> Add to Cart</button> */}
                <button className="btn btn-success"><i className="fa-solid fa-check"></i> Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  body {
    width: 95%;
    padding-left: 20px;
    flex-direction: column;
    padding-top: 30px;
  }
  .pro {
    text-align: center;
    padding-bottom: 40px;
    margin-top: 10px;
  }
  #size{
    width: 95%;
    padding-left: 50px;
  }
  // .card {
  //   border: 1px solid #ccc;
  //   border-radius: 8px;
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //   overflow: hidden;
  //   transition: box-shadow 0.3s ease;
  // }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  .card-body {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  .title {
    margin-bottom: 8px;
    margin-left: 1rem;
  }

  .rating {
    margin-bottom: 8px;
    margin-left: 11.5rem;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 8px;
  }
  

  .card-title {
    font-size: 20px;
    margin-bottom: 8px;
    text-align :center;
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .btn i {
    margin-right: 8px;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }

  .btn-success {
    background-color: #28a745;
    color: #fff;
  }


  .rating span {
    font-size: 24px;
    margin-right: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .rating span:hover {
    transform: scale(1.2);
  }

  .button-group {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 8px;
    margin-right: 13px;
  }

  .button-group .btn {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    .row-cols-md-2 .col {
      flex: 0 0 50%;
      max-width: 50%;
    }
  
    .card-body {
      grid-template-columns: repeat 1fr;
    }
  
    /* Adjust font size and margin for centered elements */
    .card-title,
    .btn,
    {
      text-align: center;
      margin-right:10px;
    }
    .rating {
      margin-bottom: 8px;
      margin-left: 11.5rem;
    }

    .button-group {
      display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 8px;
    margin-right: 13px;
    }
  }
`;

export default Cards;