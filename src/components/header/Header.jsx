import React, { useRef, useState } from 'react';
import '../header/Header.css';
import ProfileImg from '../../assets/img.jpg';
import { FaPlus, FaMinus } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Header = () => {
  const [services, setServices] = useState([
    { title: 'Accountant-led bookkeeping', description: ['Highly qualified accountants & bookkeepers accredited by ACCA and CIMA.', 'Experts in Xero, Sage, and QuickBooks', 'Strategic financial insights to help your business grow'], showDescription: false },
    { title: 'Client-centric approach', description: ['Dedicated point of contact who knows your business inside and out.', 'Proactive guidance to maximise your financial success and cost-efficiency.', 'Custom solutions that fit your business.'], showDescription: false },
    { title: 'Security and compliance', description: ['We strictly adhere to the Protection of Personal Information Act (POPIA).', 'We uphold the industries best practices.', 'Preparation in compliance with SARS.'], showDescription: false }
  ]);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true); // Initially assuming email is valid
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleDescription = (index) => {
    setServices(services.map((service, i) => 
      i === index ? { ...service, showDescription: !service.showDescription } : service
    ));
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Basic email validation using regex
    setEmailValid(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (emailValid) {
      setIsSubmitting(true);

      emailjs
        .sendForm('service_6pj5tlt', 'template_8fjd8nd', form.current, 'mXQbLhq7JTLs0tFp7')
        .then(() => {
          setIsSubmitting(false);
          setShowSuccess(true);
          setEmail(''); // Reset email input
          form.current.reset();

          // Show success message for 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          console.log('Failed to send email:', error);
          setIsSubmitting(false);
        });
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
            <div className="service-content" key={index}>
              <div className="services-title">
                <h3 className='s-title'>{service.title}</h3>
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
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_email" 
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
