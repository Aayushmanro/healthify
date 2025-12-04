import React from 'react';
import { Link } from 'react-router-dom';
import './Portal.css';

const Contact = () => {
    return (
        <div className="app-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-logo">Healthify</div>
                <nav className="sidebar-nav">
                    <Link to="/portal" className="sidebar-link">
                        <span>🏠</span> Portal
                    </Link>
                    <Link to="/dashboard" className="sidebar-link">
                        <span>📊</span> Dashboard
                    </Link>
                    <Link to="/profile" className="sidebar-link">
                        <span>👤</span> My Profile
                    </Link>
                    <a href="#goals" className="sidebar-link">
                        <span>🎯</span> Wellness Goals
                    </a>
                    <a href="#messages" className="sidebar-link">
                        <span>💬</span> Messages
                    </a>
                    <a href="#logout" className="sidebar-link sidebar-logout">
                        <span>🚪</span> Logout
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="header-welcome">
                    <h1>Contact Us</h1>
                </div>

                <div className="wide-card">
                    <h3>Get in Touch</h3>
                    <p>We are here to help you. Fill out the form below or reach us via email or phone.</p>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
                        </div>

                        <button type="submit" style={{
                            backgroundColor: '#4a90e2',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}>Send Message</button>
                    </form>
                </div>

                <div className="wide-card">
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> support@healthcareportal.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Health Way, Wellness City, HC 10001</p>
                </div>
            </main>
        </div>
    );
};

export default Contact;
