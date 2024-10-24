// /components/layout/Header.js
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';
import Link from 'next/link';

// Styled components for layout and buttons
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.light};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;

  img {
    width: 200px;
    height: 100px;
    margin-right: 10px;
  }
`;

const NavContainer = styled.div`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    
    color: ${theme.colors.textPrimary};
    margin: 0 15px;
    text-decoration: none;
    font-weight: ${theme.typography.fontWeights.medium};
    position: relative;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
     color: ${theme.colors.accent2};
     border: 1px solid #FE5D5D;
     box-shadow: 0 4px 12px rgba(254, 93, 93, 0.2);

    
    border-radius: 20px;
    cursor: pointer;
    }

    @media (max-width: 768px) {
      margin: 5px 0;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 17.5%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 20px;

  a {
    margin-left: 15px;
    text-decoration: none;
    font-weight: ${theme.typography.fontWeights.medium};
    color: ${({ active }) =>
      active ? theme.colors.light : theme.colors.textPrimary};
    background-color: ${({ active }) =>
      active ? theme.colors.accent : 'transparent'};
    padding: ${({ active }) => (active ? '0.5rem 1.5rem' : '0')};
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors.accentDark};
      color: ${theme.colors.light};
    }
  }

  .login-button {
    background-color: ${({ active }) =>
      active ? 'transparent' : theme.colors.accent};
    color: ${({ active }) =>
      active ? theme.colors.textPrimary : theme.colors.light};
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: ${theme.typography.fontWeights.medium};
    margin-left: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors.accentDark};
      color: ${theme.colors.light};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

const Header = () => {
  // State to toggle between Log In and Sign Up
  const [isLogin, setIsLogin] = useState(true);

  // Toggle handler
  const handleToggle = () => setIsLogin(!isLogin);

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/Original Logo.png" alt="Logo" />
      </LogoContainer>

      <NavContainer>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Our services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact us</Link>
        </NavLinks>
      </NavContainer>

      <ButtonContainer active={isLogin}>
        <Link href="/signup" onClick={handleToggle}>
          Sign Up
        </Link>
        <button className="login-button" onClick={handleToggle}>
          Log In
        </button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
