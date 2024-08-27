import { Stack } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledTitle from "../components/styled/StyledTitle";
import ExchangeReturnPolicyContent from "../components/ExchangeReturnPolicyContent";

const ExchangeReturnPolicyRoute = () => {
  return (
    <StyledStackForRoutes>
      <StyledTitle title="Умови обміну та повернення" />
      <Stack flexDirection="column">
        <ExchangeReturnPolicyContent />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default ExchangeReturnPolicyRoute;
