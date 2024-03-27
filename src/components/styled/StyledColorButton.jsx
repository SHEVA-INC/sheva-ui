import { Box, Button, Tooltip } from "@mui/material";

const StyledColorButton = ({ color, selectedColor, onClick }) => {
  let borderColor;
  if (color === selectedColor) {
    if (selectedColor === "white" || selectedColor === "another") {
      borderColor = "grey";
    } else {
      borderColor = selectedColor;
    }
  } else {
    borderColor = "transparent";
  }

  return (
    <Tooltip title={color}>
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
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.05)",
            padding: 8,
            minWidth: 0,
            flex: 1,
          }}
          onClick={onClick}
        />
      </Box>
    </Tooltip>
  );
};

export default StyledColorButton;
