import { Stack } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledTitle from "../components/styled/StyledTitle";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const PrivacyPolicyRoute = () => {
  return (
    <StyledStackForRoutes>
      <StyledTitle title="Політика конфіденційності" />
      <Stack flexDirection="column">
        <PrivacyPolicyContent />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default PrivacyPolicyRoute;
