import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoesCarousel from "../components/shoes-carousel/ShoesCarousel";
import GradientShoesBlock from "../components/GradientShoesBlock";
import NumbersBlock from "../components/NumbersBlock";
import ShoesSmallList from "../components/shoes-small/ShoesSmallList";
import HomeMainBlock from "../components/HomeMainBlock";
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
import shoesService from "../services/ShoesService";
import ShoesSmallData1 from "../components/shoes-small/ShoesSmallData1";
import ShoesSmallData2 from "../components/shoes-small/ShoesSmallData2";
import ShoesSmallData3 from "../components/shoes-small/ShoesSmallData3";

const HomeRoute = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [addReview, setAddReview] = useState(false);
  const [isReviewDeleted, setIsReviewDeleted] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { authorized } = useAuth();

  useEffect(() => {
    const getReviewsList = async (pageNum) => {
      try {
        const response = await reviewService.fetchReviews(pageNum);
        setReviewsList(response.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getReviewsList(pageNumber);
  }, [isReviewDeleted, isReviewAdded, pageNumber]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleAddReviewClick = () => {
    setAddReview(true);
  };

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

  const navigate = useNavigate();

  const handleNavigateToCatalogRouteClick = () => {
    navigate(CATALOG_ROUTE);
  };

  return (
    <Stack width={1} alignItems="center">
      <HomeMainBlock />
      <NumbersBlock />

      <StyledStackForRoutes>
        <ShoesCarousel
          title="Новинки"
          id="new-items"
          shoesCarouselData={newShoes}
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
            <ShoesSmallList
              title="Flash sale today"
              shoesSmallData={ShoesSmallData1}
            />{" "}
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
              display={{ xs: "flex", md: "none" }}
            />
            <ShoesSmallList
              title="Best sellers"
              shoesSmallData={ShoesSmallData2}
            />
            <ShoesAdItem
              name="Nike Air Max"
              text="Get Amazing & Great Nike Shoes"
              image={ShoesAd}
              display={{ xs: "flex", md: "none" }}
            />
            <ShoesSmallList
              title="Top Rated"
              shoesSmallData={ShoesSmallData3}
            />
          </Stack>
        </Stack>
      </StyledStackForRoutes>

      <GradientShoesBlock />

      <StyledStackForRoutes>
        <ShoesCarousel
          title="Популярне"
          id="popular"
          shoesCarouselData={popularShoes}
        />

        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ textTransform: "uppercase", alignSelf: "center" }}
          onClick={handleNavigateToCatalogRouteClick}
        >
          <Typography fontWeight="bold" variant="h5" p={1}>
            Перейти до каталогу
          </Typography>
        </Button>
        {reviewsList?.length > 0 && (
          <>
            <Stack id="reviews" gap={6}>
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
            </Stack>
            <ReviewsList
              reviewsAmount="3,126"
              reviewsData={reviewsList}
              setIsReviewDeleted={setIsReviewDeleted}
              totalPages={totalPages}
              pageNumber={pageNumber}
              handlePageNumberChange={handlePageNumberChange}
            />
          </>
        )}
      </StyledStackForRoutes>
    </Stack>
  );
};

export default HomeRoute;
