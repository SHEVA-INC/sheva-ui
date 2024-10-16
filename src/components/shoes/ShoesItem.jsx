import { IconButton, MenuItem, Stack, Typography, Box } from "@mui/material";
import LikeIcon from "../../icons/shopping/LikeIcon";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledFormControlWithSelect from "../styled/StyledFormControlWithSelect";
import { DETAILED_SHOES_ROUTE } from "../../app/Routes";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ShoesItem = ({
  id,
  name,
  type,
  color,
  price,
  sizes,
  images,
  mainImage,
  isLiked,
  onLikeClick,
  width = 1,
  maxWidth,
  setSelectedColor,
}) => {
  const navigate = useNavigate();

  const handleShoesItemClick = (shoesId) => {
    navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesId", shoesId)}`);
  };

  const { register, watch } = useForm({
    mode: "all",
    values: {
      size: `${sizes[0]?.size}` || "",
    },
  });

  const selectedSize = watch("size");

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
      maxWidth={maxWidth}
    >
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box
          component="img"
          src={mainImage}
          alt={name}
          width="100%"
          minWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "380px" }}
          maxWidth={{ xs: "100%", sm: "320px", md: "300px", lg: "380px" }}
          sx={{ aspectRatio: 4.5 / 3, objectFit: "cover" }}
        />
        <Stack
          flexDirection={{ xs: "row", lg: "column" }}
          alignItems="center"
          flex={1}
          justifyContent="center"
          gap={{ xs: 0, lg: 4 }}
        >
          {images.slice(0, 3).map((image) => (
            <Box
              component="img"
              key={image.image_url}
              src={image.image_url}
              alt={image.image_url}
              width={{ xs: "calc(100%/3)", sm: "100px" }}
              sx={{ aspectRatio: 4.5 / 3, objectFit: "cover" }}
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        maxWidth={{ xs: "100%", md: "440px" }}
        flex={1}
        gap={2}
        justifyContent="space-between"
      >
        <Typography variant="h5" fontWeight="bold">
          {name}
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
          value={`${selectedSize}`}
          formControlSize="small"
          onClick={(e) => {
            e.stopPropagation();
          }}
          register={{ ...register("size") }}
        >
          {sizes?.map((size) => (
            <MenuItem key={size?.size} value={`${size?.size}`}>
              {`${size?.size}`}
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
