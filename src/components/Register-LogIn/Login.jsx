import React, { useContext, useState } from 'react';
import './Login.css';
import { myContext } from '../Context/myContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { registerDetails, setlogin } = useContext(myContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const nav = useNavigate();

    const handleConfirm = () => {
        setError(''); // Clear previous error messages

        if (email == 'admin@gmail.com' && password == 'admin') {
            nav("/dashboard")
        }

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields.');
            return;
        }

        // Basic email format validation
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format.');
            return;
        }

        const user = registerDetails.find(data => data.Email === email);

        if (!user) {
            setError('User not found. Please sign up.');
        } else if (user.banned) {
            setError('User is banned by admin. Please contact service provider.');
        } else if (user.Password !== password) {
            setError('Incorrect password. Please try again.');
        } else {
            alert('Successfully Logged In'); // Consider replacing with more user-friendly UI
            setlogin(user);
            console.log([user]);
            nav('/');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button className="btn-login" onClick={handleConfirm}>
                    Login
                </button>
                <br />
                {error && <h4 style={{ color: 'red', fontSize: '16px' }}>{error}</h4>}
                <button className="btn-login" onClick={() => nav('/register')}>
                    Sign up
                </button>
            </div>
        </div>
    );
};
