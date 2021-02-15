import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 16px;
  border: none;
  background: #fff;
  border-radius: 2px;
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[0]};
`;
export const Outter = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: 2px;
  display: flex;
  background: #fff;
  position: relative;
`;
export const Action = styled.button`
  padding: 0 16px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  cursor: pointer;
`;
