import React from 'react'
import logo from '../assets/static/logo.svg'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <a href='/' className="Navbar__brand">
                    <img className='Navbar__brand-logo' src={logo} alt='Logo'/>
                    <span className='fw-light'>Home</span>
                    <span className='fw-bold'>Conf</span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
