import './App.css';
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
