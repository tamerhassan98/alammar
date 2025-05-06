import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  const { language, translations: t } = useContext(LanguageContext);
  
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">{t[language].welcomeHeader}</h1>
          <p className="hero-subtitle">
            {t[language].welcomeSubheader}
          </p>
          <Link to="/contact" className="cta-btn">{t[language].getStarted}</Link>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2 className="section-title text-center">{t[language].aboutUs}</h2>
          <p className="section-subtitle text-center">
            {t[language].aboutSubheader}
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="https://source.unsplash.com/random/100x100/?building" alt="Building" />
              </div>
              <h3>{t[language].ourMission}</h3>
              <p>{t[language].missionContent}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="https://source.unsplash.com/random/100x100/?maintenance" alt="Maintenance" />
              </div>
              <h3>{t[language].ourVision}</h3>
              <p>{t[language].visionContent}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="https://source.unsplash.com/random/100x100/?sustainable" alt="Sustainable" />
              </div>
              <h3>{t[language].service5Title}</h3>
              <p>{t[language].service5Desc}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="https://source.unsplash.com/random/100x100/?technology" alt="Technology" />
              </div>
              <h3>{t[language].service6Title}</h3>
              <p>{t[language].service6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title text-center">{t[language].ourServices}</h2>
          <p className="section-subtitle text-center">
            {t[language].serviceDescription}
          </p>

          <div className="grid">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?maintenance" alt="Maintenance" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{t[language].service1Title}</h3>
                <p className="card-text">{t[language].service1Desc}</p>
                <Link to="/services" className="btn">{t[language].learnMore}</Link>
              </div>
            </div>

            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?security" alt="Security" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{t[language].service2Title}</h3>
                <p className="card-text">{t[language].service2Desc}</p>
                <Link to="/services" className="btn">{t[language].learnMore}</Link>
              </div>
            </div>

            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?cleaning" alt="Cleaning" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{t[language].service3Title}</h3>
                <p className="card-text">{t[language].service3Desc}</p>
                <Link to="/services" className="btn">{t[language].learnMore}</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-40">
            <Link to="/services" className="btn btn-outlined">{t[language].viewAllServices}</Link>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t[language].getInTouch}</h2>
            <p>{t[language].contactUs}</p>
            <Link to="/contact" className="btn">{t[language].contactNow}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 