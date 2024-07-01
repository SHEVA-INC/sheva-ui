import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import StyledColorButton from "./StyledColorButton";
import shoesColors from "../../enums/shoesColors";

const StyledColorPicker = ({ colors, showColorsName, fontWeight, gap }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (col, e) => {
    e.stopPropagation();
    setSelectedColor(col);
  };

  return (
    <Stack gap={gap}>
      <Typography variant="h6" fontWeight={fontWeight}>
        Колір
        {showColorsName && (
          <span>
            :{" "}
            {selectedColor
              ? shoesColors[selectedColor]
              : setSelectedColor(colors)}
          </span>
        )}
      </Typography>
      <Stack flexDirection="row" gap={1} flexWrap="wrap">
        {Array.isArray(colors)
          ? colors.map((color) => (
              <StyledColorButton
                key={color}
                color={color}
                selectedColor={selectedColor}
                onClick={(e) => handleColorChange(color, e)}
              />
            ))
          : [colors].map((color) => (
              <StyledColorButton
                key={color}
                color={color}
                selectedColor={colors}
                onClick={(e) => handleColorChange(color, e)}
              />
            ))}
      </Stack>
    </Stack>
  );
};

export default StyledColorPicker;
