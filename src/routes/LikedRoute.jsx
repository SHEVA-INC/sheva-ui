import { Stack } from "@mui/material";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const LikedRoute = () => {
  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        <ShoesList order={{ xs: 2, md: 1 }} />
        <ShoesFilterForm order={{ xs: 1, md: 2 }} />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
