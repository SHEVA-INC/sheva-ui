import { Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_ROUTE } from "../app/Routes";

const ShoppingCartTotal = ({ shoppingCartList, totalPrice, width }) => {
  const navigate = useNavigate();

  const handleNavigateToCheckoutRoute = () => {
    navigate(CHECKOUT_ROUTE);
  };

  return (
    <Stack
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border={1}
      borderColor="secondary.light"
      width={width}
      height="fit-content"
      px={5}
      py={4}
      gap={3}
    >
      <Typography variant="h6" fontWeight="bold">
        Ваше замовлення
      </Typography>
      <Divider />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">Кількість товарів</Typography>
        <Typography variant="h6">{shoppingCartList?.length}</Typography>
      </Stack>
      <Divider />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          Всього
        </Typography>
        <Typography variant="h6">{totalPrice}</Typography>
      </Stack>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => handleNavigateToCheckoutRoute()}
        sx={{ minWidth: 1, borderRadius: 0.5 }}
      >
        <Typography variant="h6">Оформити замовлення</Typography>
      </Button>
    </Stack>
  );
};

export default ShoppingCartTotal;
