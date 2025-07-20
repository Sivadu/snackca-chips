import React from 'react';

const categories = [
  { icon: '🍌', title: 'Banana Chips', subtitle: '8 varieties' },
  { icon: '😋', title: 'Jackfruit Chips', subtitle: '6 varieties' },
  { icon: '🥔', title: 'Potato', subtitle: '4 varieties' },
  { icon: '🍠', title: 'Tapioca', subtitle: '3 varieties' },
  { icon: '🎁', title: 'Mixed Combos', subtitle: '5 packs' },
  { icon: '⭐', title: 'Seasonal Specials', subtitle: 'Limited' },
];

const CategoriesSection = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-2" style={{ color: '#4A2C0A' }}>Shop by Categories</h2>
        <p className="text-secondary mb-4">Explore our complete range of healthy snacks</p>

        <div className="row g-4 justify-content-center">
          {categories.map((cat, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
          <div className="category-card bg-white p-3 rounded-4 h-100">
         <div className="category-icon">{cat.icon}</div>
         <h6 className="fw-bold mt-2 category-title">{cat.title}</h6>
          <p className="category-subtitle">{cat.subtitle}</p>
            </div>
         </div>
       ))}
       </div>

      </div>
    </section>
  );
};


export default CategoriesSection;
