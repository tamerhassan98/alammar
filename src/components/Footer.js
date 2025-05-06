import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './Navbar';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, translations: t } = useContext(LanguageContext);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">{t[language].footerAbout}</h3>
            <p className="footer-description">
              {t[language].footerDescription}
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="social-icon facebook-icon"></i>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="social-icon twitter-icon"></i>
                <span>Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="social-icon linkedin-icon"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">{t[language].quickLinks}</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>{t[language].home}</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>{t[language].about}</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>{t[language].services}</Link></li>
              <li><Link to="/clients" onClick={scrollToTop}>{t[language].clients}</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>{t[language].contact}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3 className="footer-title">{t[language].contactUs}</h3>
            <p><strong>{t[language].address}:</strong> 123 Business Ave, Suite 200, New York, NY 10001</p>
            <p><strong>{t[language].phone}:</strong> (555) 123-4567</p>
            <p><strong>{t[language].email}:</strong> info@alammar-fm.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {t[language].footerAbout}. {t[language].allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 