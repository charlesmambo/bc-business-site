import React from 'react'
import Footer from '../footer/Footer';
import { RiSendToBack } from "react-icons/ri";
import '../requestQoute/Request.css'

const Request = () => {
  return (
    <div>
            <div className='contact-container'>
       <div className="contact-intro">
        <h2>Request a quote</h2>
        <p className='contact-intro-text'>Discover how BC Books Books can assist with your finance management and bookkeeping.</p>

        <div className="contact-details">
        <RiSendToBack className='request-icon'/>
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
    </div>

  )
}

export default Request