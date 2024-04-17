import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit =async (event) => {
        event.preventDefault(); 

        
        if (username && password) {

          const formData = {
            username,
            password,
        };

        try {
          
            const response = await axios.post('/api/login', formData);

            
            console.log('Login successful!');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Invalid username or password. Please try again.');
        }
            
          
            
        } else {
            
            setErrorMessage('Please enter both username and password.');
        }
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
                <h2>Login</h2>
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
                    Login
                </button>
                {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;
  

