// src/pages/Landing/Landing.js
import React from 'react';
import Header from '../../components/Layout/Header/Header';
import CareDuelBanner from '../../components/CareDuelBanner';
import AwardsPanels from '../../components/AwardsPanels';
import HeroSection from '../../components/Landing/HeroSection/HeroSection';

const Landing = () => {
  return (
    <div className="landing">
      <Header isLandingPage={true} />
      <CareDuelBanner />
      <AwardsPanels />
      <HeroSection />
    </div>
  );
};

export default Landing;
