import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaTruck,
  FaLeaf,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-5" style={{ backgroundColor: '#3c703f' }}>
      <div className="container pb-4">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold d-flex align-items-center">
              <FaLeaf className="me-2 text-warning" />
              CrispyDelights
            </h5>
            <p className="small">
              Bringing you the finest quality chips made from the freshest fruits.
              Taste the difference of natural goodness.
            </p>

            {/* Social Media Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-warning bg-light rounded-circle p-2">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-warning bg-light rounded-circle p-2">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-warning bg-light rounded-circle p-2">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>All Products</li>
              <li>Categories</li>
              <li>Our Story</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled small">
              <li>Banana Chips</li>
              <li>Jackfruit Chips</li>
              <li>Coconut Chips</li>
              <li>Gift Combos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <ul className="list-unstyled small">
              <li><FaPhone className="me-2" /> +91 98765 43210</li>
              <li>
                <FaEnvelope className="me-2" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@crispydelights.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  hello@crispydelights.com
                </a>
              </li>
              <li><FaTruck className="me-2" /> Free delivery above ₹499</li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center small">
          © 2024 CrispyDelights. All rights reserved. Made with ❤️ for healthy snacking.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
