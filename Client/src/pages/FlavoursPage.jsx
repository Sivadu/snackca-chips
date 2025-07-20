// src/pages/FlavoursPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/* dummy meta‑data – swap emoji with real images later */
const CATEGORIES = [
  { key: "banana-chips",   emoji: "🍌", title: "Banana Chips",  subtitle: "8 varieties" },
  { key: "jackfruit-chips",emoji: "🥭", title: "Jackfruit Chips",subtitle: "6 varieties"},
  { key: "potato-chips",   emoji: "🥔", title: "Potato Chips",  subtitle: "4 varieties" },
  { key: "spicy-flavours", emoji: "🌶️", title: "Spicy Flavours",subtitle: "3 varieties"},
  { key: "mixed-combos",   emoji: "🎁", title: "Mixed Combos",  subtitle: "5 packs" },
  { key: "seasonal",       emoji: "⭐", title: "Seasonal Specials", subtitle: "Limited" },
];

export default function FlavoursPage() {
  const navigate = useNavigate();

  const goTo = (key) => navigate(`/flavours/${key}`);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-1">Shop by Categories</h2>
        <p className="text-muted mb-5">Explore our complete range of healthy snacks</p>

        {/* gx‑4 = horizontal gap, gy‑5 = vertical gap */}
        <div className="row justify-content-center gx-4 gy-5">
          {CATEGORIES.map((c) => (
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
