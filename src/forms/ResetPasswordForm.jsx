import { Button, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import ArrowIcon from "../icons/ArrowIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";

const ResetPasswordForm = () => {
  return (
    <StyledForm alignItems="center" px={6} py={6}>
      <Typography variant="h6" fontWeight="bold">
        Відновлення пароля
      </Typography>
      <Typography variant="p" textAlign="center">
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Typography>
      <StyledFormControlWithTextFieldForPassword
        title="Пароль"
        htmlFor="password"
        autoComplete="password"
        helperText="Введіть пароль"
      />
      <StyledFormControlWithTextFieldForPassword
        title="Підтвердити пароль"
        htmlFor="confirm-password"
        autoComplete="password"
        helperText="Введіть пароль"
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: "100%",
          p: 3,
          borderRadius: (theme) => theme.shape.containerBorderRadius,
        }}
        endIcon={<ArrowIcon color="white" fontSize="large" />}
      >
        <Typography variant="p" textTransform="uppercase" fontWeight="bold">
          Відновити пароль
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ResetPasswordForm;
