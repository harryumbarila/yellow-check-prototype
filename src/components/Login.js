import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ backgroundColor: '#F7F9FC', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#375A7F' }}>Login</h2>
        <label style={{ display: 'block', marginTop: '10px' }}>Email</label>
        <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
