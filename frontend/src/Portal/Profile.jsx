import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portal.css';

import axios from 'axios';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        phone: "",
        allergies: "",
        medications: ""
    });

    // Fetch profile on mount
    React.useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        'x-auth-token': token
                    }
                };
                const res = await axios.get('http://localhost:5000/api/profile', config);
                if (res.data) {
                    setProfileData(res.data);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            };
            await axios.post('http://localhost:5000/api/profile', profileData, config);
            setIsEditing(false);
            alert("Profile saved successfully!");
        } catch (err) {
            console.error("Error saving profile:", err);
            alert("Failed to save profile.");
        }
    };

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
                    <Link to="/profile" className="sidebar-link active">
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
                    <h1>My Profile</h1>
                </div>

                <div className="wide-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3>Personal Information</h3>
                        <button
                            style={{
                                backgroundColor: '#4a90e2',
                                color: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        >
                            {isEditing ? "Save Changes" : "Edit Profile"}
                        </button>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                    </form>
                </div>

                <div className="wide-card">
                    <h3>Health Information</h3>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="allergies">Allergies:</label>
                            <textarea
                                id="allergies"
                                name="allergies"
                                rows="3"
                                value={profileData.allergies}
                                onChange={handleChange}
                                disabled={!isEditing}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="medications">Current Medications:</label>
                            <textarea
                                id="medications"
                                name="medications"
                                rows="3"
                                value={profileData.medications}
                                onChange={handleChange}
                                disabled={!isEditing}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Profile;
