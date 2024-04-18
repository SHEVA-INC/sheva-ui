import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledStackWithBordersAndTitle from "../components/styled/StyledStackWithBordersAndTitle";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import UpdateUserDataForm from "../forms/UpdateUserDataForm";

const ProfileRoute = () => {
  return (
    <StyledStackForRoutes
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <StyledStackWithBordersAndTitle title="Налаштування" flex={1}>
        <UpdateUserDataForm />
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
