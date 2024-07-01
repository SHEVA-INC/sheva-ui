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
  const [likedItems, handleLikeClick] = useLikedShoes([]);

  useEffect(() => {
    const fetchLikedShoes = async (liked) => {
      try {
        const response = await shoesService.fetchLikedShoes({
          ids: liked,
        });
        setLikedShoesList(response);
      } catch (error) {
        console.error("Error fetching liked shoes:", error);
      }
    };

    fetchLikedShoes(likedItems);
  }, [likedItems]);

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
        flex={1}
      >
        {likedItems.length === 0 ? (
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
            shoesList={likedShoesList}
            likedItems={likedItems}
            handleLikeClick={handleLikeClick}
          />
        )}
      </Stack>
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
