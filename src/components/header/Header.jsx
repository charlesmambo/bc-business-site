import React, { useState } from 'react';
import '../header/Header.css';
import ProfileImg from '../../assets/img.jpg';

const Header = () => {
  const [services, setServices] = useState([
    { title: 'Accountant-led bookkeeping', description: ['Highly qualified accountants & bookkeepers accredited by ACCA and CIMA.', 'Experts in Xero, Sage, and QuickBooks', 'Strategic financial insights to help your business grow'], showDescription: false },
    { title: 'Client-centric approach', description: ['Dedicated point of contact who knows your business inside and out.', 'Proactive guidance to maximise your financial success and cost-efficiency.', 'Custom solutions that fit your business.'], showDescription: false },
    { title: 'Security and compliance', description: ['We adhere to SA & EU GDPR, SOC II, and Cloud Security Alliance standards.', 'Upholding industry best practices.', 'Preparation in compliance with SARS.'], showDescription: false }
  ]);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true); // Initially assuming email is valid
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleMouseEnter = (index) => {
    setServices(services.map((service, i) => 
      i === index ? { ...service, showDescription: true } : service
    ));
  };

  const handleMouseLeave = (index) => {
    setServices(services.map((service, i) => 
      i === index ? { ...service, showDescription: false } : service
    ));
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Basic email validation using regex
    setEmailValid(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid) {
      setIsSubmitting(true);

      // Simulate request submission
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail(''); // Reset email input

        // Show success message for 10 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 2000);
      }, 1000);
    } else {
      // Optionally display an error message or handle invalid email case
      console.log('Invalid email');
    }
  };

  return (
    <div className='intro-container'>
      <div className="intro-card card-content">
        <h1>Streamline Your <br />Finances</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              className="service-content" 
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="services-title">
                <h3 className='s-title'>{service.title}</h3>
              </div>
              <div className={`service-descriptions ${service.showDescription ? 'show' : ''}`}>
                {service.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <form className='contact-form' onSubmit={handleSubmit}
        action={`mailto:chylah11st@gmail.com?subject=Request%20Quote&body=${encodeURIComponent(email)}`} method="get" encType="text/plain">
          <input 
            type="text" 
            name="email" 
            placeholder='Enter your email' 
            value={email} 
            onChange={handleEmailChange} 
            required={true}
            className={!emailValid ? 'invalid' : ''}
          />
          {isSubmitting ? (
            <button type='button' disabled className='wait-btn'>Please wait...</button>
          ) : (
            <button type='submit'>Request Quote</button>
          )}
          {showSuccess && (
            <div className="success-box" aria-live="polite">
              <p>Thank you! Your submission has been received!</p>
            </div>
          )}
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
