import { Button, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import { useForm } from "react-hook-form";
import userService from "../services/UserService";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    const passwords = {
      old_password: data.currentPassword,
      new_password: data.newPassword,
    };

    try {
      await userService.changePassword(passwords);
      setValue("currentPassword", "");
      setValue("newPassword", "");
    } catch (err) {
      console.log(err);
      setError("currentPassword", {
        type: "invalidCredentials",
        message: "Неправильний поточний пароль!",
      });
    }
  };

  return (
    <StyledForm
      alignItems="flex-start"
      px={6}
      py={6}
      boxShadow="none"
      borderRadius={0}
      onSubmit={handleSubmit(onSubmit)}
    >
      <StyledFormControlWithTextField
        display="none"
        autoComplete="username"
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
        title="Поточний пароль"
        autoComplete="current-password"
        htmlFor="currentPassword"
        register={{
          ...register("currentPassword", {
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
        helperText={
          errors?.currentPassword ? errors.currentPassword.message : " "
        }
        error={!!errors?.currentPassword}
      />
      <StyledFormControlWithTextFieldForPassword
        title="Новий пароль"
        autoComplete="new-password"
        htmlFor="newPassword"
        register={{
          ...register("newPassword", {
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
            validate: (value) =>
              value !== getValues("currentPassword") ||
              "Поточний пароль та новий мають бути різними!!",
          }),
        }}
        helperText={errors?.newPassword ? errors.newPassword.message : " "}
        error={!!errors?.newPassword}
      />

      <Button variant="contained" size="large" type="submit">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Змінити пароль
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ChangePasswordForm;
