import { useNavigate, useParams } from "react-router-dom";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import { Button, Typography } from "@mui/material";
import { CATALOG_ROUTE } from "../app/Routes";
import accessoriesService from "../services/AccessoriesService";
import EditDetailsAccessoriesDataForm from "../forms/EditDetailsAccessoriesDataForm";

const ManageAccessoriesRoute = () => {
  const { accessoriesId } = useParams();
  const navigate = useNavigate();

  const handleAccessoriesDelete = async (id) => {
    await accessoriesService.deleteAccessories(id);
    navigate(CATALOG_ROUTE);
  };

  return (
    <StyledStackForRoutes>
      <EditDetailsAccessoriesDataForm accessoriesId={accessoriesId} />
      <Button
        variant="contained"
        size="large"
        type="submit"
        color="error"
        onClick={() => handleAccessoriesDelete(accessoriesId)}
      >
        <Typography variant="body1" textTransform="uppercase" fontWeight="bold">
          Видалити аксесуар
        </Typography>
      </Button>
    </StyledStackForRoutes>
  );
};

export default ManageAccessoriesRoute;
