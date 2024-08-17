import React, { useState } from 'react'; 
import '../pricing/Pricing.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Footer from '../components/footer/Footer';
import FixedBtn from '../components/fixed-btn/FixedBtn';
import { Link, useNavigate } from 'react-router-dom';


const Pricing = () => {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  return (
    <div>
    <div className='pricing-container'>
     <div className="pricing-content">
        <div className="pricing-title">
            <h3>General Bookkeeping plans</h3>
            <hr className='abt-divider  price-divider' />
        </div>

        <FixedBtn />
        <div className="pricing-cards-container">
            <div className="p-card">
                <h4>16 hours per month</h4>
                <p className='price-text'>
                    <span className='highlighted'>
                    R585.27
                    </span> Per hour (excl VAT)</p>
                <p>Perfect for small businesses ith minimal bookkeeping looking to expand their financial management</p>

                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div>
 
            <div className="p-card">
                <h4>20 hours per month</h4>
                <p className='price-text'>
                    <span className='highlighted'>
                    R585.27
                    </span> Per hour (excl VAT)</p>
                <p>Perfect for small businesses looking to manage their finances accordingly</p>

                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div>

            <div className="p-card">
                <h4>24 hours per month</h4>
                <p className='price-text'>
                    <span className='highlighted'>
                    R526.75
                    </span> Per hour (excl VAT)</p>
                <p>A plan for businesses seeking comprehensive financial control and growth.</p>

               
                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div> 

                      <div className="p-card">
                <h4>28 hours per month</h4>
                <p className='price-text'>
                    <span className='highlighted'>
                    R526.45
                    </span> Per hour (excl VAT)</p>
                <p>The ideal growth plan for small businesses to get you started on your financial journey with essential features.</p>

                {/* get a quote btn */}
                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                    <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                    
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div>

            <div className="p-card">
                <h4>32 hours per month</h4>
                <p className='price-text'>
                    <span className='highlighted'>
                    R467.95
                    </span> Per hour (excl VAT)</p>
                <p>Perfect for businesses looking to expand their financial capabilities with advanced bookkeeping and forecasts</p>

                {/* get a quote btn */}
                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div>

            <div className="p-card">
                <h4>Enterprise Solution</h4>
                <p className='price-text'>
                POA
                </p>
                <p>The ultimate plan for businesses seeking comprehensive financial control and growth for SME's, startups and established business</p>

                {/* get a quote btn */}
                <a className='price-link' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text'>
                   Get a Quote
                    </span> 
                    </Link>
                 </a>
                
                <ul className='card-list'>
                    <p>Includes</p>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accountant Led
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Transaction Recording
                    </li>
                    <li>
                        <FaCheckCircle  className='price-check-icon' />
                        Bank Reconciliation
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Accounts Payable/Receivable
                    </li>
                    <li>
                        <FaCheckCircle className='price-check-icon' />
                        Expense Tracking
                    </li>
                </ul>
            </div>

        </div>
     </div>

     <div className="other-services">
        <div className="other-services-header">
            <div className="title">
                <h4>Other services</h4>
                <p>Request a quote to receive a detailed proposal</p>
            </div>

            <a className='price-link other-services-btn' href="">
                <IoIosArrowDroprightCircle className='pricing-icon'/>
                    {/* <span className='price-link-text' >
                    Get a Quote
                    </span> */}

                    <Link
                     to="/request"
                    className={`contant-link ${activeLink === 'request' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('request')}
                     >
                   <span className='price-link-text other-services-link'>
                   Get a Quote
                    </span> 
                    </Link>
            </a>
        </div>

        <div className="other-service-content">
            <div className="other-service-content-card">
                <p>Cash flow & profit forecasts</p>
                <p>End of year accounts preperation</p>
                <p>Stakeholder Board Packs</p>
            </div>
            <div className="other-service-content-card">
                <p>VAT Preparation</p>
                <p>CIS Guidance</p>
                <p>Transition to a New Accounting Basis</p>
            </div>
            <div className="other-service-content-card">
                <p>VAT reconciliation</p>
                <p>Advisory</p>
                <p>Benchmark Reports</p>
            </div>
            
        </div>
     </div>

    
    </div>
    
         <Footer />
    </div>
  )
}

export default Pricing
