import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portal.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 000-0000",
        allergies: "Peanuts, Penicillin",
        medications: "Lisinopril 10mg, Multivitamin"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, this would send data to the backend
        alert("Profile saved successfully!");
    };

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
                <h2>My Profile</h2>

                <div className="info-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3>Personal Information</h3>
                        <button
                            className="read-more-btn"
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

                <div className="info-card">
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
