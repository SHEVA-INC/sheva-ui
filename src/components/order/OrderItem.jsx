import { Box, IconButton, Stack, Typography } from "@mui/material";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";
import { useNavigate } from "react-router-dom";
import { DETAILED_SHOES_ROUTE } from "../../app/Routes";
import DeleteIcon from "../../icons/DeleteIcon";
import shoppingCartService from "../../services/ShoppingCartService";

const OrderItem = ({
  id,
  cartProductId,
  mainImage,
  name,
  brand,
  type,
  color,
  size,
  price,
  quantity,
  subtotal,
  fontVariant = "h6",
  fontVariantTitle = "h5",
  isAllowedToDelete = true,
  handleItemRemove,
  maxWidth,
}) => {
  const navigate = useNavigate();

  const handleShoesItemClick = (shoesId) => {
    navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesId", shoesId)}`);
  };

  const handleDeleteOrderItemFromCart = async (e, productId) => {
    e.stopPropagation();
    await shoppingCartService.deleteProductFromShoppingCart(productId);
    handleItemRemove(true);
  };

  return (
    <Stack
      id={cartProductId}
      onClick={() => handleShoesItemClick(id)}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="flex-start"
      gap={2}
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border={1}
      borderColor="secondary.light"
      p={3}
      width={1}
      alignItems={{ xs: "flex-start", sm: "center" }}
    >
      <Box
        component="img"
        src={mainImage}
        alt={name}
        width="100%"
        minWidth={maxWidth}
        maxWidth={maxWidth}
        height="fit-content"
        order={{ xs: 2, sm: 1 }}
        sx={{ aspectRatio: 4.5 / 3 }}
      />

      <Stack
        maxWidth="100%"
        flex={1}
        gap={1}
        justifyContent="space-between"
        order={{ xs: 3, sm: 2 }}
      >
        <Typography variant={fontVariantTitle} fontWeight="bold">
          {upperCaseFirstLetter(brand)} {name}
        </Typography>
        <Typography variant={fontVariant}>Тип: {type}</Typography>
        <Typography variant={fontVariant}>Колір: {color}</Typography>
        <Typography variant={fontVariant}>Розмір: {size}</Typography>
        <Typography variant={fontVariant}>Ціна: {price}</Typography>
        <Typography variant={fontVariant}>Кількість: {quantity}</Typography>
        <Typography variant={fontVariant}>Вартість: {subtotal}</Typography>
      </Stack>
      {isAllowedToDelete && (
        <IconButton
          onClick={(e) => handleDeleteOrderItemFromCart(e, cartProductId)}
          sx={{
            p: 2,
            alignSelf: { xs: "flex-end", sm: "flex-start" },
            order: { xs: 1, sm: 3 },
          }}
        >
          <DeleteIcon color="black" fontSize="small" />
        </IconButton>
      )}
    </Stack>
  );
};

export default OrderItem;
