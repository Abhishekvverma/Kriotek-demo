
import PortfolioCard from '../PortfolioCard';
import theme from '../../theme/theme';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";
import {  Paragraph } from '../../theme/TextComponent';


const Section = styled.section`
  padding: 9rem 2rem;
  text-align: center;
 
  
`;
const SmallHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1rem;
  
  justify-content: center; 
`;

const HeadingLine = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${theme.colors.accent};
 text-align: center;
`;

const SmallHeading = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  
  
 
 
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,1fr );
 gap: 10px;
  justify-items: center;
  padding: 10px; 
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-left: 18%;
  
`;




const Portfolio = () => {
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

    <ThemeProvider theme={theme} >
     
      <GridContainer>
        <PortfolioCard
          backgroundImage="/web.jpg"
          badgeText="Made by Kriotek"
          category="Branding"
          title="Website"
          description=""
        />
        <PortfolioCard
          backgroundImage="/web2.jpg"
          badgeText="Made by Kriotek"
          category="Illustration"
          title="Work Media"
          description=""
        />
        <PortfolioCard
          backgroundImage="/web3.jpg"
          badgeText="Motion"
          category="Dashboard"
          title="Great Experiences"
          description=""
        />
        <PortfolioCard
          backgroundImage="/web4.jpg"
          badgeText="Motion"
          category="Mobile App"
          title="Manage Finances"
          description=""
        />
          </GridContainer>
          
    </ThemeProvider>
    </Section>
  );
};

export default Portfolio;
