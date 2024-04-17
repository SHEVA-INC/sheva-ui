import { Button, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import { FORGOT_PASSWORD_ROUTE } from "../app/Routes";
import ArrowIcon from "../icons/ArrowIcon";
import GoogleIcon from "../icons/GoogleIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";

const SignInForm = () => {
  return (
    <StyledForm px={6} py={4}>
      <StyledFormControlWithTextField
        title="Пошта"
        htmlFor="email"
        helperText="Введіть адресу електронної пошти"
      />
      <StyledFormControlWithTextFieldForPassword
        title="Пароль"
        htmlFor="password"
        autoComplete="password"
        helperText="Введіть пароль"
      />
      <Link to={FORGOT_PASSWORD_ROUTE} component={RouterLink} underline="none">
        <Typography variant="p" color="info.light">
          Забули пароль?
        </Typography>
      </Link>
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
          Увійти
        </Typography>
      </Button>
      <Divider sx={{ width: 1 }}>
        <Typography color="#475156">або</Typography>
      </Divider>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        disableRipple
        sx={{
          width: "100%",
          borderColor: (theme) => theme.palette.secondary.light,
          borderRadius: (theme) => theme.shape.containerBorderRadius,
          justifyContent: "space-between",
          px: 5,
          py: 3,
        }}
        startIcon={<GoogleIcon fontSize="small" padding={0.4} />}
      >
        <Typography color="#475156" flex={1}>
          Login with Google
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default SignInForm;
