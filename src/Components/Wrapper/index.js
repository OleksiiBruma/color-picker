import React from "react";
import { element } from "prop-types";
import { Inner, Outter } from "Components/Wrapper/styles";

export const Wrapper = ({ children }) => (
  <Outter>
    <Inner>{children}</Inner>
  </Outter>
);
Wrapper.propTypes = {
  children: element.isRequired,
};
