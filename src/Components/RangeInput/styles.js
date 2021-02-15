import styled from "styled-components";
export const StyledRangeInput = styled.input`
  & {
    width: 160px;
    margin: 4px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: ${({ color }) =>
      `linear-gradient(90deg, ${color} 20%, black 100%)`};
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -4px;
    width: 10px;
    height: 10px;
    background: #666666;
    border: 1.8px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  &::-moz-range-track {
    background: ${({ color }) =>
      `linear-gradient(90deg, ${color} 20%, black 100%)`};
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #e2dcdc;
    border: 1.8px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    cursor: pointer;
  }
`;
