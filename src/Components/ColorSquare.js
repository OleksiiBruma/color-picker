import styled from "styled-components";

export const ColorSquare = styled.span`
  height: 16px;
  width: 16px;
  display: block;
  background-color: ${(props) => props.color};
`;
