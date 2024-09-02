import React, { useRef, useState } from 'react';
import '../contact/Contact.css';
import Footer from '../components/footer/Footer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form1 = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_h0nvism', 'template_67kvykq', form1.current, {
            publicKey: '2tEK2tuXt2FPqc5KF',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setShowSuccess(true);
              form1.current.reset();

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
    <>
      <div className='contact-container'>
        <div className="contact-intro">
          <h2>Contact us</h2>
          <p className='contact-intro-text'>Reach out to us with any questions, feedback, or inquiries. Our dedicated team is here to assist you.</p>

          <div className="contact-details">
            <h4>Contact</h4>
            <p>bookkeeper@kariwo.co.za</p>
            <p>+27 72 260 7628</p>
          </div>

          <div className="contact-details">
            <h4>Address</h4>
            <p>110 Pringle Road,</p>
            <p>Tijgerhof, Milnerton,</p>
            <p>Cape Town SA, 7441.</p>
          </div>
        </div>

        <form ref={form1} onSubmit={sendEmail}>
          <div className="form-control">
            <label htmlFor="fullName">Name</label>
            <input type="text" name="user_name" placeholder='Full Name' autoComplete="off" required  />
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input type="email" name="user_email" placeholder='example@gmail.com' required={true} autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="Phone">Phone</label>
            <input type="tel" name="user_phone" placeholder='+27 81 673 5344' required autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="Message">Message</label>
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
    </>
  );
}

export default Contact;
