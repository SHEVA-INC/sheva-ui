import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoesCarousel from "../components/shoes-slider/ShoesCarousel";
import ShoesCarouselData from "../components/shoes-slider/ShoesCarouselData";
import GradientShoesBlock from "../components/GradientShoesBlock";
import NumbersBlock from "../components/NumbersBlock";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";
import ReviewsCarouselData from "../components/reviews/ReviewsCarouselData";
import HomeMainBlock from "../components/HomeMainBlock";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import ShoesAdItem from "../components/ShoesAdItem";
import ShoesAd from "../assets/shoes-ad/shoes-ad.png";

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
        <Stack
          flexDirection="column"
          justifyContent="space-between"
          width={1}
          gap={6}
        >
          <Stack
            flexDirection="row"
            gap={6}
            width={1}
            display={{ xs: "none", md: "flex" }}
          >
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
            />
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
            />
          </Stack>

          <Stack
            width={1}
            flexDirection={{ xs: "column", md: "row" }}
            gap={6}
            alignItems="center"
          >
            <ShoesSmallList title="Flash sale today" />
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
              display={{ xs: "flex", md: "none" }}
            />
            <ShoesSmallList title="Best sellers" />
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
              display={{ xs: "flex", md: "none" }}
            />
            <ShoesSmallList title="Top Rated" />
          </Stack>
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
            <Typography fontWeight="bold" variant="h5" p={1}>
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
