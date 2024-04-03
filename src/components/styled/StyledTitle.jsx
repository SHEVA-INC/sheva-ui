import { Typography } from "@mui/material";

const StyledTitle = ({ title, variant = "h4", textAlign = "left" }) => {
  return (
    <Typography
      variant={variant}
      fontWeight="bold"
      textTransform="uppercase"
      textAlign={textAlign}
    >
      {title}
    </Typography>
  );
};

export default StyledTitle;
