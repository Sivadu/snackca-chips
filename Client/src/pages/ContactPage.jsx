import React from 'react';

const ContactPage = () => {
  return (
    <section className="container py-5 mt-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <p className="mb-4">We’d love to hear from you! Fill out the form below to get in touch.</p>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-warning text-white px-4">Send</button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
