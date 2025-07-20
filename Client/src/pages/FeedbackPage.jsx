import React from 'react';

const FeedbackPage = () => {
  return (
    <section className="container py-5 mt-5">
      <h2 className="fw-bold mb-4">Give Us Your Feedback</h2>
      <p>Your feedback helps us improve our products and service!</p>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Rating</label>
          <select className="form-select">
            <option value="">Select a rating</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Comments</label>
          <textarea className="form-control" rows="4" placeholder="Write your feedback here..."></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-dark px-4">Submit Feedback</button>
        </div>
      </form>
    </section>
  );
};

export default FeedbackPage;
