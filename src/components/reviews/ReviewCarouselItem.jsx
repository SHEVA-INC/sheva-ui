import { Stack, Typography } from "@mui/material";
import StyledRating from "../styled/StyledRating";

const ReviewCarouselItem = ({
  name,
  surname,
  modelNumber,
  color,
  isRecomended,
  rating,
  title,
  description,
  date,
}) => {
  return (
    <Stack
      borderTop={1}
      borderBottom={1}
      flexDirection="row"
      width={1}
      py={6}
      gap={6}
    >
      <Stack
        borderRadius={2}
        py={6}
        px={5}
        gap={1}
        minWidth="300px"
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        <Typography variant="h6" fontWeight="bold">
          {name} {surname}
        </Typography>
        <Stack>
          <Typography fontWeight="bold">Reviewing</Typography>
          <Typography>
            {modelNumber}: {color}
          </Typography>
        </Stack>
        <Typography>{isRecomended && "I recommend this product"}</Typography>
      </Stack>
      <Stack gap={1}>
        <StyledRating value={rating} />
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Typography>Was this helpful?</Typography>
      </Stack>
      <Typography minWidth="fit-content">{date}</Typography>
    </Stack>
  );
};

export default ReviewCarouselItem;
