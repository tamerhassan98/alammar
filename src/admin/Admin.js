import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import Messages from './Messages';
import { servicesData } from '../data/servicesData';
import '../styles/Admin.css';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    features: ['', '', '', '', '']
  });
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [activeTab, setActiveTab] = useState('services');

  // Check if user is authenticated on component mount
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Load services from localStorage if they exist
    const savedServices = localStorage.getItem('services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      setServices([...servicesData]);
      // Initialize localStorage with default services data
      localStorage.setItem('services', JSON.stringify(servicesData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData({
      title: services[index].title,
      description: services[index].description,
      imageUrl: services[index].imageUrl,
      features: [...services[index].features]
    });
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditIndex(null);
    setFormData({
      title: '',
      description: '',
      imageUrl: 'https://source.unsplash.com/random/100x100/?service',
      features: ['', '', '', '', '']
    });
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = [...services];
      updatedServices.splice(index, 1);
      setServices(updatedServices);
      
      // Update localStorage
      localStorage.setItem('services', JSON.stringify(updatedServices));
      
      showMessage('Service deleted successfully', 'success');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData(prevState => ({
      ...prevState,
      features: updatedFeatures
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty features
    const filteredFeatures = formData.features.filter(feature => feature.trim() !== '');
    
    // Create updated service object
    const updatedService = {
      ...formData,
      features: filteredFeatures
    };
    
    // Update services array
    let updatedServices;
    if (isAdding) {
      updatedServices = [...services, updatedService];
      showMessage('New service added successfully', 'success');
    } else {
      updatedServices = [...services];
      updatedServices[editIndex] = updatedService;
      showMessage('Service updated successfully', 'success');
    }
    
    setServices(updatedServices);
    
    // Update localStorage
    localStorage.setItem('services', JSON.stringify(updatedServices));
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      features: ['', '', '', '', '']
    });
    setEditIndex(null);
    setIsAdding(false);
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setIsAdding(false);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      features: ['', '', '', '', '']
    });
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="admin-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Admin Panel</h1>
          <p className="page-subtitle">Manage website content</p>
          <button onClick={handleLogout} className="btn btn-logout">Logout</button>
        </div>
      </section>

      <section className="section admin-content">
        <div className="container">
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="admin-tabs">
            <button 
              className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </button>
          </div>

          {activeTab === 'services' && (
            <div className="tab-content">
              <div className="admin-actions">
                <button className="btn" onClick={handleAdd}>Add New Service</button>
              </div>

              {(editIndex !== null || isAdding) && (
                <div className="edit-form-container">
                  <h2>{isAdding ? 'Add New Service' : 'Edit Service'}</h2>
                  <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="title">Service Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="imageUrl">Image URL</label>
                      <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Features (at least one required)</label>
                      {formData.features.map((feature, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder={`Feature ${index + 1}`}
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          required={index === 0}
                          className="feature-input"
                        />
                      ))}
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn">
                        {isAdding ? 'Add Service' : 'Update Service'}
                      </button>
                      <button type="button" className="btn btn-cancel" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="services-list">
                <h2>Current Services</h2>
                <div className="admin-grid">
                  {services.map((service, index) => (
                    <div className="admin-card" key={index}>
                      <div className="admin-card-header">
                        <img src={service.imageUrl} alt={service.title} />
                        <h3>{service.title}</h3>
                      </div>
                      <div className="admin-card-body">
                        <p>{service.description}</p>
                        <ul>
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="admin-card-actions">
                        <button className="btn btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="btn btn-delete" onClick={() => handleDelete(index)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="tab-content">
              <Messages />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin; 