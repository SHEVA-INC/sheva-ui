import {
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  Box,
} from "@mui/material";
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
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      gap={9}
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border={1}
      borderColor="secondary.light"
      p={3}
      onClick={() => handleShoesItemClick(name)}
      // width={1}
    >
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="img"
          src={mainImage}
          alt={name}
          width="100%"
          minWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "420px" }}
          maxWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "420px" }}
          height="max-content"
        />

        <Stack
          flexDirection={{ xs: "row", lg: "column" }}
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          {images.slice(0, 3).map((image) => (
            <Box
              component="img"
              key={image}
              src={image}
              alt={image}
              width={{ xs: "calc(100%/3)", sm: "100px" }}
              height="max-content"
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        maxWidth={{ xs: "100%", md: "420px" }}
        flex={1}
        gap={4}
        justifyContent="space-between"
      >
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
          flexDirection={{ xs: "row", md: "column" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            flex={1}
            width={1}
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight="bold">
              {price}
            </Typography>
            <IconButton onClick={handleLikeClick}>
              {!isLiked ? (
                <LikeIcon color="black" />
              ) : (
                <LikeIcon color="black" fill="black" />
              )}
            </IconButton>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.stopPropagation();
            }}
            sx={{ width: { xs: "inherit", md: "100%" } }}
          >
            <Typography px={3}>В корзину</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesItem;
