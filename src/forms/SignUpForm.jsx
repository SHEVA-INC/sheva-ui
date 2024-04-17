import {
  Button,
  Divider,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import ArrowIcon from "../icons/ArrowIcon";
import GoogleIcon from "../icons/GoogleIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import StyledCheckbox from "../components/styled/StyledCheckbox";

const SignUpForm = () => {
  return (
    <StyledForm px={6} py={4}>
      <StyledFormControlWithTextField
        title="Ім'я"
        htmlFor="name"
        helperText="Введіть адресу електронної пошти"
      />
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
      <StyledFormControlWithTextFieldForPassword
        title="Підтвердити пароль"
        htmlFor="confirm-password"
        autoComplete="password"
        helperText="Введіть пароль"
      />
      <FormControlLabel
        control={<StyledCheckbox fill="#F3F6F9" />}
        label={
          <Typography fontWeight="bold">
            Ви погоджуєтеся з{" "}
            <Link to={"#"} component={RouterLink} underline="none">
              Terms of Condition{" "}
            </Link>
            та{" "}
            <Link to={"#"} component={RouterLink} underline="none">
              Privacy Policy
            </Link>
            .
          </Typography>
        }
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
          Зареєструватися
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
          Sign up with Google
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default SignUpForm;
