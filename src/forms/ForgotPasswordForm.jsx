import { Button, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import ArrowIcon from "../icons/ArrowIcon";

const ForgotPasswordForm = () => {
  return (
    <StyledForm alignItems="center" px={6} py={4}>
      <Typography variant="h6" fontWeight="bold">
        Відновлення пароля
      </Typography>
      <Typography variant="p" textAlign="center">
        Введіть адресу електронної пошти, на яку буде надіслана інструкція по
        відновленню пароля.
      </Typography>
      <StyledFormControlWithTextField
        title="Пошта"
        htmlFor="email"
        helperText="Введіть адресу електронної пошти"
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: "100%",
          p: 3,
          borderRadius: (theme) => theme.shape.containerBorderRadius,
          mb: 3,
        }}
        endIcon={<ArrowIcon color="white" fontSize="large" />}
      >
        <Typography variant="p" textTransform="uppercase" fontWeight="bold">
          Надіслати
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
