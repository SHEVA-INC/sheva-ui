import { Stack, Typography } from "@mui/material";

const StyledStackWithBordersAndTitle = ({
  title,
  flex,
  width,
  maxWidth,
  children,
}) => {
  return (
    <Stack
      border={1}
      borderColor="secondary.light"
      height="fit-content"
      flex={flex}
      width={width}
      maxWidth={maxWidth}
    >
      <Typography
        variant="body2"
        textTransform="uppercase"
        fontWeight="bold"
        borderBottom={1}
        borderColor="secondary.light"
        px={6}
        py={4}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default StyledStackWithBordersAndTitle;
