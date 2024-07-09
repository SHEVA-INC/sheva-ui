import { Divider, Stack, Typography } from "@mui/material";

const OrderTotal = ({ orderList, totalPrice, width }) => {
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
        Замовлення
      </Typography>
      <Divider />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="p">Кількість товарів</Typography>
        <Typography variant="p">{orderList?.length}</Typography>
      </Stack>
      <Divider />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="p" fontWeight="bold">
          Всього
        </Typography>
        <Typography variant="p">{totalPrice}</Typography>
      </Stack>
    </Stack>
  );
};

export default OrderTotal;
