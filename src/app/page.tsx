"use client";
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import HeroSection from './components/common/sections/Banner/HeroSection';
import OurServices from './components/common/sections/Service/OurServices';
import AboutUs from './components/common/sections/About/AboutUs';
import Portfolio from './components/common/sections/Portfolio/Portfolio';
import Career from './components/common/sections/Carrer/Career';
import GetInTouch from './components/common/sections/ContactUs/GetInTouch';

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
