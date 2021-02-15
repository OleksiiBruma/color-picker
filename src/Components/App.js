import React, { useState } from "react";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "Components/Wrapper";
import { ColorPicker } from "Domain/ColorPicker";
import { GlobalStyles } from "StylesSetup/globalStyles";
import { defaultTheme } from "StylesSetup/themes";

export const App = () => {
  const colors = [
    { title: "Red", colorCode: "#FF0000" },
    { title: "Yellow", colorCode: "#FFFF00" },
    { title: "Green", colorCode: "#008000" },
    { title: "Blue", colorCode: "#0000FF" },
  ];
  const [colorValue, setColorValue] = useState(colors[0].colorCode);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <ColorPicker
          value={colorValue}
          onChange={setColorValue}
          colors={colors}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
