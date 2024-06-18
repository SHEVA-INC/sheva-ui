import { Button, MenuItem, Stack, Typography, Box } from "@mui/material";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledFormControlWithSelect from "../styled/StyledFormControlWithSelect";
import ItemCounter from "../ItemCounter";
import StyledTitle from "../styled/StyledTitle";
import { useEffect, useState } from "react";
import shoesService from "../../services/ShoesService";
import upperCaseFirstLetter from "../../utils/upperCaseFirstLetter";
import { useParams } from "react-router-dom";
import ShoesDetailsImageSlider from "../ShoesDetailsImageSlider";

const ShoesDetails = () => {
  const [shoesDetails, setShoesDetails] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { shoesId } = useParams();

  useEffect(() => {
    const getShoesDetails = async () => {
      try {
        const response = await shoesService.fetchShoesDetails(shoesId);
        setShoesDetails(response);
        setMainImage(response.main_image);
      } catch (error) {
        console.error("Error fetching shoes details:", error);
      }
    };

    getShoesDetails();
  }, [shoesId]);

  if (!shoesDetails) {
    return <Typography>Loading...</Typography>;
  }

  const allImages = [
    shoesDetails.main_image,
    ...shoesDetails.images.map((img) => img.image),
  ];

  return (
    <Stack gap={6}>
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={8}
      >
        <Stack width={{ xs: 1, md: 0.5 }}>
          <ShoesDetailsImageSlider
            images={allImages}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
        </Stack>

        <Stack width={{ xs: 1, md: 0.5 }} gap={{ xs: 4, sm: 2, md: 6 }}>
          <Stack>
            <Typography variant="h4" fontWeight="bold">
              {upperCaseFirstLetter(shoesDetails.brand)} {shoesDetails.name}
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="bold">
              {shoesDetails.price}
            </Typography>
          </Stack>
          <StyledColorPicker
            colors={shoesDetails.color}
            showColorsName={true}
            gap={1}
          />
          <StyledFormControlWithSelect
            title="Розмір"
            selectId="size-select"
            defaultValue={shoesDetails.sizes[0].size}
            formControlSize="small"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {shoesDetails.sizes.map((size) => (
              <MenuItem key={size.size} value={size.size}>
                {size.size}
              </MenuItem>
            ))}
          </StyledFormControlWithSelect>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <ItemCounter value={0} />
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Typography px={3}>В корзину</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <StyledTitle title="Опис" />
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width={1}
      >
        <Typography variant="h6">{shoesDetails.description}</Typography>
        <Stack width={{ xs: 1, sm: 0.5 }} gap={10}>
          <Stack
            width={0.6}
            alignSelf={{ xs: "flex-start", sm: "center", md: "flex-start" }}
          >
            <Box
              component="img"
              src={shoesDetails.images[1].image}
              alt={shoesDetails.name}
              height="max-content"
            />
          </Stack>
          <Stack
            width={0.6}
            alignSelf={{ xs: "flex-end", sm: "center", md: "flex-end" }}
          >
            <Box
              component="img"
              src={shoesDetails.images[2].image}
              alt={shoesDetails.name}
              height="max-content"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShoesDetails;
