import { Stack } from "@mui/material";
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
  } = useShoppingCart();

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Оформити замовлення" />
      <Stack flexDirection={{ xs: "column", md: "row" }} gap={6}>
        <Stack gap={6} flexDirection="column" width={{ xs: 1, md: 0.4 }}>
          <OrderTotal orderList={ordersList} totalPrice={totalPrice} />
          <OrderList
            variant="p"
            variantTitle="h6"
            orders={ordersList}
            totalPages={ordersTotalPages}
            pageNumber={ordersPageNumber}
            handlePageNumberChange={handlePageNumberChange}
            isAllowedToDelete={false}
            maxWidth={{ xs: "100%", sm: "200px", md: "100px", lg: "100px" }}
          />
        </Stack>
        <CheckoutForm
          width={{ xs: 1, md: 0.6 }}
        />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CheckoutRoute;
