import StyledTitle from "../styled/StyledTitle";
import { Grid, Stack, Typography } from "@mui/material";
import ReviewCarouselItem from "./ReviewCarouselItem";
import StyledCarousel from "../styled/StyledCarousel";

const ReviewsCarousel = ({ title, reviewsAmount, reviewsCarouselData, id }) => {
  return (
    <Stack gap={5} id={id}>
      <StyledTitle title={title} />
      <Stack>
        <Typography variant="h6">{reviewsAmount} reviews</Typography>
        <StyledCarousel>
          {reviewsCarouselData.map((reviewItems, idx) => (
            <Grid container spacing={8} key={idx} flexDirection="column">
              {reviewItems.map((reviewItem) => (
                <Grid item xs={12} key={reviewItem.id}>
                  <ReviewCarouselItem
                    key={reviewItem.id}
                    name={reviewItem.name}
                    surname={reviewItem.surname}
                    modelNumber={reviewItem.modelNumber}
                    color={reviewItem.color}
                    isRecomended={reviewItem.isRecomended}
                    rating={reviewItem.rating.ratingNumber}
                    title={reviewItem.title}
                    description={reviewItem.description}
                    date={reviewItem.date}
                  />
                </Grid>
              ))}
            </Grid>
          ))}
        </StyledCarousel>
      </Stack>
    </Stack>
  );
};

export default ReviewsCarousel;
