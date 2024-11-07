/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import {   Paragraph } from '../theme/TextComponent';
import theme from '../theme/theme';

import { Link as ScrollLink } from 'react-scroll'; 


const FooterWrapper = styled.footer`
  background-color: ${theme.colors.dark};
  padding: 3rem 1rem;
  color: ${theme.colors.light};

  flex-direction: column;
 
`;

const LogoWrapper = styled.div`
 
   img {
    width: 200px;
    height: 100px;
    margin-right: 10px;
  
  }
`;





const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  align-items: center;
  margin-left: 20%;
  
  
 

  a {
    color: ${theme.colors.light};
    text-decoration: none;
    font-family: ${theme.typography.fontFamily};
    align-items:flex-end ;
    text-align: center;
    justify-content: center;

    &:hover {
      color: ${theme.colors.accent};
    }
  }

  span {
    color: ${theme.colors.light};
  }
`;



const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-left: 50%;
  a {
    color: ${theme.colors.light};
    border: 1px solid ${theme.colors.light};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    transition: color 0.3s ease, border-color 0.3s ease;

    
  }

  svg {
    font-size: 1.5rem; 
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.light};
  text-align: center;
 
 
`;
const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;



const Footer = () => (
  <FooterWrapper>
     <LogoWrapper>
     
     <img src="/footerimg.jpg" alt="Kriotek Logo" /> 
   
     </LogoWrapper>
     <FooterContent>
                 
      <Paragraph>
          We build creative and modern solutions to help you grow.
                </Paragraph>
               
        
      <SocialIcons>
                 <a href="#">
            <Facebook style={{ color: theme.colors.light }} />
          </a>
          <a href="#">
            <Twitter style={{ color: theme.colors.light }} />
          </a>
          <a href="#">
            <Instagram style={{ color: theme.colors.light }} />
          </a>
          <a href="#">
            <LinkedIn style={{ color: theme.colors.light }} />
          </a>
        </SocialIcons>
        </FooterContent>
       
             <hr />
       
        <FooterLinks>
        <ScrollLink to="hero" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About Us
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500}>
          Our Services
        </ScrollLink>
        <ScrollLink to="portfolio2" smooth={true} duration={500}>
          Portfolio
        </ScrollLink>
        <ScrollLink to="career" smooth={true} duration={500}>
          Career
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact Us
        </ScrollLink>
      <br />
      <br />
      <a href="#">Privacy policy</a>
      <span>|</span>
      <a href="#">Terms & condition</a>
      <br />
      <br />
      <br />
      <Copyright>© 2024 Kriotek. All rights reserved.</Copyright>
      </FooterLinks>
     
    

     

    
       
       
        
       
         </FooterWrapper>
);

export default Footer;
