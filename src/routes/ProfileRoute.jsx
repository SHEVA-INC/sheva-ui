import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledStackWithBordersAndTitle from "../components/styled/StyledStackWithBordersAndTitle";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import UpdateUserDataForm from "../forms/UpdateUserDataForm";

const ProfileRoute = () => {
  return (
    <StyledStackForRoutes flexDirection="row" justifyContent="space-between">
      <StyledStackWithBordersAndTitle title="Налаштування" flex={1}>
        <UpdateUserDataForm />
      </StyledStackWithBordersAndTitle>
      <StyledStackWithBordersAndTitle title="Змінити пароль">
        <ChangePasswordForm />
      </StyledStackWithBordersAndTitle>
    </StyledStackForRoutes>
  );
};

export default ProfileRoute;
