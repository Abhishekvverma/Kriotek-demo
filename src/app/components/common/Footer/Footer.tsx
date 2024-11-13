/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Paragraph } from '../../theme/TextComponent';
import { Link as ScrollLink } from 'react-scroll';
import { FooterWrapper, LogoWrapper, FooterLinks, SocialIcons, FooterContent, Copyright } from './FooterStyles';
import { FooterProps } from './FooterTypes';

const Footer: React.FC<FooterProps> = () => (
  <FooterWrapper>
    <LogoWrapper>
      <img src="/footerimg.jpg" alt="Kriotek Logo" />
    </LogoWrapper>
    <FooterContent>
      <Paragraph>We build creative and modern solutions to help you grow.</Paragraph>
      <SocialIcons>
        <a href="#"><Facebook /></a>
        <a href="#"><Twitter /></a>
        <a href="#"><Instagram /></a>
        <a href="#"><LinkedIn /></a>
      </SocialIcons>
    </FooterContent>
    <hr />
    <FooterLinks>
      <ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink>
      <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
      <ScrollLink to="services" smooth={true} duration={500}>Our Services</ScrollLink>
      <ScrollLink to="portfolio2" smooth={true} duration={500}>Portfolio</ScrollLink>
      <ScrollLink to="career" smooth={true} duration={500}>Career</ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
      <br />
      <a href="#">Privacy policy</a> <span>|</span> <a href="#">Terms & condition</a>
      <Copyright>© 2024 Kriotek. All rights reserved.</Copyright>
    </FooterLinks>
  </FooterWrapper>
);

export default Footer;
