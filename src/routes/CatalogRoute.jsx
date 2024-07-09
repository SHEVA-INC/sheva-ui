import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";
import useLikedShoes from "../custom-hooks/useLikedShoes";
import { Button, Stack, Typography } from "@mui/material";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { ADD_SHOES_ROUTE } from "../app/Routes";
import { useForm } from "react-hook-form";

const CatalogRoute = () => {
  const [shoesList, setShoesList] = useState([]);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState();

  const { register, watch } = useForm({
    mode: "all",
  });

  const size = watch("size");
  const type = watch("type");

  useEffect(() => {
    const getShoesList = async (pageNum, shoesColor, shoesSize, shoesType) => {
      try {
        const response = await shoesService.fetchShoesList(
          pageNum,
          shoesColor,
          shoesSize,
          shoesType,
        );
        setShoesList(response.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getShoesList(pageNumber, selectedColor, size, type);
  }, [pageNumber, selectedColor, size, type]);

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
        width={1}
      >
        <ShoesFilterForm
          order={1}
          registerSize={{ ...register("size") }}
          registerType={{ ...register("type") }}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        {shoesList.length === 0 ? (
          <Typography variant="h5" order={1}>
            Такого взуття немає, оберіть щось інше.
          </Typography>
        ) : (
          <ShoesList
            order={2}
            shoesList={shoesList}
            likedItems={likedItems}
            handleLikeClick={handleLikeClick}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
            setSelectedColor={setSelectedColor}
          />
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
