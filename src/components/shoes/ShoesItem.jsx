import { Button, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import LikeIcon from "../../icons/shopping/LikeIcon";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledSelect from "../styled/StyledSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DETAILED_SHOES_ROUTE } from "../../app/Routes";

const ShoesItem = ({
  name,
  description,
  colors,
  price,
  sizes,
  images,
  mainImage,
  liked,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const navigate = useNavigate();

  const handleShoesItemClick = (shoesName) => {
    const formattedName = shoesName.replace(/\s+/g, "-").toLowerCase();
    navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesName", formattedName)}`);
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      gap={9}
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border={1}
      borderColor="secondary.light"
      p={3}
      onClick={() => handleShoesItemClick(name)}
    >
      <Stack flexDirection="row" alignItems="center">
        <img
          src={mainImage}
          alt={name}
          style={{ width: "320px", height: "max-content" }}
        />
        <Stack spacing={1}>
          {images.slice(0, 3).map((image) => (
            <img
              key={image}
              src={image}
              alt={name}
              style={{ width: "114px" }}
            />
          ))}
        </Stack>
      </Stack>

      <Stack width="286px" gap={3}>
        <Stack>
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="h6">{description}</Typography>
        </Stack>

        <StyledColorPicker colors={colors} showColorsName={true} gap={1} />

        <StyledSelect
          selectId="size-select"
          defaultValue={sizes[0].value}
          formControlSize="small"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {sizes.map((size) => (
            <MenuItem key={size.id} value={size.value}>
              {size.value}
            </MenuItem>
          ))}
        </StyledSelect>

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="bold">
            {price}
          </Typography>
          <Stack flexDirection="row" gap={2} alignItems="center">
            <IconButton onClick={handleLikeClick}>
              {!isLiked ? (
                <LikeIcon color="black" />
              ) : (
                <LikeIcon color="black" fill="black" />
              )}
            </IconButton>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Typography px={3}>В корзину</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesItem;
