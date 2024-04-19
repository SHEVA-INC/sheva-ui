import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const CatalogRoute = () => {
  return (
    <StyledStackForRoutes
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      gap={6}
    >
      <ShoesFilterForm order={1} />
      <ShoesList order={2} />
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
