import React from 'react';

const Hero = () => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = (e) => {
    e.preventDefault();
    const categoriesEl = document.getElementById('categories');
    if (categoriesEl) {
      categoriesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-icon">🔥</span>
            <span>Special 20% Off Your First Order</span>
          </div>

          <h1 className="hero-title">
            Delicious Food, <br />
            <span>Made With Love</span>
          </h1>

          <p className="hero-description">
            Experience authentic flavors crafted with passion and the finest farm-fresh ingredients. 
            From sizzling pizzas to gourmet burgers and artisan pastas, we bring mouthwatering delights 
            straight to your table.
          </p>

          <div className="hero-actions">
            <a href="#menu" onClick={scrollToMenu} className="btn btn-primary btn-lg">
              Explore Menu 🍕
            </a>
            <a href="#categories" onClick={scrollToCategories} className="btn btn-secondary btn-lg">
              View Categories 🍽️
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <strong>Super Fast</strong>
                <span>30 Min Delivery</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🥗</div>
              <div className="feature-text">
                <strong>100% Fresh</strong>
                <span>Organic Ingredients</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <div className="feature-text">
                <strong>4.9 Rating</strong>
                <span>Over 10k+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card main-card">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
              alt="Delicious Gourmet Dish"
              className="hero-main-img"
              loading="eager"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="floating-card floating-card-top">
              <span className="float-icon">🔥</span>
              <div className="float-info">
                <span className="float-label">Hot & Crispy</span>
                <strong className="float-value">Chef's Special</strong>
              </div>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="float-icon">⭐</span>
              <div className="float-info">
                <span className="float-label">User Loved</span>
                <strong className="float-value">4.9 / 5.0 (2.4k)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
