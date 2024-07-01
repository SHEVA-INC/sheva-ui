import { useEffect, useState } from "react";

const useLikedShoes = () => {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const storedLikedItems = JSON.parse(localStorage.getItem("liked")) || [];
    setLikedItems(storedLikedItems);
  }, []);

  const handleLikeClick = (id) => {
    setLikedItems((prevLikedItems) => {
      let updatedLikedItems;
      if (prevLikedItems.includes(id)) {
        updatedLikedItems = prevLikedItems.filter((itemId) => itemId !== id);
      } else {
        updatedLikedItems = [...prevLikedItems, id];
      }
      localStorage.setItem("liked", JSON.stringify(updatedLikedItems));
      return updatedLikedItems;
    });
  };

  return [likedItems, handleLikeClick];
};

export default useLikedShoes;
