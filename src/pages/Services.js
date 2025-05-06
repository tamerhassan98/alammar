import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../components/Navbar';
import { getServicesData } from '../data/servicesData';
import '../styles/Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const { language, translations: t } = useContext(LanguageContext);

  useEffect(() => {
    // Load services based on current language
    setServices(getServicesData(language));
  }, [language]);
  
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t[language].ourServices}</h1>
          <p className="page-subtitle">{t[language].serviceDescription}</p>
        </div>
      </section>

      <section className="section services-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>{t[language].service1Title}</h2>
              <p>
                {t[language].service1Desc}
              </p>
              <p>
                {t[language].service2Desc}
              </p>
            </div>
            <div className="intro-image">
              <img src="https://source.unsplash.com/random/600x400/?facility" alt="Facility Management" className="animate-fade-in" />
            </div>
          </div>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          <h2 className="section-title text-center">{t[language].ourServices}</h2>
          <p className="section-subtitle text-center">
            {t[language].serviceDescription}
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card animate-fade-in" key={service.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon">
                  <img src={service.imageUrl} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process">
        <div className="container">
          <h2 className="section-title text-center">{t[language].ourProcess}</h2>
          <p className="section-subtitle text-center">
            {t[language].processSubheader}
          </p>

          <div className="process-steps">
            <div className="process-step animate-slide-in">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>{t[language].step1Title}</h3>
                <p>{t[language].step1Desc}</p>
              </div>
            </div>
            
            <div className="process-step animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>{t[language].step2Title}</h3>
                <p>{t[language].step2Desc}</p>
              </div>
            </div>
            
            <div className="process-step animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>{t[language].step3Title}</h3>
                <p>{t[language].step3Desc}</p>
              </div>
            </div>
            
            <div className="process-step animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>{t[language].step4Title}</h3>
                <p>{t[language].step4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2>{t[language].getInTouch}</h2>
            <p>{t[language].contactUs}</p>
            <Link to="/contact" className="btn btn-pulse">{t[language].contactNow}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 