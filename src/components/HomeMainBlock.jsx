import { Box, Button, Stack, Typography } from "@mui/material";
import StadiumIMg from "../assets/home/lending-stadium.png";
import FooterLogo from "../assets/footer-logo.svg";
import AirZoomOutlined from "../assets/home/AirZoomOutlined.svg";
import AirZoomFull from "../assets/home/AirZoomFull.svg";
import MainShoesLanding from "../assets/home/MainShoesLanding.png";
import ShoesAdPng from "../assets/shoes-ad/shoes-ad.png";
import NikeAirZoom from "../assets/transparent-bcg-shoes/nike-air-zoom.png";
import ArrowIcon from "../icons/ArrowIcon";
import useHeaderHeight from "../custom-hooks/useHeaderHeight";
import { CATALOG_ROUTE } from "../app/Routes";
import { useNavigate } from "react-router-dom";

const HomeMainBlock = () => {
  const headerHeight = useHeaderHeight();
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      width="100%"
      height={`calc(100lvh - ${headerHeight}px)`}
      display="flex"
    >
      <Stack
        zIndex={2}
        position="absolute"
        right="0"
        sx={{ transform: "translateY(-50%)", top: "50%" }}
      >
        <Box
          component="img"
          src={ShoesAdPng}
          alt="Main Shoes"
          width={{ xs: "90px", sm: "120px", md: "220px" }}
          height={"max-content"}
        />
      </Stack>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1"
        sx={{
          backgroundImage: `url(${StadiumIMg})`,
          backgroundSize: "cover",
        }}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
        sx={{
          background:
            "linear-gradient(0turn, rgba(247, 72, 85, 0.9), 30%, rgba(114, 91, 181, 0.9))",
        }}
      />

      <Box
        position="absolute"
        top="0"
        right="0"
        width={{ xs: "35%", md: "15%" }}
        height="100%"
        zIndex="1"
        pl={{ xs: 6, md: 8 }}
        pr={2}
        sx={{
          background: "linear-gradient(0.5turn, #FF702C 60%, #51379B)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          color="primary.contrastText"
          fontWeight="bold"
          textTransform="uppercase"
          mt={10}
          variant="body1"
        >
          Nike Air Zoom
        </Typography>
        <Typography
          color="primary.contrastText"
          textAlign="center"
          variant="caption"
        >
          Mercurial Vapor XV Elite FG
        </Typography>
      </Box>
      <Stack
        px={{ xs: 3, sm: 12, md: 20 }}
        py={{ xs: 10, md: 10 }}
        gap={{ xs: 12, lg: 6 }}
        zIndex={4}
        position="absolute"
        width={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        display="flex"
        top={0}
        left={0}
        bottom={0}
      >
        <Box
          component="img"
          src={FooterLogo}
          alt="Sheva logo"
          width={{ xs: "46px", sm: "60px", md: "80px" }}
          height="max-content"
        />
        <Stack>
          <Stack
            width={1}
            justifyContent="center"
            alignItems="center"
            display="flex"
            zIndex={5}
            position="relative"
          >
            <Stack zIndex={5} position="absolute" width={1} maxWidth="lg">
              <Box component="img" src={AirZoomFull} alt="Air Zoom" />
              <Typography
                textAlign="start"
                color="primary.contrastText"
                variant="h6"
                display={{ xs: "none", md: "block" }}
              >
                Nike Air Zoom
              </Typography>
            </Stack>

            <Stack
              zIndex={6}
              position="relative"
              width="100%"
              alignItems="center"
            >
              <Box
                component="img"
                src={MainShoesLanding}
                alt="Main Shoes"
                maxWidth="50%"
              />
            </Stack>
            <Stack zIndex={7} position="absolute" width={1} maxWidth="lg">
              <Box component="img" src={AirZoomOutlined} alt="Air Zoom" />
              <Typography
                textAlign="end"
                color="primary.contrastText"
                variant="h6"
                display={{ xs: "none", md: "block" }}
              >
                Mercurial Vapor XV Elite FG
              </Typography>
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: 6, md: 12, lg: 30 }}
            justifyContent="space-between"
            alignItems="center"
            maxWidth="lg"
          >
            <Stack
              zIndex={6}
              position="relative"
              flexDirection="row"
              alignItems="center"
              width={{ xs: 1, md: 0.6 }}
              height={1}
              maxWidth={{ xs: "300px", sm: "400px", md: "700px" }}
              gap={5}
              p={{ xs: 2, md: 5 }}
              sx={{
                background: "rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(30px)",
              }}
            >
              <Box
                component="img"
                src={NikeAirZoom}
                alt="Nike air zoom"
                width={0.4}
              />
              <Stack gap={2}>
                <Typography
                  variant="h6"
                  color="primary.contrastText"
                  fontWeight="bold"
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography variant="caption" color="primary.contrastText">
                  Ці бутси створені для тих, хто прагне досконалості на полі.
                  Відчуйте легкість, маневреність і впевненість у кожному русі.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={{ xs: 4, md: 8 }}
              width={{ xs: 1, md: 0.4 }}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography color="primary.contrastText" variant="p">
                Забезпечте собі перевагу на полі з бутсами Nike Air Zoom
                Mercurial Vapor 15 FG. Розроблені для максимальної швидкості та
                маневреності, вони допоможуть вам перевершити всіх суперників.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="thirdly"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(CATALOG_ROUTE);
                }}
                endIcon={<ArrowIcon color="black" padding={1} />}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  textTransform="uppercase"
                  color="secondary.main"
                  fontWeight="bold"
                >
                  Купити
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeMainBlock;
