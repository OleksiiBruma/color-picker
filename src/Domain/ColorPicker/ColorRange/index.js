import React, { useState, useEffect } from "react";
import { Button } from "Components/Button";
import { RangeInput } from "Components/RangeInput";
import {
  ColorRangeWrapper,
  RangeInputWrapper,
  RangeActions,
} from "Domain/ColorPicker/ColorRange/styles";
import { hexToRGB } from "helpers";
import { func, string } from "prop-types";

export const ColorRange = ({ onChange, value, confirm, reject }) => {
  const rgb = hexToRGB(value);
  const [R, setR] = useState(rgb[0]);
  const [G, setG] = useState(rgb[1]);
  const [B, setB] = useState(rgb[2]);
  useEffect(() => {
    onChange(`rgb(${R}, ${G}, ${B})`);
  }, [R, G, B, onChange]);

  const rangeConfig = [
    { id: "R", color: "red", value: R, onChange: (e) => setR(e.target.value) },
    {
      id: "G",
      color: "green",
      value: G,
      onChange: (e) => setG(e.target.value),
    },
    { id: "B", color: "blue", value: B, onChange: (e) => setB(e.target.value) },
  ];

  return (
    <ColorRangeWrapper>
      {rangeConfig.map(({ id, color, value, onChange }) => (
        <RangeInputWrapper key={id}>
          <label htmlFor={id}>{id}</label>
          <RangeInput
            id={id}
            name={id}
            color={color}
            onChange={onChange}
            value={value}
          />
        </RangeInputWrapper>
      ))}
      <RangeActions>
        <Button onClick={reject}>Cancel</Button>
        <Button primary onClick={confirm}>
          Ok
        </Button>
      </RangeActions>
    </ColorRangeWrapper>
  );
};

ColorRange.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  confirm: func.isRequired,
  reject: func.isRequired,
};
