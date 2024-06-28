import { Stack } from "@mui/material";

const StyledForm = ({
  component = "form",
  alignItems = "flex-end",
  onSubmit,
  py,
  px,
  boxShadow = "0 0 10px 10px rgba(0, 0, 0, 0.05)",
  maxWidth,
  width = 1,
  order,
  borderRadius,
  children,
}) => {
  return (
    <Stack
      component={component}
      gap={4}
      width={width}
      py={py}
      px={px}
      onSubmit={onSubmit}
      alignItems={alignItems}
      boxShadow={boxShadow}
      maxWidth={maxWidth}
      order={order}
      height="fit-content"
      borderRadius={borderRadius}
    >
      {children}
    </Stack>
  );
};

export default StyledForm;
