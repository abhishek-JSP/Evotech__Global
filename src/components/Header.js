
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to={"login"} className='login'>
        <button className='login_btn'>Admin Login</button>
        </Link>
        <h1>Survey App</h1>
        <p>Collecting valuable feedback from our users.</p>
      </div>
    </header>
  );
};

export default Header;
