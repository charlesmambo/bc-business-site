import React from 'react';
import '../about/About.css';
import Pillars from '../components/ourpillars/Pillars';

const About = () => {
  return (
    <div className='abt'>
      <div className="abt-title">
        <h3>About Us</h3>
        <hr className='abt-divider' />
      </div>
      <div className="abt-content">
        <p>Welcome to Kariwo Bookkeeping Services, a fresh and disruptive digital bookkeeping service based in the vibrant city of Cape Town, South Africa. We are not your traditional bookkeeping firm with decades of experience under our belt. Instead, we are a new and dynamic team, eager to redefine the way bookkeeping services are delivered in today’s fast-paced digital world.</p>
        <hr className='abt-divider divider' />
        <p>At Kariwo Bookkeeping Services, we believe that trust is earned through action, not tenure. We don't ask you to trust us because of our years of experience; rather, we invite you to give us the chance to gain that experience by serving you. Our mission is to build new, meaningful, and lasting relationships with each of our clients by delivering precise, efficient, and innovative bookkeeping solutions that meet your unique needs.</p>
        <hr className='abt-divider divider' />
        <p>Our approach is centered on leveraging cutting-edge technology to streamline your financial processes, giving you more time to focus on what truly matters—growing your business. We are passionate about growth—both yours and ours—and see each partnership as an opportunity to learn, adapt, and excel together.</p>
        <hr className='abt-divider divider' />
        <p>As we embark on this journey, we are guided by the belief that every business, like every person, starts somewhere. Just as a child grows and learns with each new experience, we too are committed to growing with you, continually improving and innovating to provide the best possible service.</p>
        <hr className='abt-divider divider' />
        <p>To quote the famous thinker, Ralph Waldo Emerson: "The creation of a thousand forests is in one acorn." At Kariwo Bookkeeping Services, we see ourselves as that acorn—small, new, and full of potential. We are excited to grow and flourish with you, creating something extraordinary together.
        <b>Join us on this journey.</b> Let’s build something lasting.
        </p>
       
      </div>

      <div className="our-pillars">
        <Pillars />
      </div>
    </div>
  )
}

export default About
