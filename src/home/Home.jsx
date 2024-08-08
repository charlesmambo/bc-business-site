import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import '../home/Home.css'
import About from '../about/About';
import Footer from '../components/footer/Footer';


const Home = ({ scrollToAbout, aboutRef }) => {
  // const aboutRef = useRef(null);

  // const scrollToAbout = () => {
  //   if (aboutRef.current) {
  //     aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <div className='home'>
        <Navbar scrollToAbout={scrollToAbout} />
        <Header />
        

        <div className="box">

        </div>

        <div className="abt-us" ref={aboutRef}>
        <About />
      </div>

        <div className="footer">
          <Footer />
        </div>
    </div>
  )
}

export default Home