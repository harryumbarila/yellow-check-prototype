import React from 'react';
import { Link } from 'react-router-dom';

const MenuHamburger = () => {
  return (
    <aside style={{ width: '60px', backgroundColor: '#375A7F', color: 'white', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '20px 0', textAlign: 'center' }}>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa fa-home" style={{ fontSize: '20px' }}></i>
              <p>Home</p>
            </Link>
          </li>
          <li style={{ margin: '20px 0' }}>
              <Link to="/adjustments" style={{ color: 'white', textDecoration: 'none' }}>
                <i className="fa fa-cogs" style={{ fontSize: '20px' }}></i>
                <p style={{ margin: '5px 0' }}>Adjustments</p>
              </Link>
              </li>
          <li style={{ margin: '20px 0', textAlign: 'center' }}>
            <Link to="/reports" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa fa-file" style={{ fontSize: '20px' }}></i>
              <p>Reports</p>
            </Link>
          </li>
          <li style={{ margin: '20px 0', textAlign: 'center' }}>
            <Link to="/rules" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa fa-list" style={{ fontSize: '20px' }}></i>
              <p>Rules</p>
            </Link>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
            </ul>
          </li>
              <li style={{ margin: '20px 0', textAlign: 'center' }}>
      <Link to="/generated-files" style={{ color: 'white', textDecoration: 'none' }}>
        <i className="fa fa-file-excel" style={{ fontSize: '20px' }}></i>
        <p>Generated Files</p>
      </Link>
    </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MenuHamburger;
