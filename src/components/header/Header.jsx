import React, { useState } from 'react';
import '../header/Header.css';
import ProfileImg from '../../assets/profile.jpg';
import { FaPlus, FaMinus } from "react-icons/fa";

const Header = () => {
  const [services, setServices] = useState([
    { title: 'Accountant-led bookkeeping', description: ['Highly qualified accountants & bookkeepers accredited by ACCA and CIMA.', 'Experts in Xero, Sage, and QuickBooks', 'Strategic financial insights to help your business grow'], showDescription: false },
    { title: 'Client-centric approach', description: ['Dedicated point of contact who knows your business inside and out.', 'Proactive guidance to maximise your financial success and cost-efficiency.', 'Custom solutions that fit your business.'], showDescription: false },
    { title: 'Security and compliance', description: ['We adhere to UK & EU GDPR, SOC II, and Cloud Security Alliance standards.', 'Upholding industry best practices.', 'Preparation in compliance with HMRC.'], showDescription: false }
  ]);

  const toggleDescription = (index) => {
    setServices(services.map((service, i) => 
      i === index ? { ...service, showDescription: !service.showDescription } : service
    ));
  };

  return (
    <div className='intro-container'>
      <div className="intro-card card-content">
        <h1>Streamline Your Finances</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-content" key={index}>
              <div className="services-title">
                <h3>{service.title}</h3>
                <div className="services-icon">
                  {service.showDescription ? (
                    <FaMinus className='icon' onClick={() => toggleDescription(index)} />
                  ) : (
                    <FaPlus className='icon' onClick={() => toggleDescription(index)} />
                  )}
                </div>
              </div>
              <div className={`service-descriptions ${service.showDescription ? 'show' : ''}`}>
                {service.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <form className='contact-form'>
            <input type="text" name="email" placeholder='Enter your email' />
            <button type='submit'>Request Quote</button>
        </form>
      </div>
      <div className="intro-card card-img">
        <img src={ProfileImg} alt="Profile" />
        <p className='tag-text'>Grow your business with financial clarity</p>
      </div>
    </div>
  );
};

export default Header;
