import { useState } from "react";
import { Stack, Grid } from "@mui/material";
import StyledRoundIconButton from "./styled/StyledRoundIconButton";
import ArrowIconLeft from "../icons/ArrowIconLeft";
import ArrowIcon from "../icons/ArrowIcon";

const ShoesDetailsImageSlider = ({ images, mainImage, setMainImage }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const maxThumbnails = 4;

  const handlePrevThumbnails = () => {
    setCurrentStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextThumbnails = () => {
    setCurrentStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - maxThumbnails),
    );
  };

  const visibleThumbnails = images.slice(
    currentStartIndex,
    currentStartIndex + maxThumbnails,
  );

  return (
    <Stack gap={2}>
      <img
        src={mainImage}
        alt="Main"
        style={{
          width: "100%",
          aspectRatio: 4.5 / 3,
          objectFit: "cover",
        }}
        onClick={() => setMainImage(mainImage)}
      />
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <StyledRoundIconButton
            ariaLabel="Previous"
            onClick={handlePrevThumbnails}
            disabled={currentStartIndex === 0}
            left={0}
          >
            <ArrowIconLeft
              color="black"
              fontSize="small"
              opacity={currentStartIndex === 0 ? 0.5 : 1}
            />
          </StyledRoundIconButton>
          <StyledRoundIconButton
            ariaLabel="Next"
            onClick={handleNextThumbnails}
            disabled={currentStartIndex >= images.length - maxThumbnails}
            right={0}
          >
            <ArrowIcon
              opacity={
                currentStartIndex >= images.length - maxThumbnails ? 0.5 : 1
              }
              color="black"
              fontSize="small"
            />
          </StyledRoundIconButton>
          <Grid container>
            {visibleThumbnails.map((image) => (
              <Grid item key={image} xs={3}>
                <img
                  src={image}
                  alt={`Thumbnail ${image}`}
                  style={{
                    width: "100%",
                    aspectRatio: 4.5 / 3,
                    objectFit: "cover",
                    cursor: "pointer",
                    borderBottom:
                      mainImage === image ? "1px solid black" : "none",
                  }}
                  onClick={() => setMainImage(image)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ShoesDetailsImageSlider;
