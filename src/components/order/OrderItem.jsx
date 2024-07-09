import { Box, IconButton, Stack, Typography } from "@mui/material";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";
import { useNavigate } from "react-router-dom";
import { DETAILED_SHOES_ROUTE } from "../../app/Routes";
import DeleteIcon from "../../icons/DeleteIcon";
import orderService from "../../services/OrderService";

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
  handleItemRemove,
}) => {
  const navigate = useNavigate();

  const handleShoesItemClick = (shoesId) => {
    navigate(`${DETAILED_SHOES_ROUTE.replace(":shoesId", shoesId)}`);
  };

  const handleDeleteOrderItemFromCart = async (e, productId) => {
    e.stopPropagation();
    await orderService.deleteProductFromOrder(productId);
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
      alignItems="center"
    >
      <Box
        component="img"
        src={mainImage}
        alt={name}
        width="100%"
        minWidth={{ xs: "100%", sm: "170px", md: "200px", lg: "220px" }}
        maxWidth={{ xs: "100%", sm: "170px", md: "200px", lg: "220px" }}
        height="fit-content"
      />

      <Stack
        maxWidth={{ xs: "100%" }}
        flex={1}
        gap={1}
        justifyContent="space-between"
      >
        <Typography variant="h6" fontWeight="bold">
          {upperCaseFirstLetter(brand)} {name}
        </Typography>

        <Typography variant={fontVariant}>Тип: {type}</Typography>
        <Typography variant={fontVariant}>Колір: {color}</Typography>
        <Typography variant={fontVariant}>Розмір: {size}</Typography>
        <Typography variant={fontVariant}>Ціна: {price}</Typography>
        <Typography variant={fontVariant}>Кількість: {quantity}</Typography>
        <Typography variant={fontVariant}>Вартість: {subtotal}</Typography>
      </Stack>
      <IconButton
        onClick={(e) => handleDeleteOrderItemFromCart(e, cartProductId)}
        sx={{
          alignSelf: "flex-start",
          py: 2,
          justifyContent: "flex-end",
        }}
      >
        <DeleteIcon color="black" fontSize="medium" />
      </IconButton>
    </Stack>
  );
};

export default OrderItem;
