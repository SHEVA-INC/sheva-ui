import { Stack } from "@mui/material";
import ShoesFilterForm from "../forms/ShoesFilterForm";
import ShoesList from "../components/shoes/ShoesList";
import StyledTitle from "../components/styled/StyledTitle";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { useEffect, useState } from "react";
import shoesService from "../services/ShoesService";

const LikedRoute = () => {
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
    const getShoesList = async () => {
      try {
        const response = await shoesService.fetchShoesList();
        setShoesList(response);
      } catch (error) {
        console.error("Error fetching shoes list:", error);
      }
    };

    getShoesList();
  }, []);

  return (
    <StyledStackForRoutes>
      <StyledTitle title="Вподобане" />
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        <ShoesList order={{ xs: 2, md: 1 }} shoesList={shoesList} />
        <ShoesFilterForm order={{ xs: 1, md: 2 }} />
      </Stack>
    </StyledStackForRoutes>
  );
};

export default LikedRoute;
