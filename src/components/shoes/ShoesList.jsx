import { Pagination, PaginationItem, Stack } from "@mui/material";
import ShoesItem from "./ShoesItem";

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
          setSelectedColor={setSelectedColor}
        />
      ))}
      {shoesList.length > 0 && (
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

export default ShoesList;
