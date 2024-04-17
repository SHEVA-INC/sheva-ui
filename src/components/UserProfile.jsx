import { Stack } from "@mui/material";
import UpdateUserDataForm from "../forms/UpdateUserDataForm";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import StyledStackWithBordersAndTitle from "./styled/StyledStackWithBordersAndTitle";

const UserProfile = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      gap={13}
      px={3}
      my={8}
      maxWidth="lg"
      width={1}
    >
      <StyledStackWithBordersAndTitle title="Налаштування" flex={1}>
        <UpdateUserDataForm />
      </StyledStackWithBordersAndTitle>
      <StyledStackWithBordersAndTitle title="Змінити пароль">
        <ChangePasswordForm />
      </StyledStackWithBordersAndTitle>
    </Stack>
  );
};

export default UserProfile;
