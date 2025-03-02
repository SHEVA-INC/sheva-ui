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
  fontVariantTitle,
  isAllowedToDelete,
  handleItemRemove,
  maxWidth,
}) => {
  return (
    <Stack gap={5} width={width} alignItems="center">
      {orders.map((orderItem) => (
        <OrderItem
          key={orderItem.id}
          productType={orderItem.product_type}
          id={orderItem.id}
          mainImage={orderItem.product_data.main_image}
          name={orderItem.product_data.name}
          brand={orderItem.product_data?.brand}
          type={orderItem.product_data?.type}
          size={orderItem?.size}
          price={orderItem.product_data?.price}
          color={orderItem.product_data?.color}
          quantity={orderItem.quantity}
          subtotal={orderItem.subtotal}
          fontVariant={fontVariant}
          fontVariantTitle={fontVariantTitle}
          isAllowedToDelete={isAllowedToDelete}
          handleItemRemove={handleItemRemove}
          maxWidth={maxWidth}
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
