import { Stack, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";
import reviewService from "../../services/ReviewService";
import StyledPagination from "../styled/StyledPagination";
import useAuth from "../../auth/useAuth";

const ReviewsList = ({
  id,
  reviewsAmount,
  reviewsData,
  setIsReviewDeleted,
  totalPages,
  pageNumber,
  handlePageNumberChange,
}) => {
  const { userRole } = useAuth();

  const handleDeleteReviewClick = async (reviewId) => {
    try {
      if (userRole === "admin") {
        await reviewService.deleteReviewByAdmin(reviewId);
        setIsReviewDeleted((prev) => !prev);
      } else {
        await reviewService.deleteReview(reviewId);
        setIsReviewDeleted((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
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
        <StyledPagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
          sx={{ alignSelf: "center" }}
        />
      )}
    </Stack>
  );
};

export default ReviewsList;
