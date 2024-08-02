import { Stack } from "@mui/material";
import ShoesItem from "./ShoesItem";
import StyledPagination from "../styled/StyledPagination";

const ShoesList = ({
  order,
  shoesList,
  likedItems,
  handleLikeClick,
  totalPages,
  pageNumber,
  handlePageNumberChange,
  width,
  setSelectedColor,
  maxWidth,
}) => {
  return (
    <Stack gap={5} flex={1} order={order} alignItems="center">
      {shoesList.map((shoesItem, idx) => (
        <ShoesItem
          key={idx}
          id={shoesItem.id}
          name={shoesItem.name}
          brand={shoesItem.brand}
          type={shoesItem.type}
          price={shoesItem.price}
          color={shoesItem.color}
          sizes={shoesItem?.sizes}
          images={shoesItem.uploaded_images}
          mainImage={shoesItem.main_image}
          isLiked={likedItems.includes(shoesItem.id)}
          onLikeClick={() => handleLikeClick(shoesItem.id)}
          width={width}
          maxWidth={maxWidth}
          setSelectedColor={setSelectedColor}
        />
      ))}
      {shoesList.length > 0 && (
        <StyledPagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
        />
      )}
    </Stack>
  );
};

export default ShoesList;
