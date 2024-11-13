
import styled from 'styled-components';
import theme from '../../theme/theme';

const StyledButton = styled.button`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.light};
  padding: 12px 32px;
  border: none;
  border-radius: 50px;
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeights.bold};
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.accent2};
  }
`;
function Button2({type = "button" ,children}) {
  return (
    <div>
        <StyledButton type={type}>{children}</StyledButton>
        </div>
  )
}

export default Button2;