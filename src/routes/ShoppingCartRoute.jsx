import { Link, Stack, Typography } from "@mui/material";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import useLikedShoes from "../custom-hooks/useLikedShoes";
import { Link as RouterLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import { useEffect, useState } from "react";
import shoppingCartService from "../services/ShoppingCartService";

const ShoppingCartRoute = () => {
  const [shoppingCartList, setShoppingCartList] = useState(null);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getCart = async (pageNum) => {
      try {
        const response = await shoppingCartService.getShoppingCart(pageNum);
        console.log(response.results.results);
        setShoppingCartList(response.results.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching liked shoes:", error);
      }
    };

    getCart(pageNumber);
  }, [pageNumber]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        flex={1}
      >
        {shoppingCartList.length === 0 ? (
          <Stack
            width={1}
            minHeight={1}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Typography variant="h6">
              Почніть додавати улюблені товари
            </Typography>
            <Link
              component={RouterLink}
              to={CATALOG_ROUTE}
              variant="h5"
              fontWeight="bold"
            >
              Каталог
            </Link>
          </Stack>
        ) : (
          <ShoesList
            order={{ xs: 2, md: 1 }}
            shoesList={shoppingCartList}
            likedItems={likedItems}
            handleLikeClick={handleLikeClick}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
            width="calc(100% - 364px)"
          />
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default ShoppingCartRoute;
