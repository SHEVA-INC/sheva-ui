import { Stack, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextField from "../components/styled/StyledFormControlWithTextField";
import userData from "../components/UserData";

const UpdateUserDataForm = () => {
  const [userName, setUserName] = useState(userData.userName);
  const [fullName, setfullName] = useState(userData.fullName);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [email, setEmail] = useState(userData.email);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setfullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Stack flexDirection={{ xs: "column", md: "row" }} gap={6} p={6}>
      <Avatar
        src={userData.imageSrc}
        alt={userData.fullName}
        sx={{ width: 180, height: 180 }}
      />
      <StyledForm alignItems="flex-start">
        <StyledFormControlWithTextField
          title="Ім'я"
          value={userName}
          onChange={(e) => handleUserNameChange(e)}
        />
        <StyledFormControlWithTextField
          title="Повне ім'я"
          value={fullName}
          onChange={(e) => handleFullNameChange(e)}
        />
        <StyledFormControlWithTextField
          title="Номер телефону"
          value={phoneNumber}
          onChange={(e) => handlePhoneNumberChange(e)}
        />
        <StyledFormControlWithTextField
          title="Пошта"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <Button variant="contained" size="large">
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Зберегти зміни
          </Typography>
        </Button>
      </StyledForm>
    </Stack>
  );
};

export default UpdateUserDataForm;
