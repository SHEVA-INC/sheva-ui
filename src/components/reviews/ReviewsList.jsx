import { Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";
import reviewService from "../../services/ReviewService";

const ReviewsList = ({
  id,
  reviewsAmount,
  reviewsData,
  setIsReviewDeleted,
  totalPages,
  pageNumber,
  handlePageNumberChange,
}) => {
  const handleDeleteReviewClick = async (reviewId) => {
    try {
      await reviewService.deleteReview(reviewId);
      setIsReviewDeleted(true);
    } catch (error) {
      console.error("Error fetching shoes list:", error);
    }
  };

  return (
    <Stack gap={5} id={id}>
      <Typography variant="h6">{reviewsAmount} reviews</Typography>
      {reviewsData.map((reviewItem) => (
        <ReviewItem
          key={reviewItem.id}
          id={reviewItem.id}
          usrId={reviewItem.user_id}
          profilePicture={reviewItem.profile_picture}
          username={reviewItem.username}
          text={reviewItem.text}
          rating={reviewItem.rating}
          date={reviewItem.created_at}
          onDelete={() => handleDeleteReviewClick(reviewItem.id)}
        />
      ))}
      {reviewsData.length > 0 && (
        <Pagination
          size="large"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageNumberChange}
          renderItem={(item) => <PaginationItem {...item} />}
          sx={{ alignSelf: "center" }}
        />
      )}
    </Stack>
  );
};

export default ReviewsList;
