import React from 'react';
import './Product1.css';

const ProductPage = () => {
  // Dummy product data (you can fetch this from an API in a real application)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '$50',
      imageUrl: 'https://th.bing.com/th/id/OIP.Sk-R7M0EQY6u3okLR0aliAHaEe?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '$70',
      imageUrl: 'https://th.bing.com/th/id/OIP._KUcko8z5oOUhpA_8ZrLYgHaHf?w=152&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', // Replace with actual image URLs
    },
    // Add more products here if needed
  ];

  return (
    <div className="product-page">
      <h1>Salon Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
