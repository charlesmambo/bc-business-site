import React from 'react';
import '../services/Services.css';
import Qn from '../components/qn/Qn';
import Footer from '../components/footer/Footer';
import FixedBtn from '../components/fixed-btn/FixedBtn';

const Services = () => {
  return (
    <div>
    <div className='services'>
         <div className="abt-title service-title">
        <h2>Discover our services</h2>
        <hr className='abt-divider divider' />
      </div>
      <FixedBtn />
        <div className="services-content">
           <div className="service-box">
             <h4>Bookkeeping services - monthly retainers</h4>
             <p>Starting from 16 hours per month - choose from a range of reconciliation options and processing services, including debtors, creditors, bank reconciliation, accounts receivable, accounts payable, loan accounts, balance sheet, credit card statements, inter-company loans, director loans, and journals.</p>
             <div className="number">
                <p>1</p>
            </div>
           </div>

           <div className="service-box">
             <h4>Transition to a New Accounting Basis</h4>
             <p>Streamline your transition to a new accounting basis with our expert services, which encompass the seamless migration of your ledger onto Xero. We ensure a smooth and hassle-free transition process, enabling you to harness the power of Xero's robust accounting platform effortlessly.</p>
             <div className="number">
                <p>2</p>
            </div>
           </div>

           <div className="service-box">
             <h4>Payroll Services </h4>
             <p>Starting from 16 hours per month, our payroll services offer a comprehensive range of processing and management options. Choose from employee salary processing, tax and statutory deductions, payslip generation, UIF and PAYE submissions, leave management, overtime calculations, employee benefits administration, and payroll reporting. Our services ensure accurate and timely payroll management, allowing you to focus on growing your business while we handle the complexities of payroll compliance.</p>
             <div className="number">
                <p>3</p>
            </div>
           </div>

           <div className="service-box">
             <h4>VAT Preparation</h4>
             <p>Streamline your VAT preparation with our dedicated services. We meticulously organise and prepare your VAT records, ensuring they are accurate and ready for submission, saving you time and minimising further accountacy fees or penalties from SARS.</p>
             <div className="number">
                <p>4</p>
            </div>
           </div>
 
           <div className="service-box">
             <h4>VAT reconciliation</h4>
             <p>Ensure VAT compliance with ease and accuracy through our specialised VAT Reconciliation Services, designed for businesses managing up to 25 transactions per month. Our tailored approach streamlines the reconciliation process, providing you with meticulous records, minimised errors, and peace of mind.</p>
             <div className="number">
                <p>5</p>
            </div>
           </div>

           <div className="service-box">
             <h4>End of year accounts preparation</h4>
             <p>Achieve a seamless and stress-free Financial Year End with our expert Preparation and Finalisation services. Tailored for businesses of all sizes, our dedicated team ensures accurate financial reporting, compliance adherence, and strategic insights to set the stage for success in the upcoming fiscal year.</p>
             <div className="number">
                <p>6</p>
            </div>
           </div> 

            <div className="service-box">
             <h4>Hospitality Compliance Services</h4>
             <p>Optimize your operations and master the complexities of the hospitality industry in South Africa with our expert services. Whether you manage a restaurant, hotel, or catering business, our guidance ensures efficient food cost management, compliance, and operational success.</p>
             <div className="number">
                <p>7</p>
            </div>
           </div>

           <div className="service-box">
             <h4>Advisory</h4>
             <p>Gain valuable insights into your business's financial health and future prospects with our advisory session. We cover a wide range of topics, including business strategy, growth planning, compliance, tax optimisation, and more. Our ongoing consultancy packages ensure you stay on top of your financial game, making year-end reporting and audits a breeze.</p>
             <div className="number">
                <p>8</p>
            </div>
           </div> 


           <div className="service-box">
             <h4>12 months Cash Flows and Profit Forecasts</h4>
             <p>Gain valuable insights with our detailed 12-month Forecast and Budget breakdown, covering Cash Flow, Profit and Loss, and Balance Sheet projections on a monthly basis. This analysis is expertly crafted for easy presentation to stakeholders or your bank manager, empowering you with the financial data you need for informed decision-making and effective communication.</p>
             <div className="number">
                <p>9</p>
            </div>
           </div>


        </div>
    </div>
    <Qn />

    <div className="footer">
          <Footer />
        </div>
    </div>

  
  )
}

export default Services
