import styled from "styled-components";

export const StyledList = styled.ul`
  overflow-y: auto;
  max-height: 150px;
`;
export const StyledListItem = styled.li`
  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  }
`;
export const StyledListAction = styled.button`
  display: flex;
  border: 0;
  background: white;
  font-size: 12px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts[0]};
  text-transform: uppercase;
  color: ${({ theme }) => `${theme.colors.primary}`};
  justify-content: space-between;
  padding: 8px 16px;
  min-width: 140px;
  &:hover {
    background: ${({ theme }) => `${theme.colors.hover}`};
    cursor: pointer;
    color: ${({ theme }) => `${theme.colors.secondary}`};
  }
`;
