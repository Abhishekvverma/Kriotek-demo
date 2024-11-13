// OurServices.styles.ts
import styled from "styled-components";
import theme from "../../../theme/theme"

export const Section = styled.section`
  padding: 10rem 2rem;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.5px;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Subheading = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;