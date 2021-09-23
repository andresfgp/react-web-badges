import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.svg';
import '../assets/styles/components/Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='container-fluid'>
        <Link to='/web-badges' className='Navbar__brand'>
          <img className='Navbar__brand-logo' src={logo} alt='Logo' />
          <span className='fw-light'>Home</span>
          <span className='fw-bold'>Conf</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
