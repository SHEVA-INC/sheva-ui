import { createContext, useState, useContext, useEffect } from "react";
import shoppingCartService from "../services/ShoppingCartService";

const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isItemRemoved, setIsItemRemoved] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const getCartList = async (pageNum) => {
      try {
        const response = await shoppingCartService.getShoppingCart(pageNum);
        setShoppingCartList(response.results.results);
        setTotalPages(response.results.total_pages);
        setPageNumber(response.results.current_page);
        setTotalPrice(response.results.total_price);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    // getCartList(pageNumber);
    // getCartList(pageNumber);
  }, [pageNumber, isItemRemoved, isAddedToCart]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleItemRemove = () => {
    setIsItemRemoved((prev) => !prev);
  };

  const handleItemAdd = () => {
    setIsAddedToCart((prev) => !prev);
  };

  return (
    <shoppingCartContext.Provider
      value={{
        shoppingCartList,
        totalPages,
        pageNumber,
        totalPrice,
        handlePageNumberChange,
        handleItemRemove,
        handleItemAdd,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default function useShoppingCart() {
  return useContext(shoppingCartContext);
}
