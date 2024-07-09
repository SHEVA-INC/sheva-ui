import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import userService from "../services/UserService";
import { useForm } from "react-hook-form";

const EditUserDataForm = () => {
  const [userData, setUserData] = useState({});
  const [isAllowedEditing, setIsAllowedEditing] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await userService.fetchUser();
        setUserData(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      userName: userData.username || "",
      firstName: userData.first_name || "",
      lastName: userData.last_name || "",
      email: userData.email || "",
    },
    mode: "onBlur",
  });

  const handleEditClick = () => {
    setIsAllowedEditing(true);
  };

  const handleSaveChanges = async (data) => {
    const user = {
      username: data.userName,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };

    console.log("Saving changes:", user);

    try {
      await userService.updateUserData(user);
      setIsAllowedEditing(false);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <StyledForm
      alignItems="flex-start"
      boxShadow="none"
      borderRadius={0}
      onSubmit={handleSubmit(handleSaveChanges)}
    >
      <StyledFormControlWithTextField
        title="Юзернейм"
        htmlFor="userName"
        register={{
          ...register("userName", {
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
        helperText={errors?.userName ? errors.userName.message : " "}
        error={!!errors?.userName}
        disabled={!isAllowedEditing}
      />
      <StyledFormControlWithTextField
        title="Ім'я"
        htmlFor="firstName"
        register={{
          ...register("firstName", {
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
        helperText={errors?.firstName ? errors.firstName.message : " "}
        error={!!errors?.firstName}
        disabled={!isAllowedEditing}
      />
      <StyledFormControlWithTextField
        title="Прізвище"
        htmlFor="lastName"
        register={{
          ...register("lastName", {
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
        helperText={errors?.lastName ? errors.lastName.message : " "}
        error={!!errors?.lastName}
        disabled={!isAllowedEditing}
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
        disabled={!isAllowedEditing}
      />
      {!isAllowedEditing && (
        <Button variant="contained" size="large" onClick={handleEditClick}>
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Реадагувати
          </Typography>
        </Button>
      )}
      {isAllowedEditing && (
        <Button variant="contained" size="large" type="submit">
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Зберегти
          </Typography>
        </Button>
      )}
    </StyledForm>
  );
};

export default EditUserDataForm;
