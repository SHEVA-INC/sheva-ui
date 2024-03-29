import { Stack } from "@mui/material";
import ShoesDetails from "../components/shoes/ShoesDetails";
import ShoesCarousel from "../components/shoes-slider/ShoesCarousel";
import ShoesCarouselData from "../components/shoes-slider/ShoesCarouselData";

const DetailedShoesRoute = () => {
  return (
    <Stack px={3} my={8} gap={10}>
      <ShoesDetails />
      <ShoesCarousel
        title="Рекомендовані"
        shoesCarouselData={ShoesCarouselData}
      />
      <ShoesCarousel
        title="Нещодавно переглянуті"
        shoesCarouselData={ShoesCarouselData}
      />
    </Stack>
  );
};

export default DetailedShoesRoute;
