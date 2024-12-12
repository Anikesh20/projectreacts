
import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import CounterSection from './components/CounterSection';
import AboutUsSection from './components/AboutUsSection';
import InTheNews from './components/InTheNews';
import IntoTheGroup from './components/IntoTheGroup';
import MediaHub from './components/MediaHub';
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
      <InTheNews />
      <IntoTheGroup />
      <MediaHub />
      <Persons/>
      <Footer />
    </div>
  );
}

export default App;
