import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 12px;
  background: ${({ theme, primary }) =>
    primary ? "green" : theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme, primary }) => (primary ? "white" : theme.colors.primary)};
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts[0]};
  text-transform: uppercase;
  cursor: pointer;
`;
