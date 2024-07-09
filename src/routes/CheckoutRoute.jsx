import { Stack, Typography } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledTitle from "../components/styled/StyledTitle";
import CheckoutForm from "../forms/CheckoutForm";
import OrderList from "../components/order/OrderList";
import OrderTotal from "../components/OrderTotal";
import useShoppingCart from "../custom-hooks/useShoppingCart";

const CheckoutRoute = () => {
  const {
    shoppingCartList: ordersList,
    totalPages: ordersTotalPages,
    pageNumber: ordersPageNumber,
    totalPrice,
    handlePageNumberChange,
    handleItemRemove,
  } = useShoppingCart();

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Оформити замовлення" />
      <Stack flexDirection="row" gap={6}>
        <CheckoutForm width={0.6} />
        <Stack gap={6} flexDirection="column" width={0.4}>
          <OrderTotal orderList={ordersList} totalPrice={totalPrice} />
          <OrderList
            fontVariant="p"
            orders={ordersList}
            totalPages={ordersTotalPages}
            pageNumber={ordersPageNumber}
            handlePageNumberChange={handlePageNumberChange}
            handleItemRemove={handleItemRemove}
          />
        </Stack>
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CheckoutRoute;
