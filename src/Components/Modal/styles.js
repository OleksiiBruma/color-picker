import styled from "styled-components";
export const ModalBackground = styled.div`
  position: absolute;
  background: white;
  top: 64px;
  right: 0;
  box-shadow: ${({ theme }) => `2px 3px 15px 1px ${theme.colors.primary}`};
  &:before {
    position: absolute;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
    transform: rotate(180deg);
    right: ${({ position }) => `calc(16px * ${position})`};
    top: -8px;
  }
`;
