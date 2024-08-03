import { Button, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import ArrowIcon from "../icons/ArrowIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import useAuth from "../auth/useAuth";
import { HOME_ROUTE } from "../app/Routes";
import { useForm } from "react-hook-form";
import StyledFormControlWithCheckbox from "../components/styled/StyledFormControlWithCheckbox";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
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

  const agree = watch("agree");

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
        variant="p"
        fontWeight="regular"
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
        variant="p"
        fontWeight="regular"
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
      <StyledFormControlWithCheckbox
        register={{ ...register("agree") }}
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
        disabled={!agree}
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
    </StyledForm>
  );
};

export default SignUpForm;
