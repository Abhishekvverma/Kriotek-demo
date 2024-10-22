/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components';

import theme from './app/components/theme/theme';
import { Heading, Paragraph } from './components/theme/TextComponent';

const Card = styled.div`
background-color: ${theme.colors.light};
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 3rem;
margin: 1rem;
flex: 0;
min-width: 250px;
`;


const ServiceCard = ({ title , description }) => (

  
    
    <Card>

          <Heading> {title}</Heading>
          <Paragraph>{description}</Paragraph>
        </Card>
      
      
  );


export default ServiceCard;