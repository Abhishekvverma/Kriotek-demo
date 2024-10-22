// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Heading, SubHeading, Paragraph } from '../theme/TextComponent';
import theme from '../theme/theme';

// Styled Components
const FooterWrapper = styled.footer`
  background-color: ${theme.colors.dark};
  padding: 3rem 1rem;
  color: ${theme.colors.light};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.light};
  margin-bottom: 0.5rem;
  font-family: ${theme.typography.fontFamily};
  &:hover {
    color: ${theme.colors.accent};
  }
`;

// Footer Component
const Footer = () => (
  <FooterWrapper>
    <FooterGrid>
      {/* Company Description */}
      <div>
        <Heading style={{ color: theme.colors.light }}>Kriotek</Heading>
        <Paragraph>
          We build creative and modern solutions to help you grow.
        </Paragraph>
      </div>

      {/* Company Links */}
      <div>
        <SubHeading style={{ color: theme.colors.light }}>Company</SubHeading>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </div>

      {/* Resources Links */}
      <div>
        <SubHeading style={{ color: theme.colors.light }}>Resources</SubHeading>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
        <FooterLink href="#">Terms & Conditions</FooterLink>
      </div>

      {/* Social Media Section */}
      <div>
        <SubHeading style={{ color: theme.colors.light }}>Follow Us</SubHeading>
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
        <Paragraph>© 2024 Kriotek. All rights reserved.</Paragraph>
      </div>
    </FooterGrid>
  </FooterWrapper>
);

export default Footer;
