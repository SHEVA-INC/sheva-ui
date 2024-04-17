import { Stack } from "@mui/material";

const StyledStackForRoutes = ({
  maxWidth,
  flexDirection,
  justifyContent,
  alignItems,
  children,
  gap,
  minHeight,
}) => {
  return (
    <Stack
      maxWidth={maxWidth ? maxWidth : "lg"}
      width={1}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      px={3}
      gap={gap ? gap : 5}
      my={8}
      minHeight={minHeight}
    >
      {children}
    </Stack>
  );
};

export default StyledStackForRoutes;
