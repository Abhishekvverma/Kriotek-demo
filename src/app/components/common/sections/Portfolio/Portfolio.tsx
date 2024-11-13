import React from 'react';
import PortfolioCard from '../../PortfolioCard/PortfolioCard';
import { ThemeProvider } from 'styled-components';
import { Paragraph } from '../../../theme/TextComponent';
import { Section, SmallHeadingWrapper, HeadingLine, SmallHeading, GridContainer, CardWrapper } from './Portfolio.styles';
import theme from '../../../theme/theme';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio2">
      <SmallHeadingWrapper>
        <HeadingLine />
        <SmallHeading>PORTFOLIO</SmallHeading>
        <HeadingLine />
      </SmallHeadingWrapper>
    
      <h1>Our Recently Completed Projects</h1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eligendi. Assumenda aut tenetur dolorem veritatis vero commodi autem soluta hic?
      </Paragraph>

      <ThemeProvider theme={theme}>
        <GridContainer>
          <CardWrapper>
            <PortfolioCard
              backgroundImage="/web.jpg"
              badgeText="Made by Kriotek"
              category="Branding"
              title="Website"
              description=""
            />
          </CardWrapper>
          <CardWrapper>
            <PortfolioCard
              backgroundImage="/web2.jpg"
              badgeText="Made by Kriotek"
              category="Illustration"
              title="Work Media"
              description=""
            />
          </CardWrapper>
          <CardWrapper>
            <PortfolioCard
              backgroundImage="/dash.jpg"
              badgeText="Motion"
              category="Dashboard"
              title="Great Experiences"
              description=""
            />
          </CardWrapper>
          <CardWrapper>
            <PortfolioCard
              backgroundImage="/web4.jpg"
              badgeText="Motion"
              category="Mobile App"
              title="Manage Finances"
              description=""
            />
          </CardWrapper>
        </GridContainer>
      </ThemeProvider>
    </Section>
  );
};

export default Portfolio;
