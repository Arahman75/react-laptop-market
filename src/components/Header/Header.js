import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../image/logo.png';

const Header = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashboard">DashBoard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;