import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phonePattern = /^[0-9+\-\s()]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!phonePattern.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10+ digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        // Hide success message after 6 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      }, 600);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">We'd Love To Hear From You</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a question, feedback, catering inquiry, or table reservation? Send us a message and we will respond promptly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Restaurant Info */}
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <p className="contact-card-sub">
              Feel free to visit us or reach out via call or email anytime during our operating hours.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-icon">📍</div>
                <div className="contact-detail-text">
                  <h4>Restaurant Address</h4>
                  <p>124 Gourmet Boulevard, Foodie Plaza, New Delhi, 110001, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">📞</div>
                <div className="contact-detail-text">
                  <h4>Phone Number</h4>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  <p><a href="tel:+911123456789">+91 (011) 2345 6789</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-detail-text">
                  <h4>Email Address</h4>
                  <p><a href="mailto:hello@flavorhaven.com">hello@flavorhaven.com</a></p>
                  <p><a href="mailto:orders@flavorhaven.com">orders@flavorhaven.com</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-detail-text">
                  <h4>Opening Hours</h4>
                  <p>Mon - Fri: 10:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-highlight-banner">
              <span className="banner-icon">🛵</span>
              <div>
                <strong>Free Home Delivery</strong>
                <p>On all orders above ₹499 within 8km radius.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-card-title">Send Us A Message</h3>
            
            {isSubmitted && (
              <div className="form-success-alert">
                <span className="success-icon">🎉</span>
                <div>
                  <strong>Thank you for contacting us!</strong>
                  <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are craving, inquiry, or reservation details..."
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message ✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
