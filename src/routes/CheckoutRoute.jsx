import { Stack } from "@mui/material";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import StyledTitle from "../components/styled/StyledTitle";
import CheckoutForm from "../forms/CheckoutForm";
import OrderList from "../components/order/OrderList";
import OrderTotal from "../components/OrderTotal";
import useShoppingCart from "../custom-hooks/useShoppingCart";
import { useState } from "react";
import OrderDetails from "../components/order/OrderDetails";

const CheckoutRoute = () => {
  const [isOrderCreated, setIsOrderCreated] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const {
    shoppingCartList: ordersList,
    totalPages: ordersTotalPages,
    pageNumber: ordersPageNumber,
    totalPrice,
    handlePageNumberChange,
  } = useShoppingCart();

  if (isOrderCreated)
    return (
      <OrderDetails
        phoneNumber={responseData.phone_number}
        email={responseData.email}
        fullName={responseData.full_name}
        area={responseData.region}
        city={responseData.city_town}
        warehouse={responseData.post_office_number}
        paymentMethod={responseData.payment_method}
        date={responseData.created_at}
      />
    );

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
          setIsOrderCreated={setIsOrderCreated}
          setResponseData={setResponseData}
        />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CheckoutRoute;
