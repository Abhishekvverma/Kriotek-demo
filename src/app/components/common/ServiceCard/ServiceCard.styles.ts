import styled from "styled-components";
import theme from "../../theme/theme";

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 1.75rem;
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
    margin-left: 50%;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    margin-left: 80%;
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.secondary};
  border: 1px solid #f0eaf1;
  border-radius: 30px;
  padding: 30px;
  margin: 20px;
  min-width: 250px;
  flex: 1 1 250px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 310px;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    border: 1px solid black;
  }

  @media (max-width: 1024px) {
    min-width: 220px;
    max-width: 180px;
    padding: 18px;
    height: 280px;
  }

  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 160px;
    padding: 16px;
    height: 260px;
  }

  @media (max-width: 480px) {
    min-width: 180px;
    max-width: 150px;
    padding: 14px;
    height: 280px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: white;
  border: 2px solid #d9d9d9;
  margin-bottom: 1rem;

  svg {
    font-size: 36px;
    background-color: #f5f5f5;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;

    svg {
      font-size: 32px;
    }
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    svg {
      font-size: 28px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;

    svg {
      font-size: 24px;
    }
  }
`;
