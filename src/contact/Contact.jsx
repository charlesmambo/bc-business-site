import React from 'react';
import '../contact/Contact.css'
import Footer from '../components/footer/Footer';

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
       <div className="contact-intro">
        <h2>Contact us</h2>
        <p className='contact-intro-text'>Reach out to us with any questions, feedback, or inquiries. Our dedicated team is here to assist you.</p>

        <div className="contact-details">
            <h4>Contact</h4>
            <p>bcbooks@books.com</p>
            <p>+27 7897 013587</p>
        </div>

        <div className="contact-details">
            <h4>Address</h4>
            <p>12 Payton Street,</p>
            <p>Stratford-Upon-Avon,</p>
            <p>England, CV37 6UA.</p>
        </div>
       </div>

       <form>
            <div className="form-control">
                <label htmlFor="fullName">Name</label>
                <input type="text" name="Name" placeholder='Full Name' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" placeholder='example@gmail.com' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Phone</label>
                <input type="phone" name="Phone" placeholder='2781673534974' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Message</label>
               <textarea name="message" placeholder='Your message'></textarea>
            </div>
            <div className="form-btn">
                <button type='submit'>Send Message</button>
            </div>
        </form>
    </div>
    <Footer />
    </>
  )
}

export default Contact