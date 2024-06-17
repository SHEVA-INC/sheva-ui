import { IconButton, Stack, Typography } from "@mui/material";
import LikeIcon from "../../icons/shopping/LikeIcon";
import { useState } from "react";
import ShoppingCartIcon from "../../icons/shopping/ShoppingCartIcon";

const ShoesCarouselItem = ({ name, description, price, mainImage, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };
  return (
    <Stack>
      <img
        src={mainImage}
        alt={name}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <Stack>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="p">{description}</Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="p" fontWeight="bold">
            {price}
          </Typography>
          <Stack flexDirection="row" gap={2}>
            <IconButton>
              <ShoppingCartIcon color="black" fontSize="small" />
            </IconButton>
            <IconButton onClick={handleLikeClick}>
              {!isLiked ? (
                <LikeIcon color="black" fontSize="small" />
              ) : (
                <LikeIcon color="black" fill="black" fontSize="small" />
              )}
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesCarouselItem;
