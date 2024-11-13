import styled from "styled-components";
import theme from "../../../theme/theme";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 10rem 2rem;
  background-color: ${theme.colors.secondary};
 
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
  }
`;

export const Content = styled.div`
  flex: 1;
  text-align: left;
`;

export const SmallHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1rem;
`;

export const HeadingLine = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${theme.colors.accent};
`;

export const SmallHeading = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${theme.colors.text};
`;
