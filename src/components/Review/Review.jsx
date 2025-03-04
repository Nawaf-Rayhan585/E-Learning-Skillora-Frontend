import React, { useState } from 'react';
import './Review.css'


const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "This product is amazing! I highly recommend it to everyone.",
      stars: 5,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg", // Placeholder image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Great quality and excellent customer service.",
      stars: 4,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      review: "Absolutely love it! Worth every penny.",
      stars: 5,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      review: "Good product, but delivery took longer than expected.",
      stars: 4,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg",
    },
    {
      id: 5,
      name: "Charlie Davis",
      review: "Fantastic experience! Will buy again.",
      stars: 5,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg",
    },
    {
      id: 6,
      name: "Eva Wilson",
      review: "The product is okay, but could be better.",
      stars: 4,
      image: "https://i.pinimg.com/474x/50/42/90/504290aa11c08e6aa19831be382c8de2.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const renderStars = (stars) => {
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
  <>
  
    <div className="review-container-main">
    <h1 className='text-center title-popular'>Reviews</h1>
    <p className='text-center'>What <span className='highlight'>People Say About Us</span></p>
    <div className="review-container">
      <div className="review-content">
        <div className="slider-wrapper">
          <div className="slider-container">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="slide">
                  <div className="review-card">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="profile-pic"
                    />
                    <h3 className="reviewer-name">{review.name}</h3>
                    <div className="stars">{renderStars(review.stars)}</div>
                    <p className="review-text">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="controls">
              <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
              <button className="next-btn" onClick={nextSlide}>&#10095;</button>
            </div>
          </div>
        </div>
        <div className="review-aspects">
          <h3>Review of different aspects</h3>
          <div className="aspect">
            <span>Support</span>
            <span className="stars">★★★★☆ (4.5)</span>
          </div>
          <div className="aspect">
            <span>User Interface</span>
            <span className="stars">★★★★★ (5.0)</span>
          </div>
          <div className="aspect">
            <span>Mobile Experience</span>
            <span className="stars">★★★★★ (5.0)</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}

export default Review;