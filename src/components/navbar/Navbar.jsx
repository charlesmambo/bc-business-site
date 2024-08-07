import React, { useState } from 'react';
import '../navbar/Navbar.css';
import Logo from '../../assets/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
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
              <a href="" className='focus'>Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>

          <a href="#" className='contant-link'>
            <div className="contant-btn">
              <span>Contact</span>
            </div>
          </a>
        </div>

        <div className="drop-down-navbar">
          <div className="hamburger" onClick={toggleDropdown}>
            <GiHamburgerMenu />
          </div>
        </div>

        <div className={`drop-navbar ${isDropdownVisible ? 'visible' : ''}`}>
          <ul className='nav-item-list nav-dropdowns'>
            <li className='drop-down-items'>
              <a href="" className='focus'>Home</a>
            </li>
            <li className='drop-down-items'>
              <a href="">About</a>
            </li>
            <li className='drop-down-items'>
              <a href="">Services</a>
            </li>
            <li className='drop-down-items'>
              <a href="">Pricing</a>
            </li>
          </ul>

          <a href="#" className='dropdown-link'>
            <div className="dropdown-contactbtn">
              <span>Contact</span>
            </div>
          </a>

          <div className="close-btn" onClick={closeDropdown}>
            <IoMdClose className='close-btn-icon' />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
