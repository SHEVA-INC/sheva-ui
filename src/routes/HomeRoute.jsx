import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import ShoesCarousel from "../components/shoes-slider/ShoesCarousel";
import ShoesCarouselData from "../components/shoes-slider/ShoesCarouselData";
import GradientShoesBlock from "../components/GradientShoesBlock";
import NumbersBlock from "../components/NumbersBlock";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import ShoesAdList from "../components/shoes-ad/ShoesAdList";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";
import ReviewsCarouselData from "../components/reviews/ReviewsCarouselData";
import HomeMainBlock from "../components/HomeMainBlock";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";

const HomeRoute = () => {
  return (
    <Stack width={1} alignItems="center">
      <HomeMainBlock />
      <NumbersBlock />

      <StyledStackForRoutes>
        <ShoesCarousel
          title="Новинки"
          id="new-items"
          shoesCarouselData={ShoesCarouselData}
        />
        <ShoesAdList />
        <Stack flexDirection="row" justifyContent="space-between">
          <ShoesSmallList title="Flash sale today" />
          <ShoesSmallList title="Best sellers" />
          <ShoesSmallList title="Top Rated" />
        </Stack>
      </StyledStackForRoutes>
      <GradientShoesBlock />
      <StyledStackForRoutes>
        <ShoesCarousel
          title="Популярне"
          id="popular"
          shoesCarouselData={ShoesCarouselData}
        />
        <Link
          component={RouterLink}
          to={CATALOG_ROUTE}
          style={{ alignSelf: "center" }}
        >
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{ textTransform: "uppercase" }}
          >
            <Typography fontWeight="bold" variant="h5">
              Перейти до каталогу
            </Typography>
          </Button>
        </Link>
        <ReviewsCarousel
          title="Відгуки"
          id="reviews"
          reviewsAmount="3,126"
          reviewsCarouselData={ReviewsCarouselData}
        />
      </StyledStackForRoutes>
    </Stack>
  );
};

export default HomeRoute;
