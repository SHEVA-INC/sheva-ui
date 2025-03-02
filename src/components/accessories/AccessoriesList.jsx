import { Stack } from "@mui/material";
import StyledPagination from "../styled/StyledPagination";
import AccessoriesItem from "./AccessoriesItem";

const AccessoriesList = ({
  order,
  accessoriesList,
  likedItems,
  handleLikeClick,
  totalPages,
  pageNumber,
  handlePageNumberChange,
  width,
  maxWidth,
}) => {
  return (
    <Stack gap={5} flex={1} order={order} alignItems="center">
      {accessoriesList.map((accessoriesItem, idx) => (
        <AccessoriesItem
          key={idx}
          id={accessoriesItem.id}
          name={accessoriesItem.name}
          type={accessoriesItem.type}
          price={accessoriesItem.price}
          size={accessoriesItem?.size}
          mainImage={accessoriesItem.main_image}
          isLiked={likedItems.includes(accessoriesItem.id)}
          onLikeClick={() => handleLikeClick(accessoriesItem.id)}
          width={width}
          maxWidth={maxWidth}
        />
      ))}
      {accessoriesList.length > 0 && (
        <StyledPagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
        />
      )}
    </Stack>
  );
};

export default AccessoriesList;
