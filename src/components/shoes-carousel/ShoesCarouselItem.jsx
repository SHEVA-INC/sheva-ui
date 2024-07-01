import { Stack, Typography } from "@mui/material";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";

const ShoesCarouselItem = ({ name, brand, price, mainImage, onClick }) => {
  return (
    <Stack onClick={onClick}>
      <img
        src={mainImage}
        alt={name}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography variant="h6" fontWeight="bold">
            {upperCaseFirstLetter(brand)} {name}
          </Typography>
        </Stack>
        <Typography variant="h5" fontWeight="bold">
          {price}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ShoesCarouselItem;
