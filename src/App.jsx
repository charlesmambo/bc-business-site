import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import About from './about/About'
import Services from './services/Services';
import Pricing from './pricing/Pricing';
import Contact from './contact/Contact';
// import About from './components/about/About';
// import Services from './components/services/Services';
// import Pricing from './components/pricing/Pricing';
// import Contact from './components/contact/Contact';

const App = () => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home scrollToAbout={scrollToAbout} aboutRef={aboutRef} />} />
      <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/contact" element={<Contact />} /> 
        {/* // <Route path="/services" element={<Services />} />
        // <Route path="/pricing" element={<Pricing />} />
        // <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
