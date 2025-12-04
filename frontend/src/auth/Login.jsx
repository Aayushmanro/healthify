import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(user);

            const res = await axios.post('http://localhost:5000/api/auth/login', body, config);

            // Store token
            localStorage.setItem('token', res.data.token);

            navigate('/dashboard'); // Redirect to dashboard after login
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Welcome Back</h2>
                    <p style={{ color: '#888', marginTop: '10px' }}>Sign in to your account</p>
                </div>

                <form className="auth-form" onSubmit={e => onSubmit(e)}>
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="form-input"
                            value={email}
                            onChange={e => onChange(e)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="form-input"
                            value={password}
                            onChange={e => onChange(e)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Sign in
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Not a member?{' '}
                        <Link to="/register" className="auth-link">
                            Register now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
