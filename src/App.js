
import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import CounterSection from './components/CounterSection';
import AboutUsSection from './components/AboutUsSection';
import Persons from './components/Persons';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <GallerySection />
      <CounterSection />
      <AboutUsSection />
      <Persons/>
      <Footer />
    </div>
  );
}

export default App;
