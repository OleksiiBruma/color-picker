import React, { useEffect, useState } from "react";
import { ColorSquare } from "Components/ColorSquare";
import { ColorSelect } from "Domain/ColorPicker/ColorSelect";
import { ColorRange } from "Domain/ColorPicker/ColorRange";
import { StyledInput, Outter, Action } from "Domain/ColorPicker/styles";
import { Modal } from "Components/Modal";
import { TriangleIcon } from "Components/TriangleIcon";
import { RGBToHex } from "helpers";

export const ColorPicker = ({ value, onChange, colors }) => {
  const [isColorSelectOpen, toggleColorSelect] = useState(false);
  const [isColorRangeOpen, toggleColorRange] = useState(true);
  const [selectedColor, setSelectedColor] = useState(value);
  const [pendingColor, setPendingColor] = useState(null);

  useEffect(() => {
    toggleColorSelect(false);
    toggleColorRange(false);
    onChange(selectedColor);
  }, [selectedColor, onChange]);

  return (
    <Outter>
      <StyledInput value={selectedColor} disabled />
      <Action onClick={() => toggleColorRange(true)}>
        <ColorSquare color={pendingColor ? pendingColor : selectedColor} />
      </Action>
      <Action onClick={() => toggleColorSelect(true)}>
        <TriangleIcon />
      </Action>
      <Modal
        isOpen={isColorRangeOpen}
        toggle={() => {
          toggleColorRange(false);
          setPendingColor(null);
        }}
        position={4}
      >
        <ColorRange
          value={selectedColor}
          onChange={(colorCode) => {
            setPendingColor(RGBToHex(colorCode));
          }}
          confirm={() => {
            setSelectedColor(pendingColor);
            toggleColorRange(false);
            setPendingColor(null);
          }}
          reject={() => {
            toggleColorRange(false);
            setPendingColor(null);
          }}
        />
      </Modal>
      <Modal
        isOpen={isColorSelectOpen}
        toggle={() => toggleColorSelect(false)}
        position={1}
      >
        <ColorSelect
          colors={colors}
          onChange={(colorCode) => setSelectedColor(colorCode)}
        />
      </Modal>
    </Outter>
  );
};
