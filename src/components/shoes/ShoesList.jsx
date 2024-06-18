import { Stack } from "@mui/material";
import ShoesItem from "./ShoesItem";
import { useEffect, useState } from "react";

const ShoesList = ({ order, shoesList }) => {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const storedLikedItems = JSON.parse(localStorage.getItem("liked")) || [];
    setLikedItems(storedLikedItems);
  }, []);

  const handleLikeClick = (id) => {
    let updatedLikedItems;
    if (likedItems.includes(id)) {
      updatedLikedItems = likedItems.filter((itemId) => itemId !== id);
    } else {
      updatedLikedItems = [...likedItems, id];
    }
    setLikedItems(updatedLikedItems);
    localStorage.setItem("liked", JSON.stringify(updatedLikedItems));
  };

  return (
    <Stack gap={5} flex={1} order={order}>
      {shoesList.map((shoesItem) => (
        <ShoesItem
          key={shoesItem.id}
          id={shoesItem.id}
          name={shoesItem.name}
          price={shoesItem.price}
          color={shoesItem.color}
          sizes={shoesItem.sizes}
          images={shoesItem.images}
          mainImage={shoesItem.main_image}
          isLiked={likedItems.includes(shoesItem.id)}
          onLikeClick={() => handleLikeClick(shoesItem.id)}
        />
      ))}
    </Stack>
  );
};

export default ShoesList;
