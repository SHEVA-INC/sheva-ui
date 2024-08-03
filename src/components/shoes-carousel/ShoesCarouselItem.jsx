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
          aspectRatio: 4.5 / 3,
          objectFit: "cover",
        }}
      />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
      >
        <Stack>
          <Typography variant="h6">
            {upperCaseFirstLetter(brand)} {name}
          </Typography>
        </Stack>
        <Typography variant="h6">{price}</Typography>
      </Stack>
    </Stack>
  );
};

export default ShoesCarouselItem;
