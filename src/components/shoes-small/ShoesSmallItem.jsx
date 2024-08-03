import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../app/Routes";

const ShoesSmallItem = ({ imageSrc, name, description }) => {
  const navigate = useNavigate();

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      gap={{ xs: 2, md: 4 }}
      borderRadius={(theme) => theme.shape.containerBorderRadius / 2}
      border={1}
      borderColor="secondary.light"
      px={4}
      py={6}
      width={1}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(CATALOG_ROUTE)}
    >
      <img src={imageSrc} alt={name} style={{ width: "90px" }} />
      <Stack>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default ShoesSmallItem;
