import ShoesList from "../components/shoes/ShoesList";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";
import useLikedShoes from "../custom-hooks/useLikedShoes";

const CatalogRoute = () => {
  const [shoesList, setShoesList] = useState([]);
  const [likedItems, handleLikeClick] = useLikedShoes();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    console.log(pageNumber);
    getShoesList(pageNumber);
  }, [pageNumber]);

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <StyledStackForRoutes
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
    </StyledStackForRoutes>
  );
};

export default CatalogRoute;
