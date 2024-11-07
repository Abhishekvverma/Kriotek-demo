"use client";
import styled from "styled-components";
import { Heading } from '../../theme/TextComponent';
import ServiceCard from '../ServiceCard';
import { FaMobileAlt, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

const Section = styled.section`
  padding: 10rem 2rem;
  text-align: center;
`;


const servicesData = [
    {
      name: "Mobile App Development",
      description: "We build high-performance mobile apps tailored to your business needs.",
      icon: <FaMobileAlt />,
    },
    {
      name: "Web Development",
      description: "With modern tech stacks.",
      icon: <FaLaptopCode />,
    },
    {
      name: "UI/UX Design",
      description: "Enhance user engagement with our expert UI/UX design services.",
      icon: <FaPaintBrush />,
    },
  ];

export default function OurServices() {
  return (
    <Section id="services">
      <Heading>OUR SERVICES</Heading>
      <h1>Most Experienced Services</h1>
      <ServiceCard title="  " services={servicesData} />
         </Section>
  );
}
