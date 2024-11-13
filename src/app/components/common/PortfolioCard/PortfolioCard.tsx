"use client";
import React from 'react';
import { CardContainer, Badge, Category, Title } from './PortfolioCardStyles';
import {  Paragraph } from '../../theme/TextComponent';
import { PortfolioCardProps } from './PortfolioCardTypes';

const PortfolioCard: React.FC<PortfolioCardProps> = ({ backgroundImage, badgeText, category, title, description }) => {
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
