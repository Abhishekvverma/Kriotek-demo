import styled from 'styled-components';
import { Heading, SubHeading } from '../../theme/TextComponent';

export const CardContainer = styled.div<{ backgroundImage: string }>`
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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
  background: white;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

export const Category = styled(SubHeading)`
  position: absolute;
  bottom: 20px;
  left: 15px;
  background: white;
  padding: 6px 10px;
  border-radius: 6px;
`;

export const Title = styled(Heading)`
  position: absolute;
  bottom: 60px;
  left: 15px;
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
`;
