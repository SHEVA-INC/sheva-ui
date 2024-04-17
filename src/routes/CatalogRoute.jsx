import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const CatalogRoute = () => {
  return (
    <StyledStackForRoutes
      flexDirection="row"
      justifyContent="space-between"
      gap={12}
    >
      <ShoesFilterForm />
      <ShoesList />
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
