import { useNavigate, useParams } from "react-router-dom";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import EditDetailsShoesDataForm from "../forms/EditDetailsShoesDataForm";
import EditUploadMainImageForm from "../forms/EditUploadMainImageForm";
import EditUploadImagesForm from "../forms/EditUploadImagesForm";
import { Button, Typography } from "@mui/material";
import shoesService from "../services/ShoesService";
import { CATALOG_ROUTE } from "../app/Routes";

const ManageShoesRoute = () => {
  const { shoesId } = useParams();
  const navigate = useNavigate();

  const handleShoesDelete = async (id) => {
    await shoesService.deleteShoes(id);
    navigate(CATALOG_ROUTE);
  };

  return (
    <StyledStackForRoutes>
      <EditDetailsShoesDataForm shoesId={shoesId} />
      <EditUploadMainImageForm shoesId={shoesId} />
      <EditUploadImagesForm shoesId={shoesId} />
      <Button
        variant="contained"
        size="large"
        type="submit"
        color="error"
        onClick={() => handleShoesDelete(shoesId)}
      >
        <Typography variant="body1" textTransform="uppercase" fontWeight="bold">
          Видалити бутс
        </Typography>
      </Button>
    </StyledStackForRoutes>
  );
};

export default ManageShoesRoute;
