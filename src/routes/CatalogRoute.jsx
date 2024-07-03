import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";
import useLikedShoes from "../custom-hooks/useLikedShoes";
import { Button, Stack } from "@mui/material";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { ADD_SHOES_ROUTE } from "../app/Routes";

const CatalogRoute = () => {
  const [shoesList, setShoesList] = useState([]);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getShoesList = async (pageNum) => {
      try {
        const response = await shoesService.fetchShoesList(pageNum);
        setShoesList(response.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getShoesList(pageNumber);
  }, [pageNumber]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handldeNavigateToManageBootsRoute = () => {
    navigate(ADD_SHOES_ROUTE);
  };

  return (
    <StyledStackForRoutes alignItems="flex-end">
      {userRole === "admin" && (
        <Button
          variant="contained"
          size="large"
          onClick={() => handldeNavigateToManageBootsRoute()}
        >
          Додати бутси
        </Button>
      )}

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        <ShoesFilterForm order={1} />
        <ShoesList
          order={2}
          shoesList={shoesList}
          likedItems={likedItems}
          handleLikeClick={handleLikeClick}
          totalPages={totalPages}
          pageNumber={pageNumber}
          handlePageNumberChange={handlePageNumberChange}
        />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
