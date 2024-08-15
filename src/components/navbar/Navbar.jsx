import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../navbar/Navbar.css';
import Logo from '../../assets/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ scrollToAbout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // New hook to get the current path

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  const handleLinkClick = (link) => {
    closeDropdown(); // Close dropdown after clicking the link
    if (link === '/about') {
      navigate('/');
      setTimeout(scrollToAbout, 100);
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="logo image" />
        </div>

        <div className="nav">
          <ul className='nav-item-list'>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'focus' : ''}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname === '/services' ? 'focus' : ''}
                onClick={() => handleLinkClick('/services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={location.pathname === '/pricing' ? 'focus' : ''}
                onClick={() => handleLinkClick('/pricing')}
              >
                Pricing
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className={`contant-link ${location.pathname === '/contact' ? 'focus' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            <div className="contant-btn">
              <span>Contact</span>
            </div>
          </Link>
        </div>

        <div className="drop-down-navbar">
          <div className="hamburger" onClick={toggleDropdown}>
            <GiHamburgerMenu />
          </div>
        </div>

        <div className={`drop-navbar ${isDropdownVisible ? 'visible' : ''}`}>
          <ul className='nav-item-list nav-dropdowns'>
            <li className='drop-down-items'>
              <Link
                to="/"
                className={location.pathname === '/' ? 'focus' : ''}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li className='drop-down-items'>
              <a
                href="#"
                className={location.pathname === '/about' ? 'focus' : ''}
                onClick={() => handleLinkClick('/about')}
              >
                About
              </a>
            </li>
            <li className='drop-down-items'>
              <Link
                to="/services"
                className={location.pathname === '/services' ? 'focus' : ''}
                onClick={() => handleLinkClick('/services')}
              >
                Services
              </Link>
            </li>
            <li className='drop-down-items'>
              <Link
                to="/pricing"
                className={location.pathname === '/pricing' ? 'focus' : ''}
                onClick={() => handleLinkClick('/pricing')}
              >
                Pricing
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className={`dropdown-link ${location.pathname === '/contact' ? 'focus' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            <div className="dropdown-contactbtn">
              <span>Contact</span>
            </div>
          </Link>

          <div className="close-btn" onClick={closeDropdown}>
            <IoMdClose className='close-btn-icon' />
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  scrollToAbout: PropTypes.func.isRequired,
};

export default Navbar;
