import React from 'react';
import '../fixed-btn/FixedBtn.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const FixedBtn = () => {
  return (
    <div className='fixed-btn-container'>
      <div className="btn contact-us">
       <IoIosArrowDroprightCircle className='fixed-btn-icon'/>
        <a href="">Contact Us</a>
      </div>
      <div className="btn">
      <IoIosArrowDroprightCircle className='fixed-btn-icon'/>
        <a href="">Request Quote</a>
      </div>
    </div>
  )
}

export default FixedBtn
