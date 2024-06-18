import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";

const CatalogRoute = () => {
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
    const getShoesList = async () => {
      try {
        const response = await shoesService.fetchShoesList();
        setShoesList(response);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getShoesList();
  }, []);

  return (
    <StyledStackForRoutes
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      gap={6}
    >
      <ShoesFilterForm order={1} />
      <ShoesList order={2} shoesList={shoesList} />
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
