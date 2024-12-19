import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleMenu}
        style={{
          backgroundColor: '#375A7F',
          border: 'none',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          position: 'absolute',
          top: '20px',
          left: '20px',
        }}
      >
        ☰
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '20px',
            backgroundColor: '#F7F9FC',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
            padding: '20px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: '#375A7F' }}>Home</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/rules" style={{ textDecoration: 'none', color: '#375A7F' }}>Rules</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/reports" style={{ textDecoration: 'none', color: '#375A7F' }}>Reports</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
