import React from 'react';
import { HeroContainer, Overlay, TextWrapper } from './HeroSectionStyles';
import { Heading, Paragraph } from '../../../theme/TextComponent';
import Button2 from '../../Button/Button2';

const HeroSection: React.FC = () => {
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
