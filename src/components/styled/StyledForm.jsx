import { Stack } from "@mui/material";

const StyledForm = ({
  component = "form",
  alignItems = "flex-end",
  onSubmit,
  children,
}) => {
  return (
    <Stack
      component={component}
      gap={2}
      width={1}
      py={6}
      px={8}
      onSubmit={onSubmit}
      alignItems={alignItems}
    >
      {children}
    </Stack>
  );
};

export default StyledForm;
