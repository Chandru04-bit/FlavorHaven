import React, { useState, useEffect } from 'react';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'categories', 'menu', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    if (onNavigate) {
      onNavigate(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo (Left) */}
        <div className="navbar-left">
          <a 
            href="#home" 
            className="navbar-brand" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
          >
            <span className="brand-icon">🍔</span>
            <span className="brand-text">Flavor<span>Haven</span></span>
          </a>
        </div>

        {/* Navigation Links (Center) */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#categories" 
                className={`nav-link ${activeSection === 'categories' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('categories'); }}
              >
                Categories
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="navbar-right">
          <a 
            href="#menu" 
            className="navbar-cta-btn" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
          >
            Order Now
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#home" 
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            >
              🏠 Home
            </a>
          </li>
          <li>
            <a 
              href="#categories" 
              className={`mobile-nav-link ${activeSection === 'categories' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('categories'); }}
            >
              🍽️ Categories
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              className={`mobile-nav-link ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
            >
              📜 Menu
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
            >
              ✨ About Us
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
            >
              📞 Contact Us
            </a>
          </li>
          <li className="mobile-cta-wrapper">
            <a 
              href="#menu" 
              className="btn btn-primary btn-block"
              onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
            >
              Order Now 🚀
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
