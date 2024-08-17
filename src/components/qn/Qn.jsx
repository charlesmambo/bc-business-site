import React, { useState } from 'react';
import '../qn/Qn.css';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Qn = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      title: "What is bookkeeping, and why is it important for my business?",
      content: "Bookkeeping involves systematically recording, organising, and tracking financial transactions in your business. It's essential for businesses because accurate bookkeeping helps you monitor your financial health, comply with SARS requirements, make informed decisions, and prepare for tax returns."
    },
    {
      title: "What qualifications and certifications do your bookkeepers hold?",
      content: "Our bookkeepers are certified professionals with expertise in tax laws, regulations, and accounting standards. We are an accountant-led practice, Our team holds qualifications such as ACCA & CIMA."
    },
    {
      title: "Do you offer advisory services in addition to basic bookkeeping?",
      content: "Yes, we offer financial and tax advisory services to help you make informed decisions, optimise your tax strategies, and plan for the future."
    },
    {
      title: "Do I need to hire a professional bookkeeper for my small business in the SA, or can I handle it myself?",
      content: "Whether to hire a bookkeeper depends on your business's size and complexity. While some small businesses manage bookkeeping in-house, hiring a professional can save you time, reduce errors, and ensure compliance with SA tax laws and regulations."
    },
    {
      title: "How often should I update my financial records?",
      content: "Most businesses update financial records monthly. However, some may do so weekly or even daily, depending on the volume of transactions. Regular updates help maintain accuracy and facilitate timely decision-making."
    },
    {
      title: "What documents and records should I keep for bookkeeping purposes in the SA?",
      content: "Essential records include sales invoices, purchase receipts, bank statements, payroll records, expense reports, and VAT records. Proper record-keeping is vital for SARS audits and tax filings."
    },
    {
      title: "How can bookkeeping help me with my SA tax obligations?",
      content: "Accurate bookkeeping ensures you report income and expenses correctly, claim eligible deductions, and meet tax deadlines. It also provides a clear financial trail for SARS audits, reducing the risk of penalties."
    },
    {
      title: "What software or tools do you recommend for bookkeeping in the SA?",
      content: "We recommend and advise using Xero which is included in our fee. If you are using Sage, Quickbooks, or LegalSuite, we offer a transfer service. If you don't use cloud-based software, we will set this up for you."
    },
    {
      title: "Can you help me set up a chart of accounts tailored to my SA business?",
      content: "Yes, we can create a custom chart of accounts to suit your business needs, ensuring that income and expenses are properly categorised for accurate reporting and analysis."
    },
    {
      title: "What is E-filing, and how does it affect my business's bookkeeping in the SA?",
      content: "E-filing is a powerful tool that modernizes how businesses in South Africa manage their tax obligations. By adopting E-filing, your business can simplify its bookkeeping processes, enhance accuracy, ensure compliance, and save time, all of which contribute to better financial management and operational efficiency."
    }
  ];

  return (
    <div className='qn-container'>
    <div className="qn-title">
      <h2>Have questions?</h2>
    </div>

    {questions.map((question, index) => (
      <div className="qn-content" key={index}>
        <div className="qn-desc-title">
          <h4>{question.title}</h4>
          <div className="qn-icons">
            <CiCirclePlus
              className='qn-icon'
              onClick={() => handleToggle(index)}
              style={{ display: activeIndex === index ? 'none' : 'block' }}
            />
            <CiCircleMinus
              className='qn-icon'
              onClick={() => handleToggle(index)}
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            />
          </div>
        </div>
        <div className={`qn-desc-content ${activeIndex === index ? 'show' : ''}`}>
          <p>{question.content}</p>
        </div>
      </div>
    ))}
  </div>
);
};

export default Qn;
