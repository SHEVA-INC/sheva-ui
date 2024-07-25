import {
  Button,
  Divider,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import ArrowIcon from "../icons/ArrowIcon";
import GoogleIcon from "../icons/GoogleIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import StyledCheckbox from "../components/styled/StyledCheckbox";
import useAuth from "../auth/useAuth";
import { HOME_ROUTE } from "../app/Routes";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await signUp(data);
      navigate(HOME_ROUTE);
    } catch (err) {
      console.log(err);
      setError("username", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
      setError("email", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
      setError("password", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
    }
  };

  return (
    <StyledForm
      px={6}
      py={6}
      alignItems="flex-start"
      boxShadow="none"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StyledFormControlWithTextField
        title="Ім'я"
        htmlFor="username"
        register={{
          ...register("username", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 2,
              message: "Min length is 2 symbols!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        helperText={errors?.username ? errors.username.message : " "}
        error={!!errors?.username}
      />
      <StyledFormControlWithTextField
        title="Пошта"
        htmlFor="email"
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "Field is required!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
            pattern: {
              value: /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
              message: "Enter a valid email!",
            },
          }),
        }}
        helperText={errors?.email ? errors.email.message : " "}
        error={!!errors?.email}
      />
      <StyledFormControlWithTextFieldForPassword
        title="Пароль"
        htmlFor="password"
        autoComplete="password"
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 8,
              message: "Min length is 8 symbols!",
            },
            maxLength: {
              value: 32,
              message: "Max length is 32 symbols!",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/,
              message:
                "Enter a valid password! Password should contain at least one capital letter, one small letter, one digit, and one special symbol",
            },
          }),
        }}
        helperText={errors?.password ? errors.password.message : " "}
        error={!!errors?.password}
      />
      <FormControlLabel
        control={<StyledCheckbox />}
        label={
          <Typography>
            Ви погоджуєтеся з{" "}
            <Link
              to={"#"}
              component={RouterLink}
              underline="none"
              color="info.light"
            >
              Terms of Condition{" "}
            </Link>
            та{" "}
            <Link
              to={"#"}
              component={RouterLink}
              underline="none"
              color="info.light"
            >
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
