import { Rating, Stack, Typography } from "@mui/material";
import StarIcon from "../../icons/StarIcon";

const StyledRating = ({ readOnly, value, onChange, title, htmlFor }) => {
  return (
    <Stack>
      <Stack gap={2}>
        <Typography htmlFor={htmlFor}>{title}</Typography>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Rating
            id={htmlFor}
            precision={0.1}
            readOnly={readOnly}
            icon={<StarIcon fill="black" color="black" fontSize="small" />}
            emptyIcon={<StarIcon color="lightgrey" fontSize="small" />}
            value={value}
            onChange={(_, newValue) => {
              onChange(newValue);
            }}
          />
          <Typography>{value?.toFixed(1)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StyledRating;
