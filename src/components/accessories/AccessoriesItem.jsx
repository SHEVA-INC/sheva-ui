import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DETAILED_ACCESSORIES_ROUTE } from "../../app/Routes";
import LikeIcon from "../../icons/shopping/LikeIcon";

const AccessoriesItem = ({
  id,
  name,
  type,
  price,
  size,
  mainImage,
  isLiked,
  onLikeClick,
  width = 1,
  maxWidth,
}) => {
  const navigate = useNavigate();

  const handleShoesItemClick = (accessoriesId) => {
    navigate(
      `${DETAILED_ACCESSORIES_ROUTE.replace(":accessoriesId", accessoriesId)}`,
    );
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

        <Typography variant="h6">Розмір: {size}</Typography>

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

export default AccessoriesItem;
