import styled from 'styled-components';
import theme from '../../../theme/theme';

export const HeroContainer = styled.section`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position:left center ; 
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
 
  position: relative;
  
 

  @media (max-width: 1024px) {
    
    margin-left: 0%;
    padding: 0 1%;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    width: 127%;
    margin-left: 0%;
  }

  @media (max-width: 480px) {
    padding: 0 1%;
    width:187%;
    margin-top: 30%;
    margin-left: 0%;

    
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 2;
  color: ${theme.colors.light};
  max-width: 600px;
  text-align: left;
  margin-left: 10%;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: white;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      margin-right: 20%;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: white;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  span {
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: lighter;

    @media (max-width: 768px) {
      font-size: 1.9rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;
