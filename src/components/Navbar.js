import React, { useState, useContext, createContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { translations } from '../translations';
import '../styles/Navbar.css';

// Create a language context to be used throughout the app
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  translations: translations
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  // Store the language preference in localStorage
  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    
    // Set the text direction based on language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add or remove RTL class to body
    if (lang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };

  const contextValue = {
    language,
    setLanguage: changeLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const t = translations[language];

  useEffect(() => {
    // Check if user is authenticated as admin
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={scrollToTop}>
            <div className="logo-icon"></div>
            <span className="logo-text">Alammar-FM</span>
          </Link>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                onClick={() => {setIsOpen(false); scrollToTop();}}
              >
                {t.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                onClick={() => {setIsOpen(false); scrollToTop();}}
              >
                {t.about}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                onClick={() => {setIsOpen(false); scrollToTop();}}
              >
                {t.services}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/clients" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                onClick={() => {setIsOpen(false); scrollToTop();}}
              >
                {t.clients}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                onClick={() => {setIsOpen(false); scrollToTop();}}
              >
                {t.contact}
              </NavLink>
            </li>
            {isAdmin && (
              <li className="nav-item admin-link">
                <NavLink 
                  to="/admin" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                  onClick={() => {setIsOpen(false); scrollToTop();}}
                >
                  {t.admin}
                </NavLink>
              </li>
            )}
            <li className="nav-item language-toggle">
              <button 
                className="language-btn" 
                onClick={handleLanguageToggle}
                aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 