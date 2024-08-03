import { Button, Stack, Typography, Box } from "@mui/material";
import ArrowIcon from "../icons/ArrowIcon";
import ShoesImage from "../assets/transparent-bcg-shoes/nike-air-zoom.png";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../app/Routes";

const GradientShoesBlock = () => {
  const navigate = useNavigate();

  return (
    <Stack
      width={1}
      py={22}
      sx={{ background: "linear-gradient(0.25turn, #F74855, 80%, #725BB5)" }}
      alignItems="center"
    >
      <Stack
        maxWidth="lg"
        width={1}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        px={3}
        gap={10}
      >
        <Stack gap={5}>
          <Typography
            variant="body2"
            textTransform="uppercase"
            fontWeight="bold"
            color="secondary.main"
            width="fit-content"
            px={2}
            py={1}
            sx={{ background: (theme) => theme.palette.thirdly.main }}
          >
            Заощадь до 30%
          </Typography>
          <Stack>
            <Typography
              variant="h3"
              fontWeight="bold"
              textTransform="uppercase"
              color="primary.contrastText"
            >
              Nike Air Zoom
            </Typography>
            <Typography color="primary.contrastText">
              Mercurial Vapor XV Elite FG
            </Typography>
          </Stack>

          <Button
            variant="contained"
            size="large"
            color="thirdly"
            onClick={(e) => {
              e.stopPropagation();
              navigate(CATALOG_ROUTE);
            }}
            endIcon={<ArrowIcon color="black" fontSize="large" padding={1} />}
          >
            <Typography textTransform="uppercase" color="secondary.main">
              Купити
            </Typography>
          </Button>
        </Stack>

        <Box
          component="img"
          src={ShoesImage}
          alt="Nike Air Zoom"
          width="50%"
          maxWidth={{ xs: "50%", md: "400px" }}
          height="max-content"
        />
      </Stack>
    </Stack>
  );
};

export default GradientShoesBlock;
