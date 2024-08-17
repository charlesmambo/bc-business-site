import React, { useState } from 'react';
import '../footer/Footer.css';
import Logo from '../../assets/logo.svg';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  return (
   <footer>
        <div className="footer-logo">
            <h2>Kariwo Book Keeping</h2>
            <p>Accountant-Led Bookkeeping <br />To Elevate Your Business</p>
        </div>
        <ul className='footer-links'>
             <h4>
                Navigate
            </h4>
            <li>
            <Link
                to="/"
                className={activeLink === 'home' ? 'focus' : ''}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </li>
            <li className='navigate-links'>
            <Link
                to="/services"
                className={activeLink === 'services' ? 'focus' : ''}
                onClick={() => handleLinkClick('services')}
              >
                Services
              </Link>
            </li>
            <li>
            <Link
                to="/pricing"
                className={activeLink === 'pricing' ? 'focus' : ''}
                onClick={() => handleLinkClick('pricing')}
              >
                Pricing
              </Link>
              </li>
        </ul>

        <ul className='ft ft-socials'>
            <h4>
                Get in touch
            </h4>
            {/* <li className='ctc-links'>
                <a href="">Contact</a>
            </li> */}
            <li  className='ctc-links'>
                <Link
                to="/request"
                className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                onClick={() => handleLinkClick('request')}
              >
                    Request Quote
                    </Link>
            </li>
        </ul>
        <ul className='footer-links ft'>
            <h4>
            Legal
            </h4>
               <li>
                <a href="">Privacy Policy</a>
            </li>
            <li className='navigate-links'>
                <a href="">Terms of Service</a>
            </li>
        </ul>

        <ul className='footer-links ft-icons'>
            <h4>
           Follow 
            </h4>
            <div className="social-icon">
            <li>
                <a href=""><FaFacebook /></a>
            </li>
            <li>
                <a href=""><FaLinkedin /></a>
            </li>
            <li>
                <a href=""><FaTwitter /></a>
            </li>
            </div>
          
        </ul>
   </footer>
  )
}

export default Footer