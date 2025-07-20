// src/components/ExploreSection.jsx
import React from 'react';
import { FaPhone, FaShoppingCart } from 'react-icons/fa';

const ExploreSection = () => {
  return (
    <section
      className="text-center text-white py-5"
      style={{
        background: 'linear-gradient(to right, #ffa726, #4e944f)'
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to Explore All Flavors?</h2>
        <p className="mb-4">
          Join thousands of happy customers who've discovered the perfect snack for every mood and moment.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <button className="btn btn-light fw-semibold">
            <FaShoppingCart className="me-2" />
            Browse All Products
          </button>
          <span className="d-flex align-items-center text-white fw-semibold">
            <FaPhone className="me-2" /> Call Us: +91 98765 43210
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
