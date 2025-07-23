import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FlavoursPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/pages/flavours")
      .then(res => setCategories(res.data));
  }, []);

  const goTo = (key) => navigate(`/flavours/${key}`);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-1">Shop by Categories</h2>
        <p className="text-muted mb-5">Explore our complete range of healthy snacks</p>
        <div className="row justify-content-center gx-4 gy-5">
          {categories.map((c) => (
            <div key={c.key} className="col-6 col-md-4 col-lg-2">
              <div
                role="button"
                className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column align-items-center hover-raise"
                onClick={() => goTo(c.key)}
              >
                <span style={{ fontSize: "2.4rem" }}>{c.emoji}</span>
                <h6 className="fw-bold mt-3 mb-1">{c.title}</h6>
                <small className="text-muted">{c.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
