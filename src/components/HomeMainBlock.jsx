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

const HomeMainBlock = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Box
      position="relative"
      width="100%"
      height={`calc(100vh - ${headerHeight}px)`}
      display="flex"
    >
      <Stack
        zIndex={2}
        position="absolute"
        right="0"
        sx={{ transform: "translateY(-50%)", top: "50%" }}
      >
        <img src={ShoesAdPng} alt="Main Shoes" />
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
        width="15%"
        height="100%"
        zIndex="1"
        sx={{
          background: "linear-gradient(0.5turn, #FF702C 60%, #51379B)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h5"
          color="primary.contrastText"
          fontWeight="bold"
          textTransform="uppercase"
          mt={10}
        >
          Nike Air Zoom
        </Typography>
        <Typography variant="body2" color="primary.contrastText">
          Mercurial Vapor XV Elite FG
        </Typography>
      </Box>

      <Stack
        px={30}
        pt={10}
        pb={50}
        zIndex={4}
        position="absolute"
        width={1}
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        top={0}
        left={0}
        bottom={0}
      >
        <img
          src={FooterLogo}
          alt="Sheva logo"
          width="80px"
          height="max-content"
        />
        <Stack
          width={1}
          justifyContent="center"
          alignItems="center"
          display="flex"
          zIndex={5}
          position="relative"
        >
          <Stack zIndex={5} position="absolute" width={1} maxWidth="lg">
            <img src={AirZoomFull} alt="Air Zoom" />
            <Typography
              textAlign="start"
              variant="h4"
              color="primary.contrastText"
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
            <img
              src={MainShoesLanding}
              alt="Main Shoes"
              style={{ width: "700px" }}
            />
          </Stack>
          <Stack zIndex={7} position="absolute" width={1} maxWidth="lg">
            <img src={AirZoomOutlined} alt="Air Zoom" />
            <Typography
              textAlign="end"
              variant="h4"
              color="primary.contrastText"
            >
              Mercurial Vapor XV Elite FG
            </Typography>
          </Stack>
        </Stack>

        <Stack
          flexDirection="row"
          gap={30}
          justifyContent="space-between"
          maxWidth="lg"
        >
          <Stack
            zIndex={6}
            position="relative"
            flexDirection="row"
            alignItems="center"
            width={0.6}
            maxWidth="700px"
            gap={5}
            p={3}
            sx={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(30px)",
            }}
          >
            <img
              src={NikeAirZoom}
              alt="nike air zoom"
              style={{ width: "200px", height: "max-content" }}
            />
            <Stack gap={2}>
              <Typography
                variant="h6"
                color="primary.contrastText"
                fontWeight="bold"
              >
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body2" color="primary.contrastText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={8} width={0.4}>
            <Typography variant="variant6" color="primary.contrastText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="thirdly"
              onClick={(e) => {
                e.stopPropagation();
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
    </Box>
  );
};

export default HomeMainBlock;
