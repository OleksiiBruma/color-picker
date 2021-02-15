import React from "react";
import { StyledRangeInput } from "Components/RangeInput/styles";
import { func, string } from "prop-types";

export const RangeInput = ({ color, id, name, onChange, value }) => (
  <StyledRangeInput
    type={"range"}
    min="0"
    max="255"
    color={color}
    id={id}
    name={name}
    onChange={onChange}
    value={value}
  />
);

RangeInput.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  color: string.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
};
