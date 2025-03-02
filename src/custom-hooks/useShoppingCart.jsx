import { useState, useEffect } from "react";
import shoppingCartService from "../services/ShoppingCartService";
import useAuth from "../auth/useAuth";

const useShoppingCart = () => {
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isItemRemoved, setIsItemRemoved] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartId, setCartId] = useState(null);
  const { authorized } = useAuth();

  useEffect(() => {
    const getCartList = async (pageNum) => {
      try {
        const response = await shoppingCartService.getShoppingCart(pageNum);
        setShoppingCartList(response.results.results);
        setCartId(response.results.cart_id);
        setTotalPrice(response.results.total_price);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching cart list:", error);
      }
    };

    if (authorized()) getCartList(pageNumber);
  }, [authorized, pageNumber, isItemRemoved, isAddedToCart]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleItemRemoveFromCart = () => {
    setIsItemRemoved((prev) => !prev);
  };

  const handleItemAddToCart = () => {
    setIsAddedToCart((prev) => !prev);
  };

  return {
    shoppingCartList,
    totalPages,
    pageNumber,
    totalPrice,
    cartId,
    handlePageNumberChange,
    handleItemRemoveFromCart,
    isAddedToCart,
    handleItemAddToCart,
  };
};

export default useShoppingCart;
