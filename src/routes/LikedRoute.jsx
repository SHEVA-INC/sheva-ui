import { Stack, Typography } from "@mui/material";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import ShoesList from "../components/shoes/ShoesList";

const LikedRoute = () => {
  return (
    <Stack px={3} my={8} gap={6}>
      <Typography variant="h3" fontWeight="bold" textTransform="uppercase">
        Вподобане
      </Typography>
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
