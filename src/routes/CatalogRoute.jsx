import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import shoesService from "../services/ShoesService";
import useLikedItems from "../custom-hooks/useLikedItems";
import { Button, Stack, Typography } from "@mui/material";
import useAuth from "../auth/useAuth";
import { ADD_ACCESSORIES_ROUTE, ADD_SHOES_ROUTE } from "../app/Routes";
import AccessoriesFilterForm from "../forms/AccessoriesFilterForm";
import AccessoriesList from "../components/accessories/AccessoriesList";
import accessoriesService from "../services/AccessoriesService";

const CatalogRoute = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("shoes");
  const [shoesList, setShoesList] = useState([]);
  const [accessoriesList, setAccessoriesList] = useState([]);
  const [likedShoes, handleLikeShoes] = useLikedItems("shoes");
  const [likedAccessories, handleLikeAccessories] =
    useLikedItems("accessories");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterSize, setFilterSize] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [filterAccessoriesType, setFilterAccessoriesType] = useState("");

  const prevStateRef = useRef({
    pageNumber,
    filterSize,
    filterType,
    filterBrand,
    filterAccessoriesType,
  });

  const prevAccessoriesStateRef = useRef({
    pageNumber,
    filterAccessoriesType,
  });

  useEffect(() => {
    if (selectedCategory !== "shoes") return;

    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("pageNumber"), 10) || 1;
    const size = params.get("size") || "";
    const type = params.get("type") || "";
    const brand = params.get("brand") || "";
    const color = params.get("color") || "";
    const accessoriesType = params.get("accessoriesType") || "";

    setPageNumber(page);
    setFilterSize(size);
    setFilterType(type);
    setFilterBrand(brand);
    setSelectedColor(color);
    setFilterAccessoriesType(accessoriesType);
  }, [selectedCategory, location.search]);

  useEffect(() => {
    if (selectedCategory !== "accessories") return;

    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("pageNumber"), 10) || 1;
    const accessoriesType = params.get("accessoriesType") || "";

    setPageNumber(page);
    setFilterAccessoriesType(accessoriesType);
  }, [selectedCategory, location.search]);

  useEffect(() => {
    if (selectedCategory !== "shoes") return;

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
    selectedCategory,
    pageNumber,
    filterSize,
    filterType,
    filterBrand,
    selectedColor,
    navigate,
  ]);

  useEffect(() => {
    if (selectedCategory !== "accessories") return;

    const { pageNumber: prevPage, filterAccessoriesType: prevAccessoriesType } =
      prevAccessoriesStateRef.current;

    if (
      prevPage !== pageNumber ||
      prevAccessoriesType !== filterAccessoriesType
    ) {
      const params = new URLSearchParams();
      if (pageNumber) params.set("pageNumber", pageNumber);
      if (filterAccessoriesType)
        params.set("accessoriesType", filterAccessoriesType);

      navigate(`?${params.toString()}`, { replace: true });

      prevAccessoriesStateRef.current = {
        pageNumber,
        filterAccessoriesType,
      };
    }
  }, [selectedCategory, pageNumber, filterAccessoriesType, navigate]);

  useEffect(() => {
    if (selectedCategory !== "shoes") return;

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
  }, [
    selectedCategory,
    pageNumber,
    selectedColor,
    filterSize,
    filterType,
    filterBrand,
  ]);

  useEffect(() => {
    if (selectedCategory !== "accessories") return;

    const getAccessoriesList = async () => {
      try {
        const response = await accessoriesService.fetchAccessoriesList(
          pageNumber,
          filterAccessoriesType,
        );
        setAccessoriesList(response.results);
        setTotalPages(response.total_pages);

        if (pageNumber > response.total_pages) {
          setPageNumber(response.total_pages);
        }
      } catch (error) {
        console.error("Error fetching accessories list:", error);
      }
    };

    getAccessoriesList();
  }, [selectedCategory, pageNumber, filterAccessoriesType]);

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
      case "accessoriesType":
        setFilterAccessoriesType(value);
        break;
      default:
        break;
    }

    setPageNumber(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPageNumber(1);
  };

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleNavigateToManageBootsRoute = () => {
    navigate(ADD_SHOES_ROUTE);
  };

  const handleNavigateToManageAccessoriesRoute = () => {
    navigate(ADD_ACCESSORIES_ROUTE);
  };

  const handleResetButtonClick = () => {
    setSelectedColor("");
    setFilterSize("");
    setFilterType("");
    setFilterBrand("");
    setPageNumber(1);
  };

  const handleResetAccessoriesButtonClick = () => {
    setFilterAccessoriesType("");
    setPageNumber(1);
  };

  return (
    <StyledStackForRoutes alignItems="flex-end">
      {userRole === "admin" &&
        (selectedCategory === "shoes" ? (
          <Button
            variant="contained"
            size="large"
            onClick={handleNavigateToManageBootsRoute}
          >
            Додати бутси
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={handleNavigateToManageAccessoriesRoute}
          >
            Додати аксесуари
          </Button>
        ))}

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        width={1}
      >
        <Stack gap={5}>
          <Stack
            px={9}
            py={8}
            gap={2}
            width={{ xs: 1, sm: "340px" }}
            boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.03)"
            borderRadius={(theme) => theme.shape.containerBorderRadius}
          >
            <Typography variant="h6" fontWeight="bold">
              Категорія
            </Typography>
            <Button
              sx={{
                width: 1,
                backgroundColor:
                  selectedCategory === "shoes"
                    ? (theme) => theme.palette.primary.light
                    : "#F2F2F2",
                borderRadius: (theme) => theme.shape.containerBorderRadius,
                justifyContent: "flex-start",
              }}
              onClick={() => handleCategoryChange("shoes")}
            >
              <Typography color="secondary.main">Взуття</Typography>
            </Button>
            <Button
              sx={{
                width: 1,
                backgroundColor:
                  selectedCategory === "accessories"
                    ? (theme) => theme.palette.primary.light
                    : "#F2F2F2",
                borderRadius: (theme) => theme.shape.containerBorderRadius,
                justifyContent: "flex-start",
              }}
              onClick={() => handleCategoryChange("accessories")}
            >
              <Typography color="secondary.main">Аксесуари</Typography>
            </Button>
          </Stack>
          {selectedCategory === "shoes" ? (
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
          ) : (
            <AccessoriesFilterForm
              order={1}
              filterType={filterAccessoriesType}
              setFilterType={(value) =>
                handleFilterChange("accessoriesType", value)
              }
              onSubmit={handleResetAccessoriesButtonClick}
            />
          )}
        </Stack>

        {selectedCategory === "shoes" ? (
          !shoesList.length ? (
            <Typography variant="h5">
              Такого взуття немає, оберіть щось інше.
            </Typography>
          ) : (
            <ShoesList
              order={2}
              shoesList={shoesList}
              likedItems={likedShoes}
              handleLikeClick={handleLikeShoes}
              totalPages={totalPages}
              pageNumber={pageNumber}
              handlePageNumberChange={handlePageNumberChange}
              setSelectedColor={setSelectedColor}
            />
          )
        ) : !accessoriesList.length ? (
          <Typography variant="h5">
            Таких аксесуарів немає, оберіть щось інше.
          </Typography>
        ) : (
          <AccessoriesList
            accessoriesList={accessoriesList}
            likedItems={likedAccessories}
            handleLikeClick={handleLikeAccessories}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
          />
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
