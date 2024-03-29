import { Stack } from "@mui/material";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";

const LikedRoute = () => {
  return (
    <Stack px={3} my={8} gap={6}>
      <StyledTitle title="Вподобане" />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        maxWidth="lg"
        width={1}
        gap={13}
      >
        <ShoesList />
        <ShoesFilterForm />
      </Stack>
    </Stack>
  );
};

export default LikedRoute;
