import { Link, Stack, Typography } from "@mui/material";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { Link as RouterLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import ShoppingCartTotal from "../components/ShoppingCartTotal";
import OrderList from "../components/order/OrderList";
import useShoppingCart from "../custom-hooks/useShoppingCart";

const ShoppingCartRoute = () => {
  const {
    shoppingCartList,
    totalPages,
    pageNumber,
    totalPrice,
    handlePageNumberChange,
    handleItemRemoveFromCart,
  } = useShoppingCart();

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Корзина" />
      <Stack gap={6} flex={1}>
        {shoppingCartList?.length > 0 ? (
          <Stack flexDirection={{ xs: "column", sm: "row" }} gap={6} width={1}>
            <OrderList
              width={{ xs: 1, sm: 0.7 }}
              orders={shoppingCartList}
              totalPages={totalPages}
              pageNumber={pageNumber}
              handlePageNumberChange={handlePageNumberChange}
              isAllowedToDelete={true}
              handleItemRemove={handleItemRemoveFromCart}
              maxWidth={{ xs: "100%", sm: "240px", md: "260px", lg: "300px" }}
            />
            <ShoppingCartTotal
              width={{ xs: 1, sm: 0.3 }}
              shoppingCartList={shoppingCartList}
              totalPrice={totalPrice}
            />
          </Stack>
        ) : (
          <Stack
            width={1}
            minHeight={1}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Typography variant="h6">
              Почніть додавати улюблені товари
            </Typography>
            <Link
              component={RouterLink}
              to={CATALOG_ROUTE}
              variant="h5"
              fontWeight="bold"
            >
              Каталог
            </Link>
          </Stack>
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default ShoppingCartRoute;
