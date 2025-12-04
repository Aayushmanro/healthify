import React from 'react';
import { Link } from 'react-router-dom';
import './Portal.css'; // Reusing the same CSS for consistency

const Contact = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Healthcare Portal</h1>
                <nav className="dashboard-nav">
                    <Link to="/portal">Home</Link>
                    <a href="#services">Services</a>
                    <Link to="/contact">Contact</Link>
                    <Link to="/profile">My Profile</Link>
                </nav>
            </header>

            <main className="dashboard-content">
                <h2>Contact Us</h2>

                <div className="info-card">
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

                        <button type="submit" className="read-more-btn">Send Message</button>
                    </form>
                </div>

                <div className="info-card">
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
