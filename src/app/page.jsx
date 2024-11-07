"use client";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/common/sections/HeroSection'
import OurServices from './components/common/sections/OurServices';
import AboutUs from './components/common/sections/AboutUs';
import Portfolio from './components/common/sections/Portfolio';
import Career from './components/common/sections/Career'
import GetInTouch from './components/common/sections/GetInTouch';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <OurServices />
      <AboutUs />
      <Portfolio />
      <Career/>
      <GetInTouch />
      <Footer />
    </div>
  );
}
