import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../public/logo192.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-blog">Add Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;