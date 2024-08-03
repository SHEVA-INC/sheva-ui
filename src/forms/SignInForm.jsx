import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import { HOME_ROUTE } from "../app/Routes";
import ArrowIcon from "../icons/ArrowIcon";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import useAuth from "../auth/useAuth";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signIn(data);
      navigate(HOME_ROUTE);
    } catch (err) {
      console.log(err);
      setError("username", {
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
    </StyledForm>
  );
};

export default SignInForm;
