import Carousel from "react-material-ui-carousel";
import ShoesCarouselItem from "./ShoesCarouselItem";
import { Grid } from "@mui/material";
import StyledTitle from "../styled/StyledTitle";

const ShoesCarousel = ({ title, shoesCarouselData }) => {
  return (
    <>
      <StyledTitle title={title} />
      <Carousel autoPlay={true} cycleNavigation>
        {shoesCarouselData.map((shoesItems, idx) => (
          <Grid container spacing={8} key={idx}>
            {shoesItems.map((shoesItem) => (
              <Grid item xs={4} key={shoesItem.id}>
                <ShoesCarouselItem
                  key={shoesItem.id}
                  name={shoesItem.name}
                  description={shoesItem.description}
                  mainImage={shoesItem.mainImage}
                  price={shoesItem.price}
                  liked={shoesItem.liked}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </>
  );
};

export default ShoesCarousel;
