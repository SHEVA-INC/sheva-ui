import { Stack } from "@mui/material";
import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";

const CatalogRoute = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      gap={13}
      px={3}
      my={8}
      maxWidth="lg"
      width={1}
    >
      <ShoesFilterForm />
      <ShoesList />
    </Stack>
  );
};

export default CatalogRoute;
