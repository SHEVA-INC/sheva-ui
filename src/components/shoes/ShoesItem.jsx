import { IconButton, MenuItem, Stack, Typography, Box } from "@mui/material";
import LikeIcon from "../../icons/shopping/LikeIcon";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledFormControlWithSelect from "../styled/StyledFormControlWithSelect";
import { DETAILED_SHOES_ROUTE } from "../../app/Routes";
import { useNavigate } from "react-router-dom";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";

const ShoesItem = ({
  id,
  name,
  brand,
  type,
  color,
  price,
  sizes,
  images,
  mainImage,
  isLiked,
  onLikeClick,
  width = 1,
  setSelectedColor,
}) => {
  const navigate = useNavigate();

  const handleShoesItemClick = (shoesId) => {
    navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesId", shoesId)}`);
  };

  return (
    <Stack
      id={id}
      onClick={() => handleShoesItemClick(id)}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      gap={8}
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border={1}
      borderColor="secondary.light"
      p={3}
      width={width}
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
          minWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "380px" }}
          maxWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "380px" }}
          height="fit-content"
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
              key={image.image_url}
              src={image.image_url}
              alt={image.image_url}
              width={{ xs: "calc(100%/3)", sm: "100px" }}
              height="fit-content"
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        maxWidth={{ xs: "100%", md: "420px" }}
        flex={1}
        gap={2}
        justifyContent="space-between"
      >
        <Typography variant="h5" fontWeight="bold">
          {upperCaseFirstLetter(brand)} {name}
        </Typography>

        <Typography variant="h6">Тип: {type}</Typography>

        <StyledColorPicker
          colors={color}
          selectedColor={color}
          setSelectedColor={setSelectedColor}
          showColorsName={true}
          gap={1}
          disabled={true}
        />

        <StyledFormControlWithSelect
          title="Розмір"
          selectId="size-select-boots"
          value={sizes[0].size}
          formControlSize="small"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {sizes?.map((size) => (
            <MenuItem key={size.size} value={size.size}>
              {size.size}
            </MenuItem>
          ))}
        </StyledFormControlWithSelect>

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
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onLikeClick();
              }}
            >
              {!isLiked ? (
                <LikeIcon color="black" />
              ) : (
                <LikeIcon color="black" fill="black" />
              )}
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesItem;
