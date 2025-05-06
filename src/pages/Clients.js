import React from 'react';
import { clientsData, testimonialsData } from '../data/clientsData';
import '../styles/Clients.css';

const Clients = () => {
  return (
    <div className="clients-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Clients</h1>
          <p className="page-subtitle">We've helped numerous businesses optimize their facility management</p>
        </div>
      </section>

      <section className="section clients-intro">
        <div className="container">
          <h2 className="section-title text-center">Trusted by Businesses</h2>
          <p className="section-subtitle text-center">
            We serve clients across various industries, from commercial real estate to healthcare and education.
          </p>

          <div className="clients-grid">
            {clientsData.map((client, index) => (
              <div className="client-logo" key={index}>
                <img src={client.logoUrl} alt={client.name} />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-studies">
        <div className="container">
          <h2 className="section-title text-center">Success Stories</h2>
          <p className="section-subtitle text-center">
            See how we've helped our clients optimize their facility management
          </p>

          <div className="grid">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?office-building" alt="Office Building" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Corporate Office Complex</h3>
                <p className="card-text">
                  Reduced operational costs by 23% and improved energy efficiency for a 15-story office complex 
                  through our comprehensive facility management services.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?hospital" alt="Hospital" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">Regional Hospital</h3>
                <p className="card-text">
                  Implemented advanced security and maintenance systems for a 250-bed hospital, ensuring 
                  24/7 operations and compliance with healthcare facility regulations.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="https://source.unsplash.com/random/400x300/?university" alt="University" className="card-img" />
              <div className="card-content">
                <h3 className="card-title">University Campus</h3>
                <p className="card-text">
                  Managed facility operations for a 50-acre university campus, including maintenance, 
                  security, cleaning, and space management for over 20 buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <p className="section-subtitle text-center">
            What our clients say about our facility management services
          </p>

          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.imageUrl} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries">
        <div className="container">
          <h2 className="section-title text-center">Industries We Serve</h2>
          <p className="section-subtitle text-center">
            Our facility management services are tailored to various industries
          </p>

          <div className="industries-grid">
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?office" alt="Commercial Real Estate" />
              </div>
              <h3>Commercial Real Estate</h3>
            </div>
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?healthcare" alt="Healthcare" />
              </div>
              <h3>Healthcare</h3>
            </div>
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?education" alt="Education" />
              </div>
              <h3>Education</h3>
            </div>
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?retail" alt="Retail" />
              </div>
              <h3>Retail</h3>
            </div>
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?manufacturing" alt="Manufacturing" />
              </div>
              <h3>Manufacturing</h3>
            </div>
            <div className="industry-item">
              <div className="industry-icon">
                <img src="https://source.unsplash.com/random/100x100/?hospitality" alt="Hospitality" />
              </div>
              <h3>Hospitality</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients; 