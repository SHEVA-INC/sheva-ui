import { Button, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import { useForm } from "react-hook-form";
import userService from "../services/UserService";

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
      <StyledFormControlWithTextFieldForPassword
        title="Поточний пароль"
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
