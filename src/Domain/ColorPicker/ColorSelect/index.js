import React from "react";
import { ColorSquare } from "Components/ColorSquare";
import {
  StyledList,
  StyledListItem,
  StyledListAction,
} from "Domain/ColorPicker/ColorSelect/styles";
import { RGBToHex } from "helpers";
import { arrayOf, shape, string } from "prop-types";

export const ColorSelect = ({ colors, onChange }) => (
  <StyledList>
    {colors.map((color) => (
      <StyledListItem key={color.title}>
        <StyledListAction onClick={() => onChange(RGBToHex(color.colorCode))}>
          {color.title} <ColorSquare color={color.colorCode} />
        </StyledListAction>
      </StyledListItem>
    ))}
  </StyledList>
);

ColorSelect.propTypes = {
  colors: arrayOf(
    shape({ title: string.isRequired, colorCode: string.isRequired })
  ),
};
