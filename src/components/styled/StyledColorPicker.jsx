import { Stack, Typography } from "@mui/material";
import StyledColorButton from "./StyledColorButton";
import shoesColors from "../../enums/shoesColors";

const StyledColorPicker = ({
  colors,
  showColorsName,
  fontWeight,
  gap,
  selectedColor,
  setSelectedColor,
  disabled,
}) => {
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
            : {selectedColor ? shoesColors[selectedColor] : selectedColor}
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
                disabled={disabled}
              />
            ))
          : [colors].map((color) => (
              <StyledColorButton
                key={color}
                color={color}
                selectedColor={colors}
                onClick={(e) => handleColorChange(color, e)}
                disabled={disabled}
              />
            ))}
      </Stack>
    </Stack>
  );
};

export default StyledColorPicker;
