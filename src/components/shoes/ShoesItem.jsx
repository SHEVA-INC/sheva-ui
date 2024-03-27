import { Button, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import LikeIcon from "../../icons/shopping/LikeIcon";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledSelect from "../styled/StyledSelect";
import { useState } from "react";

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

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
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
            <Button variant="contained" color="secondary">
              <Typography px={3}>В корзину</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesItem;
