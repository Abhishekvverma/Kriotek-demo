// components/Card.js

"use client";
import styled from 'styled-components';
import {Heading, SubHeading, Paragraph } from '../theme/TextComponent';



const CardContainer = styled.div`
    border: 1px solid #f0eaf1;
  border-radius: 30px;
     padding: 10px;
  margin: 20px;
width: 500px;
     height: 300px;
     justify-content: center;
    transition: transform 0.3s ease;

        
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover; 
  background-position: center;  
  background-repeat: no-repeat; 
  position: relative; 
  overflow: hidden; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;


const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
  background: white;
 
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const Category = styled(SubHeading)`
  position: absolute;
  bottom: 20px;
  left: 15px;
  background: white;
  padding: 6px 10px;
  border-radius: 6px;
`;

const Title = styled(Heading)`
  position: absolute;
  bottom: 60px;
  left: 15px;
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
`;

const PortfolioCard = ({ backgroundImage, badgeText, category, title, description }) => {
  return (

    <CardContainer backgroundImage={backgroundImage}>
      {badgeText && <Badge>{badgeText}</Badge>}
      <Title>{title}</Title>
      <Category>{category}</Category>
      {description && <Paragraph>{description}</Paragraph>}
    </CardContainer>
   
  );
};

export default PortfolioCard;
