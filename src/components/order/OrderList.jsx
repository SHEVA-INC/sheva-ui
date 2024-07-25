import { Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import StyledPagination from "../styled/StyledPagination";

const OrderList = ({
  orders,
  totalPages,
  pageNumber,
  handlePageNumberChange,
  width,
  fontVariant,
  handleItemRemove,
}) => {
  return (
    <Stack gap={2} width={width} alignItems="center">
      {orders.map((orderItem) => (
        <OrderItem
          key={orderItem.cart_product_id}
          id={orderItem.id}
          cartProductId={orderItem.cart_product_id}
          mainImage={orderItem.main_image}
          name={orderItem.name}
          brand={orderItem.brand}
          type={orderItem.type}
          size={orderItem.size}
          price={orderItem.price}
          color={orderItem.color}
          quantity={orderItem.quantity}
          subtotal={orderItem.subtotal}
          fontVariant={fontVariant}
          handleItemRemove={handleItemRemove}
        />
      ))}
      {orders.length > 0 && (
        <StyledPagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
        />
      )}
    </Stack>
  );
};

export default OrderList;
