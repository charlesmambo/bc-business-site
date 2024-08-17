import React from 'react'
import Footer from '../footer/Footer';
import { RiSendToBack } from "react-icons/ri";
import '../requestQoute/Request.css'

const Request = () => {
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
                <input type="phone" name="Phone" placeholder='+27 81 673 5344' required autoComplete="off"/>
            </div>
            <div className="form-control">
                <label htmlFor="Phone">Message</label>
               <textarea name="message" placeholder='Your message' required ></textarea>
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