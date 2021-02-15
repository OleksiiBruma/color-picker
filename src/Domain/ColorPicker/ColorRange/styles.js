import styled from "styled-components";

export const ColorRangeWrapper = styled.div`
  padding: 8px 16px;
  background: white;
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;
export const RangeInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => `${theme.colors.primary}`};
  padding-bottom: 8px;
`;
export const RangeActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
