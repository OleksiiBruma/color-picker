import React from "react";
import styled from "styled-components";

const StyledTriangle = styled.span`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: ${({ theme }) => `8px solid ${theme.colors.primary}`};
`;

export const TriangleIcon = () => <StyledTriangle />;
