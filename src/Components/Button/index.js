import React from "react";
import { bool, func, string } from "prop-types";
import { StyledButton } from "Components/Button/styles";

export const Button = ({ primary, onClick, children }) => (
  <StyledButton primary={primary} onClick={onClick} children={children} />
);

Button.propTypes = {
  primary: bool,
  onClick: func.isRequired,
  children: string.isRequired,
};
Button.defaultProps = {
  primary: false,
};
