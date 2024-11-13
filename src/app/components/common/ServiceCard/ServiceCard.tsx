"use client";
import React from 'react';
import { SubHeading, Paragraph } from "../../theme/TextComponent";
import { ServicesContainer, Card, IconWrapper } from './ServiceCard.styles';
import { ServiceCardProps } from './ServiceCard.types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, services }) => {
  return (
    <div>
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
    </div>
  );
};

export default ServiceCard;
