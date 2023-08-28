import React from 'react';
import './prot1.css';

const prot = () => {
  return (
    <div className="product-container">
      <img src="img/salon.jpg" alt="Awesome Product" className="product-image"/>
      <h1 className="product-title">Awesome Product</h1>
      <p className="product-description">
        product1
      </p>
      <p className="product-price">$49.99</p>
      <button className="product-button">Add to Cart</button>

    </div>
    
    
  );
};

export default prot;

