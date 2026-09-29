import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FoodMenu from './components/FoodMenu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderToast, setOrderToast] = useState(null);

  const handleOrderFood = (food) => {
    setOrderToast({
      name: food.name,
      price: food.price,
      image: food.image
    });

    // Auto-clear toast after 4 seconds
    setTimeout(() => {
      setOrderToast(null);
    }, 4000);
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Bar */}
      <Navbar onNavigate={(section) => {
        if (section === 'menu' && selectedCategory !== 'all') {
          // Keep category or reset as appropriate
        }
      }} />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <Categories 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        <FoodMenu 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
          onOrderFood={handleOrderFood} 
        />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleSelectCategory} />

      {/* Order Toast Notification */}
      {orderToast && (
        <aside 
          className="order-toast-notification" 
          aria-live="polite"
          role="status"
        >
          <img 
            src={orderToast.image} 
            alt={orderToast.name} 
            className="toast-img" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';
            }}
          />
          <div className="toast-content">
            <h4 className="toast-title">Item Added to Order! 🎉</h4>
            <p className="toast-desc">
              <strong>{orderToast.name}</strong> • ₹{orderToast.price}
            </p>
          </div>
          <button 
            type="button" 
            className="toast-close-btn"
            onClick={() => setOrderToast(null)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </aside>
      )}
    </div>
  );
}

export default App;
