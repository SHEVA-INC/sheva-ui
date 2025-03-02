import { useEffect, useState } from "react";

const useLikedItems = (type) => {
  const storageKey = type === "shoes" ? "likedShoes" : "likedAccessories";
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const storedLikedItems = JSON.parse(localStorage.getItem(storageKey)) || [];
    setLikedItems(storedLikedItems);
  }, [storageKey]);

  const handleLikeClick = (id) => {
    setLikedItems((prevLikedItems) => {
      let updatedLikedItems;
      if (prevLikedItems.includes(id)) {
        updatedLikedItems = prevLikedItems.filter((itemId) => itemId !== id);
      } else {
        updatedLikedItems = [...prevLikedItems, id];
      }
      localStorage.setItem(storageKey, JSON.stringify(updatedLikedItems));
      return updatedLikedItems;
    });
  };

  return [likedItems, handleLikeClick];
};

export default useLikedItems;
