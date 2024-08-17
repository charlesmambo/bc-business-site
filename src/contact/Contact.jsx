import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../contact/Contact.css';
import Footer from '../components/footer/Footer';

const Contact = () => {
  const form1 = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_y2q5yah', 'template_nlf5esy', form1.current, 'mXQbLhq7JTLs0tFp7')
      .then((result) => {
        setShowSuccess(true); // Show success message
        form1.current.reset(); // Reset the form after submission

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        alert('Error sending email. Please try again.');
        console.error('Email sending error:', error);
      });
  };

  return (
    <>
      <div className='contact-container'>
        <div className="contact-intro">
          <h2>Contact us</h2>
          <p className='contact-intro-text'>Reach out to us with any questions, feedback, or inquiries. Our dedicated team is here to assist you.</p>

          <div className="contact-details">
            <h4>Contact</h4>
            <p>kariwobookkeeping@books.com</p>
            <p>+27 72 260 7628</p>
          </div>

          <div className="contact-details">
            <h4>Address</h4>
            <p>12 Payton Street,</p>
            <p>Stratford-Upon-Avon,</p>
            <p>England, CV37 6UA.</p>
          </div>
        </div>

        <form ref={form1} onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="fullName">Name</label>
            <input type="text" name="name" placeholder='Full Name' autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" placeholder='example@gmail.com' required={true} autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="Phone">Phone</label>
            <input type="tel" name="phone" placeholder='2781673534974' required autoComplete="off" />
          </div>
          <div className="form-control">
            <label htmlFor="Message">Message</label>
            <textarea name="message" placeholder='Your message'></textarea>
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
