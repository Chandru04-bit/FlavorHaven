import React from 'react';
import { categories, fallbackImages } from '../data/foods';

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const handleCategoryClick = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="categories-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Browse By Favorites</span>
          <h2 className="section-title">Popular Food Categories</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore our mouthwatering selection across hand-picked food categories prepared fresh every day.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <div 
                key={category.id} 
                className={`category-card ${isSelected ? 'active-card' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCategoryClick(category.id);
                  }
                }}
              >
                <div className="category-img-container">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="category-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImages[category.id] || fallbackImages.default;
                    }}
                  />
                  <div className="category-icon-badge">
                    <span>{category.icon}</span>
                  </div>
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-desc">{category.description}</p>
                  <span className="category-link">
                    Explore Items <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
