import { Pagination, PaginationItem, Stack } from "@mui/material";
import OrderItem from "./OrderItem";

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
        <Pagination
          size="large"
          count={totalPages}
          page={pageNumber}
          onChange={handlePageNumberChange}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      )}
    </Stack>
  );
};

export default OrderList;
