
"use client";
import styled from "styled-components";
import { SubHeading, Paragraph } from "../theme/TextComponent";
import theme from "../theme/theme";

const Section = styled.section`
  padding: 10rem 2rem;
  text-align: center;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
 
`;

const Card = styled.div`
  background-color: ${theme.colors.secondary};
    border: 1px solid #f0eaf1;
  border-radius: 30px;
     padding: 30px;
  margin: 20px;
  min-width: 250px;
  flex: 1 1 250px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border:  1px solid black;
  }
`;

const IconWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 80px; 
  height: 80px; 
  border-radius: 100%;
  background-color: white; 
  border: 2px solid #d9d9d9;
  margin-bottom: 1rem;

  svg {
    font-size: 36px;
    background-color: #f5f5f5;
  }
`;

 

export default function ServiceCard({ title, services }) {
  return (
    <Section>
      <SubHeading>{title}</SubHeading>
      <ServicesContainer>
        {services.map((service, index) => (
          <Card key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
            <SubHeading>{service.name}</SubHeading>
            <Paragraph>{service.description}</Paragraph>
          </Card>
        ))}
      </ServicesContainer>
    </Section>
  );
}
