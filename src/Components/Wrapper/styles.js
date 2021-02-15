import styled from "styled-components";

export const Inner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
`;
export const Outter = styled.div`
  display: flex;
`;
