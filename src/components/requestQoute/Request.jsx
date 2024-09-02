import React, { useRef, useState } from 'react';
import Footer from '../footer/Footer';
import { RiSendToBack } from "react-icons/ri";
import '../requestQoute/Request.css';
import emailjs from '@emailjs/browser';

const Request = () => {
    const form2 = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
          .sendForm('service_toa2ehj', 'template_vq3vc5j', form2.current, {
            publicKey: '5avLyIcJgjZw9YL8G',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                setShowSuccess(true);
                form2.current.reset();
  
                setTimeout(() => {
                      setShowSuccess(false);
                    }, 3000);
              },
              (error) => {
                console.log('FAILED...', error.text);
                alert('Error sending email. Please try again.');
              },
            );
  
            e.target.reset();
        };
  
  return (
    <div className='request'>
            <div className='contact-container'>
       <div className="contact-intro">
        <h2>Request a quote</h2>
        {/* <p className='contact-intro-text'>Ready to take your bookkeeping to the next level?</p> */}

        <p className='contact-intro-text'>Let us provide you with a tailored solution that fits your unique needs. Leave us your details, and we'll get back to you with a personalized quote. Whether you're a small business or a growing enterprise, Kariwo Bookkeeping Services is here to support your financial journey.</p>

        <div className="contact-details">
        <RiSendToBack className='request-icon'/>
        </div>
       </div>

       <form ref={form2} onSubmit={sendEmail}>
            <div className="form-control">
                <label htmlFor="fullName">Name</label>
                <input type="text" name="user_name" placeholder='Full Name' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Email">Email</label>
                <input type="text" name="user_email" placeholder='example@gmail.com' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Phone</label>
                <input type="phone" name="user_phone" placeholder='+27 81 673 5344' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Message</label>
               <textarea name="user_message" placeholder='Your message' required ></textarea>
            </div>
            <div className="form-btn">
                <button type='submit'>Send Message</button>
            </div>
        </form>

        {showSuccess && (
          <div className="success-box ctc-success-box" aria-live="polite">
            <p>Thank you! Your message has been sent!</p>
          </div>
        )}
    </div>
    <Footer />
    </div>

  )
}

export default Request