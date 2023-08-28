import React, { useState, useEffect } from 'react';
import './Van.css';

const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    review: 'Great product! I love it.',
  },
  {
    id: 2,
    author: 'Jane Smith',
    review: 'Excellent service and fast shipping.',
  },
 
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="reviews-carousel">
      <button className="prev-button" onClick={handlePrevClick}>
      <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="review">
        <p>{reviewsData[currentIndex].review}</p>
        <p>- {reviewsData[currentIndex].author}</p>
      </div>
      <button className="next-button" onClick={handleNextClick}>
      <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ReviewsCarousel;
