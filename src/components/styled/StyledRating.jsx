import { Rating } from "@mui/material";
import StarIcon from "../../icons/StarIcon";

const StyledRating = ({ value }) => {
  return (
    <Rating
      value={value}
      precision={0.1}
      readOnly
      icon={<StarIcon fill="black" color="black" fontSize="small" />}
      emptyIcon={<StarIcon color="lightgrey" fontSize="small" />}
    />
  );
};

export default StyledRating;
