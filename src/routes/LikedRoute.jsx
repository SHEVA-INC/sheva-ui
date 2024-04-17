import { Stack } from "@mui/material";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const LikedRoute = () => {
  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />
      <Stack flexDirection="row" justifyContent="space-between" gap={12}>
        <ShoesList />
        <ShoesFilterForm />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
