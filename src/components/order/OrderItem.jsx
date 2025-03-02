import { Box, IconButton, Stack, Typography } from "@mui/material";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";
import { useNavigate } from "react-router-dom";
import {
  DETAILED_ACCESSORIES_ROUTE,
  DETAILED_SHOES_ROUTE,
} from "../../app/Routes";
import DeleteIcon from "../../icons/DeleteIcon";
import shoppingCartService from "../../services/ShoppingCartService";

const OrderItem = ({
  id,
  productType,
  mainImage,
  name,
  brand,
  type,
  color,
  size,
  price,
  quantity,
  subtotal,
  fontVariant,
  fontVariantTitle,
  isAllowedToDelete = true,
  handleItemRemove,
  maxWidth,
}) => {
  const navigate = useNavigate();

  const handleOrderItemClick = (productType, id) => {
    if (productType === "boots")
      navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesId", id)}`);
    else if (productType === "accessory")
      navigate(`${DETAILED_ACCESSORIES_ROUTE.replace(":accessoriesId", id)}`);
  };

  const handleDeleteOrderItemFromCart = async (e, id) => {
    e.stopPropagation();
    await shoppingCartService.deleteProductFromShoppingCart(id);
    handleItemRemove(true);
  };

  return (
    <Stack
      onClick={() => handleOrderItemClick(productType, id)}
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
          {brand && upperCaseFirstLetter(brand)} {name}
        </Typography>
        <Typography variant={fontVariant}>Тип: {type}</Typography>
        {color && <Typography variant={fontVariant}>Колір: {color}</Typography>}
        <Typography variant={fontVariant}>Розмір: {size}</Typography>
        <Typography variant={fontVariant}>Ціна: {price}</Typography>
        <Typography variant={fontVariant}>Кількість: {quantity}</Typography>
        <Typography variant={fontVariant}>Вартість: {subtotal}</Typography>
      </Stack>
      {isAllowedToDelete && (
        <IconButton
          onClick={(e) => handleDeleteOrderItemFromCart(e, id)}
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
