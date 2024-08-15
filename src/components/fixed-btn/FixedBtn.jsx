import React, { useState } from 'react';
import '../fixed-btn/FixedBtn.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';


const FixedBtn = () => {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='fixed-btn-container'>
      <div className="btn contact-us">
        <IoIosArrowDroprightCircle className='fixed-btn-icon' />
        <Link
          to="/contact"
          className={`contant-link ${activeLink === 'contact' ? 'active' : ''}`}
          onClick={() => handleLinkClick('contact')}
        >
          Contact Us
        </Link>
      </div>
      <div className="btn">
        <IoIosArrowDroprightCircle className='fixed-btn-icon' />
        <Link
          to="/request"
          className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
          onClick={() => handleLinkClick('request')}
        >
          Request Quote
          </Link>
      </div>
    </div>
  );
}

export default FixedBtn;
