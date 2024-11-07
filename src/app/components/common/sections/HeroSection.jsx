// HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { Heading ,Paragraph } from '../../theme/TextComponent';
import theme from '../../theme/theme';
import Button2 from '../Button2';


// Main section
const HeroContainer = styled.section`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
 
  padding: 0 2rem;
  position: relative;
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
`;

const TextWrapper = styled.div`
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
    
  }

 

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: white;
  }

  span {
    text-decoration:none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: lighter;
  }
`;



const HeroSection = () => {
  return (
    <HeroContainer id='hero'>
      <Overlay />
      <TextWrapper>
        <Heading as="h1">Creating <span>Special things</span> for Whole world</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text since the 1500s.
        </Paragraph>
        <Button2>Explore more &rarr;</Button2>
      </TextWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
