import React from 'react';

const Footer = ({ onNavigate }) => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-brand" onClick={(e) => handleScrollTo(e, 'home')}>
              <span className="brand-icon">🍔</span>
              <span className="brand-text">Flavor<span>Haven</span></span>
            </a>
            <p className="footer-tagline">
              Serving handcrafted flavors, crispy treats, and gourmet delights prepared with love and organic ingredients since 2014.
            </p>
            <div className="footer-social-links">
              <a href="#facebook" aria-label="Facebook" className="social-icon">📘</a>
              <a href="#instagram" aria-label="Instagram" className="social-icon">📸</a>
              <a href="#twitter" aria-label="Twitter" className="social-icon">🐦</a>
              <a href="#youtube" aria-label="YouTube" className="social-icon">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => handleScrollTo(e, 'categories')}>Categories</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Food Menu</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Food Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Menu</h4>
            <ul className="footer-links">
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Artisanal Pizzas</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Gourmet Burgers</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Handmade Pastas</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Decadent Desserts</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Refreshing Drinks</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-info">
              <li>
                <span className="info-icon">📍</span>
                <span>124 Gourmet Blvd, Foodie Plaza, New Delhi 110001</span>
              </li>
              <li>
                <span className="info-icon">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <span className="info-icon">✉️</span>
                <span>hello@flavorhaven.com</span>
              </li>
              <li>
                <span className="info-icon">⏰</span>
                <span>10:00 AM – 11:30 PM (Mon-Sun)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} FlavorHaven Food Co. All rights reserved. Made with ❤️ for food lovers.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
