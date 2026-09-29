import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { foods } from '../data/foods';

const FoodMenu = ({ selectedCategory, onSelectCategory, onOrderFood }) => {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'all');

  // Synchronize when parent changes category (e.g. from Categories section click)
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Dishes', icon: '🍽️' },
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'pasta', label: 'Pasta', icon: '🍝' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' },
    { id: 'drinks', label: 'Drinks', icon: '🍹' }
  ];

  const filteredFoods = activeFilter === 'all' 
    ? foods 
    : foods.filter(item => item.category === activeFilter);

  return (
    <section id="menu" className="menu-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Delicious Menu</span>
          <h2 className="section-title">Explore Our Chef's Specialties</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Freshly prepared with authentic recipes and premium ingredients. Order your favorites right away!
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="menu-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`filter-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="foods-grid">
          {filteredFoods.map((item) => (
            <FoodCard 
              key={item.id} 
              food={item} 
              onOrder={onOrderFood} 
            />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="no-items-placeholder">
            <p>No delicious items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;
