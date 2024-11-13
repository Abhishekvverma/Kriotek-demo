/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavLinks,
  ButtonContainer,
  HamburgerIcon,
} from './HeaderStyles';


const Header: React.FC= () => {
  const [isLogin, setIsLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setIsLogin(!isLogin);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/Original Logo.png" alt="Logo" />
      </LogoContainer>

      <HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </HamburgerIcon>

      <NavContainer isOpen={menuOpen}>
        <NavLinks>
          <ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>Our Services</ScrollLink>
          <ScrollLink to="portfolio2" smooth={true} duration={500}>Portfolio</ScrollLink>
          <ScrollLink to="career" smooth={true} duration={500}>Career</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
        </NavLinks>
      </NavContainer>

      <ButtonContainer active={isLogin}>
        <Link href="/signup" onClick={handleToggle}>Sign Up</Link>
        <button className="login-button" onClick={handleToggle}>Log In</button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
