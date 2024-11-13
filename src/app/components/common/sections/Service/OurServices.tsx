// OurServices.tsx
"use client";
import { FC } from "react";
import { Heading, SubHeading } from '../../../theme/TextComponent';
import ServiceCard from '../../ServiceCard/ServiceCard';
import { FaMobileAlt, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import { Section } from './OurServices.styles';
import { ServiceData } from './OurServices.types';

const servicesData: ServiceData[] = [
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

const OurServices: FC = () => {
  return (
    <Section id="services">
      <Heading>OUR SERVICES</Heading>
      <SubHeading>Most Experienced Services</SubHeading>
      <ServiceCard title=" " services={servicesData} />
    </Section>
  );
};

export default OurServices;
