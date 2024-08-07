import React from 'react'
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import '../home/Home.css'
import About from '../about/About';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        

        <div className="box">

        </div>

        <div className="abt-us">
            <About />
        </div>

        <div className="footer">
          <Footer />
        </div>
    </div>
  )
}

export default Home