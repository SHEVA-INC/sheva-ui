import { Button, Typography } from "@mui/material";
import StyledForm from "../components/styled/StyledForm";
import StyledFormControlWithTextFieldForPassword from "../components/styled/StyledFormControlWithTextFieldForPassword";
import { useState } from "react";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  return (
    <StyledForm
      alignItems="flex-start"
      px={6}
      py={6}
      boxShadow="none"
      borderRadius={0}
    >
      <StyledFormControlWithTextFieldForPassword
        title="Поточний пароль"
        value={currentPassword}
        onChange={(e) => handleCurrentPasswordChange(e)}
        autoComplete="current-password"
      />
      <StyledFormControlWithTextFieldForPassword
        title="Новий пароль"
        value={newPassword}
        onChange={(e) => handleNewPasswordChange(e)}
        autoComplete="new-password"
      />
      <StyledFormControlWithTextFieldForPassword
        title="Підтвердити пароль"
        value={confirmNewPassword}
        onChange={(e) => handleConfirmNewPasswordChange(e)}
        autoComplete="new-password"
      />
      <Button variant="contained" size="large">
        <Typography variant="body2" textTransform="uppercase" fontWeight="bold">
          Змінити пароль
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ChangePasswordForm;
