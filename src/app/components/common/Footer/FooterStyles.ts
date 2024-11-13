import styled from 'styled-components';
import theme from '../../theme/theme';

export const FooterWrapper = styled.footer`
  background-color: ${theme.colors.dark};
  padding: 3rem 1rem;
  color: ${theme.colors.light};
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  img {
    width: 200px;
    height: 100px;
    margin-right: 10px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap:wrap ;
  gap: 2.5rem;
  font-size: 0.9rem;
  align-items: center;
  margin-left: 10%;
  margin-top: 2%;
  overflow: hidden;
  a {
    color: ${theme.colors.light};
    text-decoration: none;
    font-family: ${theme.typography.fontFamily};
    position: relative;
    padding: 8px 15px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:hover {
        color: ${theme.colors.dark};
      background-color: ${theme.colors.light};
          border-radius: 20px;
               cursor: pointer;
    }
  }
  span {
    color: ${theme.colors.light};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-left: 50%;
  a {
    color: ${theme.colors.light};
    border: 1px solid ${theme.colors.light};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    transition: color 0.3s ease, border-color 0.3s ease;
  }
  svg {
    font-size: 1.5rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.light};
  text-align: center;
`;
