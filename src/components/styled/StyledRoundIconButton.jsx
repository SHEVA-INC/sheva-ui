import { IconButton, Stack } from "@mui/material";

const StyledRoundIconButton = ({
  left,
  right,
  ariaLabel,
  onClick,
  disabled,
  children,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: "absolute",
        left: left,
        right: right,
        zIndex: 1,
        padding: "5px",
        top: "50%",
        transform: "translate(0, -50%) ",
      }}
    >
      <IconButton
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled}
        sx={{
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          border: 1,
          padding: 1,
        }}
      >
        {children}
      </IconButton>
    </Stack>
  );
};

export default StyledRoundIconButton;
