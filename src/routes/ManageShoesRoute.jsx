import { useParams } from "react-router-dom";
import StyledStackForRoutes from "../components/styled/StyledStackForRoutes";
import EditDetailsShoesDataForm from "../forms/EditDetailsShoesDataForm";
import EditUploadMainImageForm from "../forms/EditUploadMainImageForm";
import EditUploadImagesForm from "../forms/EditUploadImagesForm";

const ManageShoesRoute = () => {
  const { shoesId } = useParams();

  return (
    <StyledStackForRoutes>
      <EditDetailsShoesDataForm shoesId={shoesId} />
      <EditUploadMainImageForm shoesId={shoesId} />
      <EditUploadImagesForm shoesId={shoesId} />
    </StyledStackForRoutes>
  );
};

export default ManageShoesRoute;
