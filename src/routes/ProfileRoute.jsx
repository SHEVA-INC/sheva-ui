import { Stack } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledStackWithBordersAndTitle from "../components/styled/StyledStackWithBordersAndTitle";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import EditUploadUserProfilePictureForm from "../forms/EditUploadUserProfilePictureForm";
import EditUserDataForm from "../forms/EditUserDataForm";

const ProfileRoute = () => {
  return (
    <StyledStackForRoutes
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <StyledStackWithBordersAndTitle title="Налаштування" flex={1}>
        <Stack flexDirection={{ xs: "column", md: "row" }} gap={6} p={6}>
          <EditUploadUserProfilePictureForm />
          <EditUserDataForm />
        </Stack>
      </StyledStackWithBordersAndTitle>
      <StyledStackWithBordersAndTitle
        title="Змінити пароль"
        width="100%"
        maxWidth="340px"
      >
        <ChangePasswordForm />
      </StyledStackWithBordersAndTitle>
    </StyledStackForRoutes>
  );
};

export default ProfileRoute;
