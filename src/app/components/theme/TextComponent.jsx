// /components/ui/TextComponents.js
import styled from 'styled-components';
import theme from './theme';

const { fontFamily, fontWeights, fontSizes } = theme.typography;
const { textPrimary, textSecondary } = theme.colors;

export const Heading = styled.h1`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.large};
  color: ${textPrimary};
`;

export const SubHeading = styled.h2`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.medium};
  color: ${textPrimary};
`;

export const Paragraph = styled.p`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.small};
  color: ${textSecondary};
  line-height: 1.6;
`;
