import styled from 'styled-components';
import theme from '../../theme/theme';
import { NavContainerProps, ButtonContainerProps } from './HeaderTypes';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: 100px;

  @media (max-width: 1024px) {
    padding: 0.5rem;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
   overflow-x: hidden;
  }
`;

export const LogoContainer = styled.div`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 80px;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 120px;
      height: 60px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 50px;
      
    }

    @media (max-width: 1024px) {
      padding: 0.5rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const NavContainer = styled.div<NavContainerProps>`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 10px;
    justify-content: flex-start;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    color: ${theme.colors.textPrimary};
    margin: 0 15px;
    text-decoration: none;
    font-weight: ${theme.typography.fontWeights.medium};
    position: relative;
    padding: 8px 15px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:hover {
      color: ${theme.colors.light};
      background-color: ${theme.colors.dark};
      box-shadow: 0 4px 12px rgba(254, 93, 93, 0.2);
      border-radius: 20px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      margin: 5px 0;
      padding: 5px 10px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin: 3px 0;
      padding: 5px 8px;
    }

    @media (max-width: 1024px) {
      margin: 5px 0;
      padding: 5px 10px;
    }
  }
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  width: 25%;
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

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 10px;
    justify-content: flex-start;

    a, .login-button {
      font-size: 14px;
      padding: 0.4rem 1rem; 
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 10px;

    a, .login-button {
      padding: 0.3rem 0.8rem;  
      font-size: 14px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
    width: 100%;
    margin-top: 10px;

    a, .login-button {
      padding: 0.3rem 0.8rem;
      font-size: 12px;
      text-align: center;
      margin-left: 0;
      margin-right: 25px;
      margin-top: 5px;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    justify-items: flex-start;
  }

  @media (max-width: 1024px) {
    display: block;
    justify-content: flex-start;
  }
`;
