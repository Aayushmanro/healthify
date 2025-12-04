import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="app-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-logo">Healthify</div>
                <nav className="sidebar-nav">
                    <Link to="/dashboard" className="sidebar-link active">
                        <span>📊</span> Dashboard
                    </Link>
                    <Link to="/portal" className="sidebar-link">
                        <span>🏠</span> Portal
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
                    <h1>Welcome, David</h1>
                </div>

                {/* Wellness Goals */}
                <div className="section-title">Wellness Goals</div>
                <div className="wellness-grid">
                    {/* Steps Card */}
                    <div className="stat-card">
                        <div className="stat-icon">👟</div>
                        <div className="stat-label">Steps</div>
                        <div className="stat-value">3420</div>
                        <div className="stat-subtext">of 5000</div>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: '68%', backgroundColor: '#4a90e2' }}></div>
                        </div>
                    </div>

                    {/* Active Time Card */}
                    <div className="stat-card">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-label">Active Time</div>
                        <div className="stat-value">56</div>
                        <div className="stat-subtext">min/week | 1712 kcal | 1.2 km</div>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: '40%', backgroundColor: '#4a90e2' }}></div>
                        </div>
                    </div>

                    {/* Sleep Card */}
                    <div className="stat-card">
                        <div className="stat-icon">😴</div>
                        <div className="stat-label">Sleep</div>
                        <div className="stat-value">11:52 pm - 06:40 am</div>
                        <div className="stat-subtext">6h 30 mins</div>
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: '80%', backgroundColor: '#4a90e2' }}></div>
                        </div>
                    </div>
                </div>

                {/* Preventive Care Reminders */}
                <div className="wide-card">
                    <h3>Preventive Care Reminders</h3>
                    <p>Upcoming Annual Blood test on <span className="highlight-text">23rd Jan 2025</span></p>
                </div>

                {/* Health Tip of the Day */}
                <div className="wide-card">
                    <h3>Health Tip of the Day</h3>
                    <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
