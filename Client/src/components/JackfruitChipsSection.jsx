import React from 'react';
import jackfruitChips from '../data/jackfruitChipsData';

const JackfruitChipsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff9f0" }}>
      <div className="container">
        <h2 className="fw-bold text-center" style={{ color: '#4A2C0A' }}>
          Jackfruit Chips Collection
        </h2>
        <p className="text-center text-muted mb-5">
          Exotic tropical flavors in every bite
        </p>

        <div className="row g-4">
          {jackfruitChips.map((item) => (
            <div className="col-md-4" key={item.id}>
  <div className="card h-100 shadow-sm border-0 product-card">
    <img
      src={item.image}
      alt={item.name}
      className="card-img-top"
      style={{ objectFit: 'cover', height: '280px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
    />
    <div className="card-body d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="card-title mb-0 fw-semibold">{item.name}</h5>
        <span className={`badge bg-${item.badgeColor}`}>{item.badge}</span>
      </div>
      <p className="text-muted small flex-grow-1">{item.description}</p>
      <div className="mb-2">
        <span className="text-warning me-1">★★★★★</span>
        <span className="text-muted small">({item.rating})</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0 text-warning">₹{item.price}</h5>
        <del className="ms-2 text-muted">₹{item.originalPrice}</del>
        <span className="ms-auto badge bg-success">{item.discount}</span>
      </div>
      <button className="btn btn-warning w-100 text-white">
        <i className="bi bi-cart me-2"></i>Add to Cart
      </button>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default JackfruitChipsSection;
