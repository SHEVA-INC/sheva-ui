import ShoesDetails from "../components/shoes/ShoesDetails";
import ShoesCarousel from "../components/shoes-carousel/ShoesCarousel";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";

const DetailedShoesRoute = () => {
  const [newShoes, setNewShoes] = useState([]);

  useEffect(() => {
    const getNewShoes = async () => {
      try {
        const response = await shoesService.fetchNewShoes();
        setNewShoes(response);
      } catch (error) {
        console.error("Error fetching new shoes:", error);
      }
    };

    getNewShoes();
  }, []);

  return (
    <StyledStackForRoutes>
      <ShoesDetails />
      <ShoesCarousel title="Новинки" shoesCarouselData={newShoes} />
    </StyledStackForRoutes>
  );
};

export default DetailedShoesRoute;
