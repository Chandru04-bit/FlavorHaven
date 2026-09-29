import React from 'react';
import { fallbackImages } from '../data/foods';

const FoodCard = ({ food, onOrder }) => {
  return (
    <div className="food-card">
      <div className="food-card-img-wrap">
        <img 
          src={food.image} 
          alt={food.name} 
          className="food-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImages[food.category] || fallbackImages.default;
          }}
        />
        {food.rating && (
          <div className="food-rating-badge">
            <span className="star-icon">⭐</span>
            <span className="rating-num">{food.rating}</span>
          </div>
        )}
        <span className="food-category-pill">{food.category}</span>
      </div>

      <div className="food-card-body">
        <h3 className="food-card-title">{food.name}</h3>
        <p className="food-card-description">{food.description}</p>
        
        <div className="food-card-footer">
          <div className="food-price-tag">
            <span className="currency-symbol">₹</span>
            <span className="price-amount">{food.price}</span>
          </div>
          
          <button 
            type="button"
            className="btn btn-order"
            onClick={() => onOrder(food)}
            aria-label={`Order ${food.name}`}
          >
            Order Now 🛍️
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
