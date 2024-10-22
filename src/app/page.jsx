//import Image from "next/image";
"use client";
import { Heading, Paragraph } from './components/theme/TextComponent';
import theme from './components/theme/theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//import ServiceCard from './components/common/ServiceCard.jsx' ;
import styled from 'styled-components';


const Section = styled.section`
  padding: 10rem 2rem;
  text-align: center;
`;
const ServiceCard = styled.div`
  background-color: ${theme.colors.light};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin: 1rem;
  flex: 0;
  min-width: 250px;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.8rem;
  width: 100%;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px;
`;


const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${theme.typography.fontWeights.medium};
  &:hover {
    background-color: ${theme.colors.accent};
  }
`;
export default function Home() {
  return (
    <div>
   <Header/>
   <Section style={{ backgroundColor: theme.colors.secondary }}>
   <Heading>Creative Special Things for the Whole World</Heading>
   <Paragraph>
     We provide top-notch services with a blend of creativity and innovation to meet your business needs.
   </Paragraph>
 </Section>

  {/* Services Section  */}
   <Section>
      <Heading>Most Experienced Services</Heading>
      <ServicesContainer>
        <ServiceCard>
          <Heading>Mobile App Development</Heading>
          <Paragraph>We build high-performance mobile apps tailored to your business needs.</Paragraph>
        </ServiceCard>
        <ServiceCard>
          <Heading>Web Development</Heading>
          <Paragraph>with modern tech stacks.</Paragraph>
        </ServiceCard>
        <ServiceCard>
          <Heading>UI/UX Design</Heading>
          <Paragraph>Enhance user engagement with our expert UI/UX design services.</Paragraph>
        </ServiceCard>
        </ServicesContainer>
    </Section>

{/* 
  <Section>
  <ServicesContainer>
<ServiceCard  title = "Mobile App Development"
        description = "We build high-performance mobile apps tailored to your business needs." />
  
  <ServiceCard  title = "Mobile App Development"
        description = "We build high-performance mobile apps tailored to your business needs." />
  
  <ServiceCard  title = "Mobile App Development"
        description = "We build high-performance mobile apps tailored to your business needs." />
   </ServicesContainer>
  </Section> */}

  {/* Contact Section */}
  <Section style={{ backgroundColor: theme.colors.secondary }}>
      <Heading>Get in Touch</Heading>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Input type="text" placeholder="Subject" />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </Section>

<Footer/>
 </div>
 

  );
}
