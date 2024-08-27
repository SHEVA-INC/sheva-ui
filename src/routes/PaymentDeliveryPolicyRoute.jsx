import { Stack } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledTitle from "../components/styled/StyledTitle";
import PaymentDeliveryPolicyContent from "../components/PaymentDeliveryPolicyContent";

const PaymentDeliveryPolicyRoute = () => {
  return (
    <StyledStackForRoutes>
      <StyledTitle title="Оплата та доставка" />
      <Stack flexDirection="column">
        <PaymentDeliveryPolicyContent />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default PaymentDeliveryPolicyRoute;
