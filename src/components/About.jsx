import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with Experience Badge */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
                alt="FlavorHaven Restaurant Kitchen and Dining" 
                className="about-main-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="about-exp-badge">
                <span className="exp-years">10+</span>
                <span className="exp-text">Years of Culinary Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Story */}
          <div className="about-content-column">
            <div className="section-header text-left">
              <span className="section-subtitle">About FlavorHaven</span>
              <h2 className="section-title">We Cook With Heart & Deliver With Pride</h2>
              <div className="section-divider align-left"></div>
            </div>

            <p className="about-lead-text">
              We serve fresh, delicious and high-quality food prepared with carefully selected ingredients. Our goal is to make every meal memorable.
            </p>

            <p className="about-body-text">
              Founded with a mission to bring families and food lovers together, our kitchen combines 
              traditional culinary heritage with modern gastronomy. From our hand-stretched dough and 
              slow-simmered sauces to farm-fresh greens and signature spice blends, every dish is an artful creation.
            </p>

            {/* Feature Highlights Grid */}
            <div className="about-features-grid">
              <div className="about-feature-box">
                <div className="feature-box-icon">🌱</div>
                <div className="feature-box-info">
                  <h4>Fresh Ingredients</h4>
                  <p>100% locally sourced organic produce</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="feature-box-icon">👨‍🍳</div>
                <div className="feature-box-info">
                  <h4>Master Chefs</h4>
                  <p>Crafted by passionate culinary experts</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="feature-box-icon">🛵</div>
                <div className="feature-box-info">
                  <h4>Speedy Delivery</h4>
                  <p>Steaming hot meals at your doorstep</p>
                </div>
              </div>

              <div className="about-feature-box">
                <div className="feature-box-icon">🧼</div>
                <div className="feature-box-info">
                  <h4>Hygiene First</h4>
                  <p>Certified 5-star sanitization standards</p>
                </div>
              </div>
            </div>

            <div className="about-stats-row">
              <div className="stat-card">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Happy Foodies</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">65+</span>
                <span className="stat-label">Special Dishes</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
