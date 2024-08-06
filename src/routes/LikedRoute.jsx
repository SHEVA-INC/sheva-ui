import { Link, Stack, Typography } from "@mui/material";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import useLikedShoes from "../custom-hooks/useLikedShoes";
import { Link as RouterLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";

const LikedRoute = () => {
  const [likedShoesList, setLikedShoesList] = useState([]);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchLikedShoes = async (pageNum, liked) => {
      try {
        const response = await shoesService.fetchLikedShoes(pageNum, {
          ids: liked,
        });
        setLikedShoesList(response.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching liked shoes:", error);
      }
    };

    fetchLikedShoes(pageNumber, likedItems);
  }, [pageNumber, likedItems]);

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
        {likedShoesList.length === 0 ? (
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
            shoesList={likedShoesList}
            likedItems={likedItems}
            handleLikeClick={handleLikeClick}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
            width={1}
            maxWidth={812}
          />
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
