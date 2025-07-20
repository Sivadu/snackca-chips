// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaLeaf, FaHeart, FaTruck, FaAward } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf size={28} className="text-warning" />,
    title: '100% Natural',
    desc: 'No artificial preservatives, colors, or flavors. Just pure, natural goodness.',
    bg: 'rgba(255, 193, 7, 0.1)'
  },
  {
    icon: <FaHeart size={28} className="text-danger" />,
    title: 'Made with Love',
    desc: 'Handcrafted in small batches with care and attention to every detail.',
    bg: 'rgba(220, 53, 69, 0.1)'
  },
  {
    icon: <FaTruck size={28} className="text-success" />,
    title: 'Free Delivery',
    desc: 'Enjoy free doorstep delivery on orders above ₹499. Fast and reliable.',
    bg: 'rgba(25, 135, 84, 0.1)'
  },
  {
    icon: <FaAward size={28} className="text-warning" />,
    title: 'Multiple Flavors',
    desc: 'From classic to exotic - discover new flavors with every order.',
    bg: 'rgba(255, 193, 7, 0.1)'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f6ef' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-1" style={{ color: '#4A2C0A' }}>Why Choose CrispyDelights?</h2>
        <p className="text-muted mb-5">Quality you can taste, trust you can feel</p>
        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ width: 64, height: 64, backgroundColor: item.bg }}
              >
                {item.icon}
              </div>
              <h6 className="fw-bold" style={{ color: '#4A2C0A' }}>{item.title}</h6>
              <p className="text-muted small">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
