import { Stack } from "@mui/material";
import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";

const CatalogRoute = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="lg"
      width={1}
      gap={13}
      px={3}
      my={8}
    >
      <ShoesFilterForm />
      <ShoesList />
    </Stack>
  );
};

export default CatalogRoute;
