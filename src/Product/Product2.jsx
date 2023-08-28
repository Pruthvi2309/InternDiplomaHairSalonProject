import React, { useState } from 'react';
import styled from 'styled-components';

const Product1 = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
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
      <h2 className='pro'>Product Two</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="images/salon.jpg" className="img" alt="" />
        </div>
        <div className="col-md-6">
          <h3>Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quia soluta officia enim, neque,
            repellat odit id eligendi beatae laudantium nam quae inventore non consequatur quaerat commodi sequi
            nisi alias.
          </p>
          <QuantitySelector>
            <label>Quantity</label>
            <button onClick={handleDecrement}>-</button>
            <div className="quantity-display">{quantity}</div>
            <button onClick={handleIncrement}>+</button>
          </QuantitySelector>
          <div className="button-group">
            {/* {!isAddedToCart ? (
              <button className="btn btn-success bttn" onClick={handleAddToCart}>
                <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            ) : (
              <button className="btn btn-success btn-disabled" disabled>
                <i className="fa-solid fa-check"></i> Added to Cart
              </button>
            )} */}
            <button className="btn btn-success butn">
              <i className="fa-solid fa-check"></i> Buy
            </button>
          </div>
          <div className="card-actions">
              <p className='p'>Rating</p>
              <div className="rating">
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
          </div>
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.pro{
  text-align:center;
  margin-bottom:30px;
  margin-top:10px;
}
  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    padding-top: 22px;
  }
  .button-group {
    display: block;
    margin-top:20px;
  }
  .butn{
    margin-left:10px;
  }
  .p{
    margin-top:10px;
  }
  .card-actions{
    display:block; 
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
    
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
    margin: 0 5px;
  }

  .quantity-display {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
  }
`;

export default Product1;
