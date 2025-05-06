import React, { useState, useEffect } from 'react';
import '../styles/Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      const parsedMessages = JSON.parse(savedMessages);
      // Sort messages by date, newest first
      parsedMessages.sort((a, b) => new Date(b.date) - new Date(a.date));
      setMessages(parsedMessages);
    }
  }, []);

  const handleDeleteMessage = (index) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = [...messages];
      updatedMessages.splice(index, 1);
      setMessages(updatedMessages);
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
      
      if (selectedMessage === index) {
        setSelectedMessage(null);
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="messages-container">
      <h2>Contact Messages</h2>
      
      {messages.length === 0 ? (
        <div className="no-messages">
          <p>No messages received yet.</p>
        </div>
      ) : (
        <div className="messages-grid">
          <div className="messages-list">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message-item ${selectedMessage === index ? 'selected' : ''}`}
                onClick={() => setSelectedMessage(index)}
              >
                <div className="message-header">
                  <h3>{message.name}</h3>
                  <span className="message-date">{formatDate(message.date)}</span>
                </div>
                <p className="message-subject">{message.service}</p>
                <p className="message-preview">{message.message.substring(0, 60)}...</p>
              </div>
            ))}
          </div>
          
          <div className="message-details">
            {selectedMessage !== null ? (
              <div className="message-content">
                <div className="message-actions">
                  <button 
                    className="btn btn-delete"
                    onClick={() => handleDeleteMessage(selectedMessage)}
                  >
                    Delete
                  </button>
                </div>
                
                <div className="message-info">
                  <h3>From: {messages[selectedMessage].name}</h3>
                  <p><strong>Email:</strong> {messages[selectedMessage].email}</p>
                  <p><strong>Phone:</strong> {messages[selectedMessage].phone || 'Not provided'}</p>
                  <p><strong>Company:</strong> {messages[selectedMessage].company || 'Not provided'}</p>
                  <p><strong>Service of Interest:</strong> {messages[selectedMessage].service}</p>
                  <p><strong>Date:</strong> {formatDate(messages[selectedMessage].date)}</p>
                </div>
                
                <div className="message-body">
                  <h4>Message:</h4>
                  <p>{messages[selectedMessage].message}</p>
                </div>
              </div>
            ) : (
              <div className="select-message">
                <p>Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages; 