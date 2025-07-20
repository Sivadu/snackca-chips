// src/pages/CategoryDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

/* quick demo data per category */
const PRODUCTS = {
  "banana-chips": [
    {
      name: "Peri Peri Banana Chips",
      packs: "3 sizes",
      rating: 4.6,
      price: 211,
      compare: 240,
      img: "/images/banana1.jpg",
    },
    { /* …more banana products… */ },
  ],
  "potato-chips": [
    {
      name: "Classic Salted Potato Chips",
      packs: "2 sizes",
      rating: 4.4,
      price: 99,
      compare: 120,
      img: "/images/potato1.jpg",
    },
  ],
};

export default function CategoryDetailPage() {
  const { category } = useParams();
  const list = PRODUCTS[category] || [];

  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Search / filter bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div className="input-group" style={{ maxWidth: "260px" }}>
            <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
            <input className="form-control" placeholder="Search flavours…" />
          </div>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-funnel me-1"></i>Filter
          </button>
          <select className="form-select" style={{ maxWidth: "180px" }}>
            <option>Featured</option>
            <option>Price – Low to High</option>
            <option>Price – High to Low</option>
          </select>
        </div>

        <h3 className="text-center fw-bold mb-1">Our Premium {category.replace("-", " ")} Flavours</h3>
        <p className="text-center text-muted mb-5">
          Hand‑crafted snacks made with the finest ingredients and traditional recipes
        </p>

        <div className="row gy-5">
          {list.map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="bg-white rounded-4 shadow-sm p-3 h-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="img-fluid rounded mb-3"
                  style={{ height: "210px", objectFit: "contain" }}
                />
                <p className="text-warning mb-1">
                  ⭐ {p.rating} &nbsp; <small className="text-muted">{p.packs}</small>
                </p>
                <h5>{p.name}</h5>
                <p className="small text-muted mb-2">
                  Crispy chips with signature seasoning, cooked in pure coconut oil.
                </p>
                <p className="mb-3">
                  <strong>₹{p.price}</strong>{" "}
                  <del className="text-muted">₹{p.compare}</del>
                </p>
                <button className="btn btn-warning w-100 d-flex justify-content-center align-items-center gap-2">
                  <i className="bi bi-cart3"></i>Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {!list.length && (
          <p className="text-center text-muted mt-5">No products added yet for this category.</p>
        )}
      </div>
    </section>
  );
}
