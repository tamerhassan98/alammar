import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Select a service',
    date: new Date().toISOString()
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactMessages, setContactMessages] = useState([]);

  useEffect(() => {
    // Load existing messages from localStorage
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setContactMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add current date to submission
    const submissionWithDate = {
      ...formData,
      date: new Date().toISOString()
    };
    
    // Save to localStorage
    const updatedMessages = [...contactMessages, submissionWithDate];
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    setContactMessages(updatedMessages);
    
    console.log('Form submitted:', submissionWithDate);
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'Select a service',
      date: new Date().toISOString()
    });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team for facility management solutions</p>
        </div>
      </section>

      <section className="section contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {formSubmitted ? (
                <div className="form-success animate-fade-in">
                  <h3>Thank you for contacting us!</h3>
                  <p>We've received your message and will get back to you shortly.</p>
                  <button className="btn" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="animate-form-field"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="animate-form-field"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="animate-form-field"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="animate-form-field"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="animate-form-field"
                    >
                      <option value="Select a service" disabled>Select a service</option>
                      <option value="Maintenance Management">Maintenance Management</option>
                      <option value="Security Services">Security Services</option>
                      <option value="Cleaning Services">Cleaning Services</option>
                      <option value="Energy Management">Energy Management</option>
                      <option value="Space Management">Space Management</option>
                      <option value="Emergency Planning">Emergency Planning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="animate-form-field"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-submit">Send Message</button>
                </form>
              )}
            </div>
            
            <div className="contact-details">
              <div className="contact-item animate-fade-in">
                <h3>Address</h3>
                <p>123 Business Avenue</p>
                <p>Suite 200</p>
                <p>New York, NY 10001</p>
              </div>
              
              <div className="contact-item animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3>Contact Info</h3>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@facilitymgmt.com</p>
                <p><strong>Hours:</strong> Mon-Fri, 9am-5pm</p>
              </div>
              
              <div className="contact-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    Twitter
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="contact-map animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img src="https://source.unsplash.com/random/400x300/?map" alt="Location Map" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item animate-slide-in">
              <h3>What services do you offer?</h3>
              <p>We offer a comprehensive range of facility management services including maintenance, security, cleaning, energy management, space planning, and emergency response planning.</p>
            </div>
            
            <div className="faq-item animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <h3>Do you serve both commercial and residential properties?</h3>
              <p>Yes, we provide facility management services for both commercial and residential properties, though our primary focus is on commercial facilities.</p>
            </div>
            
            <div className="faq-item animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3>How quickly can you respond to emergencies?</h3>
              <p>We offer 24/7 emergency response services and aim to respond to critical issues within 1-2 hours, depending on location and the nature of the emergency.</p>
            </div>
            
            <div className="faq-item animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h3>Can you customize services for my specific needs?</h3>
              <p>Absolutely! We offer customized facility management solutions tailored to your specific needs, facility type, and budget requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 