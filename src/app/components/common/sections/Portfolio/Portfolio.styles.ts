import styled from 'styled-components';
import theme from '../../../theme/theme';

export const Section = styled.section`
  padding: 9rem 2rem;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 7rem 1.5rem;
  }
  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }
`;

export const SmallHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1rem;
  justify-content: center; 
`;

export const HeadingLine = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${theme.colors.accent};
  text-align: center;
`;

export const SmallHeading = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,1fr );
  gap: 10px;
  justify-items: center;
  padding: 10px; 
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

export const CardWrapper = styled.div`
  max-width: 800px;
  min-width: 25px;
`;
