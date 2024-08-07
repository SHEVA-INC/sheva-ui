import { Box, Button, Tooltip } from "@mui/material";
import shoesColors from "../../enums/shoesColors";

const StyledColorButton = ({ color, selectedColor, onClick, disabled }) => {
  let borderColor;
  if (color === selectedColor) {
    if (selectedColor === "white" || selectedColor === "another") {
      borderColor = "black";
    } else {
      borderColor = selectedColor;
    }
  } else {
    borderColor = "transparent";
  }

  return (
    <Tooltip title={shoesColors[color] || color}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `1px solid ${borderColor}`,
          transition: "border-color 0.3s ease",
          width: 24,
          height: 24,
          padding: 1,
        }}
      >
        <Button
          style={{
            backgroundColor: color === "another" ? "grey" : color,
            borderRadius: "50%",
            boxShadow: "inset 0px -1px 1px 1px rgba(0, 0, 0, 0.1)",
            padding: 8,
            minWidth: 0,
            flex: 1,
          }}
          onClick={onClick}
          disabled={disabled}
        />
      </Box>
    </Tooltip>
  );
};

export default StyledColorButton;
