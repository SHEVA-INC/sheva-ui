import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import StyledColorButton from "./StyledColorButton";
import ShoesColors from "../../utils/ShoesColors";

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
              ? ShoesColors[selectedColor]
              : setSelectedColor(colors[0])}
          </span>
        )}
      </Typography>
      <Stack flexDirection="row" gap={1} flexWrap="wrap">
        {colors.map((color) => (
          <StyledColorButton
            key={color}
            color={color}
            selectedColor={selectedColor}
            onClick={(e) => handleColorChange(color, e)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default StyledColorPicker;
