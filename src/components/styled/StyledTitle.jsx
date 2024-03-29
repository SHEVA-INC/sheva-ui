import { Typography } from "@mui/material";

const StyledTitle = ({ title, textAlign = "left" }) => {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      textTransform="uppercase"
      textAlign={textAlign}
    >
      {title}
    </Typography>
  );
};

export default StyledTitle;
