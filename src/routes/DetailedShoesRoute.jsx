import ShoesDetails from "../components/shoes/ShoesDetails";
import ShoesCarousel from "../components/shoes-carousel/ShoesCarousel";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";

const DetailedShoesRoute = () => {
  const [newShoes, setNewShoes] = useState([]);
  const [popularShoes, setPopularShoes] = useState([]);

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

  useEffect(() => {
    const getPopularShoes = async () => {
      try {
        const response = await shoesService.fetchPopularShoes();
        setPopularShoes(response);
      } catch (error) {
        console.error("Error fetching popualar shoes:", error);
      }
    };

    getPopularShoes();
  }, []);

  return (
    <StyledStackForRoutes>
      <ShoesDetails />
      <ShoesCarousel title="Рекомендовані" shoesCarouselData={newShoes} />
      <ShoesCarousel
        title="Нещодавно переглянуті"
        shoesCarouselData={popularShoes}
      />
    </StyledStackForRoutes>
  );
};

export default DetailedShoesRoute;
