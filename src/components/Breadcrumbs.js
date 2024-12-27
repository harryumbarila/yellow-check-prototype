import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav style={{ marginBottom: '10px', fontSize: '14px' }}>
      <Link to="/dashboard" style={{ textDecoration: 'none', color: '#4A90E2' }}>Home</Link>
      {paths.map((path, index) => (
        <span key={index}>
          {' / '}
          <Link to={`/${path}`} style={{ textDecoration: 'none', color: '#4A90E2' }}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
