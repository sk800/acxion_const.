import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit =async (event) => {
        event.preventDefault();

       
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        const formData = {
            username,
            email,
            password,
        };

        try {
            
            const response = await axios.post('/api/signup', formData);

           
            console.log('Signup successful!');
           
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred while processing your request.');
        }
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        
        
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2>Sign Up</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                    }}
                >
                    Sign Up
                </button>
                {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Signup;