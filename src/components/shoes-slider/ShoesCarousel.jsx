import ShoesCarouselItem from "./ShoesCarouselItem";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import StyledCarousel from "../styled/StyledCarousel";
import StyledTitle from "../styled/StyledTitle";

const gridItemSize = {
  xs: 12,
  sm: 6,
  md: 4,
};

const amountOfItemsPerScreenSize = {
  xs: 1,
  sm: 2,
  md: 3,
};

const ShoesCarousel = ({ title, shoesCarouselData, id }) => {
  const theme = useTheme();
  const [screenSize, setScreenSize] = useState();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isXs) {
      setScreenSize("xs");
    } else if (isSm) {
      setScreenSize("sm");
    } else if (isMd) {
      setScreenSize("md");
    }
  }, [isXs, isSm, isMd]);

  function groupArrayByAmountOfItemsPerScreenSize(array, screenSize) {
    const chunks = [];
    let chunkSize = amountOfItemsPerScreenSize.xs;

    if (screenSize === "xs") {
      chunkSize = amountOfItemsPerScreenSize.xs;
    } else if (screenSize === "sm") {
      chunkSize = amountOfItemsPerScreenSize.sm;
    } else if (screenSize === "md") {
      chunkSize = amountOfItemsPerScreenSize.md;
    }

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return (
    <Stack gap={6} id={id}>
      <StyledTitle title="Новинки" />
      <StyledCarousel title={title}>
        {groupArrayByAmountOfItemsPerScreenSize(
          shoesCarouselData,
          screenSize,
        ).map((shoesItems, idx) => (
          <Grid container spacing={6} key={idx}>
            {shoesItems.map((shoesItem) => (
              <Grid
                item
                xs={gridItemSize.xs}
                sm={gridItemSize.sm}
                md={gridItemSize.md}
                key={shoesItem.id}
              >
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
      </StyledCarousel>
    </Stack>
  );
};

export default ShoesCarousel;
