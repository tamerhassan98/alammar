import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn more about our company and our mission</p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Founded in 2010, FacilityMgmt has grown to become a leading provider of facility management services 
                across the country. We started with a simple mission: to help businesses manage their facilities 
                more efficiently and sustainably.
              </p>
              <p>
                Today, we serve clients across various industries, from commercial real estate to healthcare, 
                education, and manufacturing. Our team consists of certified professionals with decades of combined 
                experience in facility management.
              </p>
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide exceptional facility management solutions that maximize operational 
                efficiency, reduce costs, and create safe, comfortable environments for our clients and their stakeholders.
              </p>
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical standards.</li>
                <li><strong>Excellence:</strong> We strive for excellence in everything we do, exceeding client expectations.</li>
                <li><strong>Innovation:</strong> We continuously seek innovative solutions to improve facility management.</li>
                <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices.</li>
                <li><strong>Collaboration:</strong> We work closely with clients to understand and meet their unique needs.</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="https://source.unsplash.com/random/600x800/?team" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="section-subtitle text-center">
            Meet the experienced professionals leading our company
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?ceo" alt="CEO" />
              </div>
              <div className="member-info">
                <h3>John Smith</h3>
                <p className="member-position">CEO & Founder</p>
                <p className="member-bio">
                  John has over 20 years of experience in facility management and a passion for sustainable business practices.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?woman" alt="Operations Director" />
              </div>
              <div className="member-info">
                <h3>Sarah Johnson</h3>
                <p className="member-position">Operations Director</p>
                <p className="member-bio">
                  Sarah oversees all operational activities, ensuring efficient service delivery to our clients.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?manager" alt="Technical Manager" />
              </div>
              <div className="member-info">
                <h3>Michael Lee</h3>
                <p className="member-position">Technical Manager</p>
                <p className="member-bio">
                  Michael leads our technical team, keeping up with the latest innovations in facility management technology.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?executive" alt="Client Relations" />
              </div>
              <div className="member-info">
                <h3>Emily Davis</h3>
                <p className="member-position">Client Relations Manager</p>
                <p className="member-bio">
                  Emily ensures our clients receive exceptional service and their needs are always met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-text">Satisfied Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-text">Professional Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-text">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 