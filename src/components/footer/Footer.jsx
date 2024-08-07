import React from 'react';
import '../footer/Footer.css';
import Logo from '../../assets/logo.svg';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
   <footer>
        <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <p>Accountant-Led Bookkeeping <br />To Elevate Your Business</p>
        </div>
        <ul className='footer-links'>
             <h4>
                Navigate
            </h4>
            <li>
                <a href="">Home</a>
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

        <ul className='ft'>
            <h4>
                Get in touch
            </h4>
            {/* <li className='ctc-links'>
                <a href="">Contact</a>
            </li> */}
            <li  className='ctc-links'>
                <a href="">Request a Quote</a>
            </li>
        </ul>
        <ul className='footer-links ft'>
            <h4>
            Legal
            </h4>
               <li>
                <a href="">Privacy Policy</a>
            </li>
            <li>
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