import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoesCarousel from "../components/shoes-carousel/ShoesCarousel";
import ShoesCarouselData from "../components/shoes-carousel/ShoesCarouselData";
import GradientShoesBlock from "../components/GradientShoesBlock";
import NumbersBlock from "../components/NumbersBlock";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import HomeMainBlock from "../components/HomeMainBlock";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import ShoesAdItem from "../components/ShoesAdItem";
import ShoesAd from "../assets/shoes-ad/shoes-ad.png";
import ReviewsList from "../components/reviews/ReviewsList";
import reviewService from "../services/ReviewService";
import { useEffect, useState } from "react";
import AddReviewForm from "../forms/AddReviewForm";
import StyledTitle from "../components/styled/StyledTitle";
import useAuth from "../auth/useAuth";

const HomeRoute = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [addReview, setAddReview] = useState(false);
  const [isReviewDeleted, setIsReviewDeleted] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const { authorized } = useAuth();

  const handleAddReviewClick = () => {
    setAddReview(true);
  };

  useEffect(() => {
    const getReviewsList = async () => {
      try {
        const response = await reviewService.fetchReviews();
        console.log(response);
        setReviewsList(response);
        setIsReviewDeleted(false);
        setIsReviewAdded(false);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };
    console.log(isReviewDeleted);

    getReviewsList();
  }, [isReviewDeleted, isReviewAdded]);

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
        <StyledTitle title="Відгуки" />

        {authorized() && (
          <>
            {addReview ? (
              <AddReviewForm setIsReviewAdded={setIsReviewAdded} />
            ) : (
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={handleAddReviewClick}
              >
                Додати відгук
              </Button>
            )}
          </>
        )}

        <ReviewsList
          id="reviews"
          reviewsAmount="3,126"
          reviewsData={reviewsList}
          setIsReviewDeleted={setIsReviewDeleted}
        />
      </StyledStackForRoutes>
    </Stack>
  );
};

export default HomeRoute;
