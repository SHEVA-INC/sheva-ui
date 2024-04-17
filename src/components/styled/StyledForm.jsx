import { Stack } from "@mui/material";

const StyledForm = ({
  component = "form",
  alignItems = "flex-end",
  onSubmit,
  children,
  py,
  px,
}) => {
  return (
    <Stack
      component={component}
      gap={4}
      width={1}
      py={py}
      px={px}
      onSubmit={onSubmit}
      alignItems={alignItems}
    >
      {children}
    </Stack>
  );
};

export default StyledForm;
