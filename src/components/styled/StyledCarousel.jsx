import Carousel from "react-material-ui-carousel";
import ArrowIconLeft from "../../icons/ArrowIconLeft";
import ArrowIcon from "../../icons/ArrowIcon";

const StyledCarousel = ({ children }) => {
  return (
    <Carousel
      autoPlay={true}
      cycleNavigation
      swipe
      navButtonsAlwaysVisible
      PrevIcon={<ArrowIconLeft color="black" fontSize="small" />}
      NextIcon={<ArrowIcon color="black" fontSize="small" />}
      sx={{
        ".css-qeprbc-MuiButtonBase-root-MuiIconButton-root, .css-qeprbc-MuiButtonBase-root-MuiIconButton-root":
          {
            p: { xs: 2, md: 3 },
            mx: 0,
            backgroundColor: "transparent !important",
            color: "black",
            border: 1,
          },

        ".css-hn784z, .css-1abc02a": {
          display: "flex",
          alignItems: "center",
          height: "fit-content",
          alignSelf: "flex-end",
          bottom: 0,
        },
      }}
    >
      {children}
    </Carousel>
  );
};

export default StyledCarousel;
