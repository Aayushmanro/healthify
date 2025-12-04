import React from 'react';
import './Portal.css';
import { healthTopics } from '../data/healthData';
import { Link } from 'react-router-dom';

const Portal = () => {
    const [selectedTopic, setSelectedTopic] = React.useState(null);

    const openModal = (topic) => {
        const randomDetail = topic.details[Math.floor(Math.random() * topic.details.length)];
        setSelectedTopic({ ...topic, details: randomDetail });
    };

    const closeModal = () => {
        setSelectedTopic(null);
    };
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Healthcare Portal</h1>
                <nav className="dashboard-nav">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <Link to="/contact">Contact</Link>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </header>

            <main className="dashboard-content">
                <h2>Latest Health Information</h2>

                {healthTopics.map((topic) => (
                    <div key={topic.id} className="info-card">
                        <h3>{topic.title}</h3>
                        <p>{topic.summary}</p>
                        <button
                            className="read-more-btn"
                            onClick={() => openModal(topic)}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </main>

            {selectedTopic && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>&times;</button>
                        <h3>{selectedTopic.title}</h3>
                        <p>{selectedTopic.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portal;
