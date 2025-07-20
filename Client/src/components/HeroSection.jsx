import React from 'react';
import heroImage from '../assets/banana-chips-variety.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section className="hero-section py-5 px-3">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <p className="text-muted fw-medium">100% Natural & Healthy</p>
        <h1 className="display-5 fw-bold">
          FLAVOUR UP <br />
          Your <span className="text-warning">Snacking</span> <br />
          Experience!
        </h1>
        <p className="text-secondary my-4">
          Discover our premium range of banana chips, jackfruit chips, and exotic snacks.
          Multiple flavors, all natural ingredients, zero preservatives.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
          <button className="btn btn-outline-dark rounded-3 px-4 py-2">
            Shop Now Free delivery
          </button>
          <button className="btn btn-warning text-white rounded-3 px-4 py-2">
            View All Products
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 d-flex justify-content-center">
        <img
          src={heroImage}
          alt="Banana Chips"
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: '100%', height: 'auto', border: '3px solid #fff' }}
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
