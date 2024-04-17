import ShoesDetails from "../components/shoes/ShoesDetails";
import ShoesCarousel from "../components/shoes-slider/ShoesCarousel";
import ShoesCarouselData from "../components/shoes-slider/ShoesCarouselData";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const DetailedShoesRoute = () => {
  return (
    <StyledStackForRoutes>
      <ShoesDetails />
      <ShoesCarousel
        title="Рекомендовані"
        shoesCarouselData={ShoesCarouselData}
      />
      <ShoesCarousel
        title="Нещодавно переглянуті"
        shoesCarouselData={ShoesCarouselData}
      />
    </StyledStackForRoutes>
  );
};

export default DetailedShoesRoute;
