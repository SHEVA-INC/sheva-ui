import { Stack, Typography } from "@mui/material";
import StyledStackForRoutes from "../styled/StyledStackForRoutes";
import dayjs from "dayjs";

const OrderDetails = ({
  phoneNumber,
  email,
  fullName,
  area,
  city,
  warehouse,
  paymentMethod,
  date,
}) => {
  return (
    <StyledStackForRoutes>
      <Stack gap={2}>
        <Typography variant="h3" fontWeight="bold">
          Ваше замовлення успішно оформлено.
        </Typography>
        <Typography variant="h5">
          Для підтвердження очікуйте дзвінок.
        </Typography>
      </Stack>
      <Stack
        borderRadius={(theme) => theme.shape.containerBorderRadius}
        border={1}
        borderColor="secondary.light"
        flexDirection={{ xs: "column", md: "row" }}
        width={1}
        gap={8}
        px={12}
        py={10}
      >
        <Typography variant="h5" fontWeight="bold">
          Дані замовлення
        </Typography>
        <Stack gap={4} width={0.7}>
          <Stack>
            <Typography variant="h6" fontWeight="bold">
              Отримувач
            </Typography>
            <Typography variant="h6">{phoneNumber}</Typography>
            <Typography variant="h6">{email}</Typography>
            <Typography variant="h6">{fullName}</Typography>
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight="bold">
              Адреса
            </Typography>
            <Typography variant="h6">
              {area} область, {city}, {warehouse}
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight="bold">
              Спосіб оплати
            </Typography>
            <Typography variant="h6">
              Оплата {paymentMethod.toLowerCase()}
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight="bold">
              Дата
            </Typography>
            <Typography variant="h6">
              {dayjs(date).format("D MMMM YYYY, HH:mm")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </StyledStackForRoutes>
  );
};

export default OrderDetails;
