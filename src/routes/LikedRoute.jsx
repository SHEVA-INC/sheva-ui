import { Button, Link, Stack, Typography } from "@mui/material";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import useLikedItems from "../custom-hooks/useLikedItems";
import { Link as RouterLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";
import accessoriesService from "../services/AccessoriesService";
import AccessoriesList from "../components/accessories/AccessoriesList";

const LikedRoute = () => {
  const [likedShoes, handleLikeShoes] = useLikedItems("shoes");
  const [likedAccessories, handleLikeAccessories] =
    useLikedItems("accessories");

  const [likedShoesList, setLikedShoesList] = useState([]);
  const [likedAccessoriesList, setLikedAccessoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("shoes");
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

    if (selectedCategory === "shoes") fetchLikedShoes(pageNumber, likedShoes);
  }, [selectedCategory, pageNumber, likedShoes]);

  useEffect(() => {
    const fetchLikedAccessories = async (pageNum, liked) => {
      try {
        const response = await accessoriesService.fetchLikedAccessories(
          pageNum,
          {
            ids: liked,
          },
        );
        setLikedAccessoriesList(response.results);
        setTotalPages(response.total_pages);
        setPageNumber(response.current_page);
      } catch (error) {
        console.error("Error fetching liked shoes:", error);
      }
    };

    if (selectedCategory === "accessories")
      fetchLikedAccessories(pageNumber, likedAccessories);
  }, [selectedCategory, pageNumber, likedAccessories]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPageNumber(1);
  };

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        width={1}
      >
        <Stack
          px={9}
          py={8}
          gap={2}
          width={{ xs: 1, sm: "340px" }}
          boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.03)"
          borderRadius={(theme) => theme.shape.containerBorderRadius}
          height="fit-content"
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

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={6}
          flex={1}
        >
          {selectedCategory === "shoes" &&
            (likedShoesList?.length ? (
              <ShoesList
                shoesList={likedShoesList}
                likedItems={likedShoes}
                handleLikeClick={handleLikeShoes}
                totalPages={totalPages}
                pageNumber={pageNumber}
                handlePageNumberChange={handlePageNumberChange}
              />
            ) : (
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
            ))}

          {selectedCategory === "accessories" &&
            (likedAccessoriesList?.length ? (
              <AccessoriesList
                accessoriesList={likedAccessoriesList}
                likedItems={likedAccessories}
                handleLikeClick={handleLikeAccessories}
                totalPages={totalPages}
                pageNumber={pageNumber}
                handlePageNumberChange={handlePageNumberChange}
              />
            ) : (
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
            ))}
        </Stack>
      </Stack>

      {/* 
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        flex={1}
      >
        {selectedCategory === "shoes" && !likedShoesList?.length ? (
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
            likedItems={likedShoes}
            handleLikeClick={handleLikeShoes}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
            width={1}
            maxWidth={812}
          />
        )}

        {selectedCategory === "accessories" && !likedAccessoriesList?.length ? (
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
          <AccessoriesList
            accessoriesList={likedAccessoriesList}
            likedItems={likedAccessories}
            handleLikeClick={handleLikeAccessories}
            totalPages={totalPages}
            pageNumber={pageNumber}
            handlePageNumberChange={handlePageNumberChange}
          />
        )}
      </Stack> */}
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
