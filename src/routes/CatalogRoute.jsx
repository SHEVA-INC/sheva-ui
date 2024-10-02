import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import shoesService from "../services/ShoesService";
import useLikedShoes from "../custom-hooks/useLikedShoes";
import { Button, Stack, Typography } from "@mui/material";
import useAuth from "../auth/useAuth";
import { ADD_SHOES_ROUTE } from "../app/Routes";

const CatalogRoute = () => {
  const [shoesList, setShoesList] = useState([]);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterSize, setFilterSize] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { userRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("pageNumber"), 10) || 1;
    const size = params.get("size") || "";
    const type = params.get("type") || "";
    const brand = params.get("brand") || "";
    const color = params.get("color") || "";

    setPageNumber(page);
    setFilterSize(size);
    setFilterType(type);
    setFilterBrand(brand);
    setSelectedColor(color);
  }, [location.search]);

  const prevStateRef = useRef({
    pageNumber,
    filterSize,
    filterType,
    filterBrand,
    selectedColor,
  });

  useEffect(() => {
    const {
      pageNumber: prevPage,
      filterSize: prevSize,
      filterType: prevType,
      filterBrand: prevBrand,
      selectedColor: prevColor,
    } = prevStateRef.current;

    if (
      prevPage !== pageNumber ||
      prevSize !== filterSize ||
      prevType !== filterType ||
      prevBrand !== filterBrand ||
      prevColor !== selectedColor
    ) {
      const params = new URLSearchParams();
      if (pageNumber) params.set("pageNumber", pageNumber);
      if (filterSize) params.set("size", filterSize);
      if (filterType) params.set("type", filterType);
      if (filterBrand) params.set("brand", filterBrand);
      if (selectedColor) params.set("color", selectedColor);

      navigate(`?${params.toString()}`, { replace: true });

      prevStateRef.current = {
        pageNumber,
        filterSize,
        filterType,
        filterBrand,
        selectedColor,
      };
    }
  }, [
    pageNumber,
    filterSize,
    filterType,
    filterBrand,
    selectedColor,
    navigate,
  ]);

  useEffect(() => {
    const getShoesList = async () => {
      try {
        const response = await shoesService.fetchShoesList(
          pageNumber,
          selectedColor,
          filterSize,
          filterType,
          filterBrand,
        );
        setShoesList(response.results);
        setTotalPages(response.total_pages);

        if (pageNumber > response.total_pages) {
          setPageNumber(response.total_pages);
        }
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getShoesList();
  }, [pageNumber, selectedColor, filterSize, filterType, filterBrand]);

  const handleFilterChange = (filterName, value) => {
    switch (filterName) {
      case "size":
        setFilterSize(value);
        break;
      case "type":
        setFilterType(value);
        break;
      case "brand":
        setFilterBrand(value);
        break;
      case "color":
        setSelectedColor(value);
        break;
      default:
        break;
    }

    setPageNumber(1);
  };

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleNavigateToManageBootsRoute = () => {
    navigate(ADD_SHOES_ROUTE);
  };

  const handleResetButtonClick = () => {
    setSelectedColor("");
    setFilterSize("");
    setFilterType("");
    setFilterBrand("");
    setPageNumber(1);
  };

  return (
    <StyledStackForRoutes alignItems="flex-end">
      {userRole === "admin" && (
        <Button
          variant="contained"
          size="large"
          onClick={handleNavigateToManageBootsRoute}
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
          filterSize={filterSize}
          setFilterSize={(value) => handleFilterChange("size", value)}
          filterType={filterType}
          setFilterType={(value) => handleFilterChange("type", value)}
          filterBrand={filterBrand}
          setFilterBrand={(value) => handleFilterChange("brand", value)}
          selectedColor={selectedColor}
          setSelectedColor={(value) => handleFilterChange("color", value)}
          onSubmit={handleResetButtonClick}
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
