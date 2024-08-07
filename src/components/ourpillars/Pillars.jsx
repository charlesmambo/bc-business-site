import React from 'react';
import MainImg from '../../assets/fnc.png';
import '../ourpillars/Pillars.css'

const Pillars = () => {
  return (
    <div className='pillars-content'>
     <div className="pillar-img">
     <img src={MainImg} alt="" />
     </div>
      

      <div className="abt-pillars">
        <h3>Our Pillars</h3>

        <div className="abt-pillar-desc">
            <h4>Expert Management</h4>
            <p>Accountant-led bookkeeping firm.</p>
        </div>
        <div className="abt-pillar-desc">
            <h4>Customer-Centric</h4>
            <p>Building relations, creating client value.</p>
        </div>
        <div className="abt-pillar-desc">
            <h4>Integrity</h4>
            <p>Prioritising compliance and data security.</p>
        </div>
      </div>
    </div>
  )
}

export default Pillars