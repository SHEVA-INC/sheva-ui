import Shoes from "./Shoes";
import { Button, MenuItem, Stack, Typography, Box } from "@mui/material";
import StyledRating from "../styled/StyledRating";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledFormControlWithSelect from "../styled/StyledFormControlWithSelect";
import ItemCounter from "../ItemCounter";
import StyledTitle from "../styled/StyledTitle";

const ShoesDetails = () => {
  const shoesDetails = Shoes[0];

  return (
    <Stack gap={6}>
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={8}
      >
        <Stack width={{ xs: 1, md: 0.5 }}>
          <img
            src={shoesDetails.mainImage}
            alt={shoesDetails.name}
            style={{ width: "100%", height: "max-content" }}
          />
          <Stack flexDirection="row">
            {shoesDetails.images.slice(0, 4).map((image) => (
              <img
                key={image}
                src={image}
                alt={shoesDetails.name}
                style={{ width: "calc(100%/4)" }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack width={{ xs: 1, md: 0.5 }} gap={{ xs: 4, sm: 2, md: 6 }}>
          <Stack>
            <Typography variant="h4" fontWeight="bold">
              {shoesDetails.name}
            </Typography>
            <Typography variant="h5" fontWeight="bolder">
              {shoesDetails.description}
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <Typography variant="h6">
                Модель № {shoesDetails.modelNumber}
              </Typography>
              <Stack flexDirection="row" alignItems="center">
                <StyledRating value={shoesDetails.rating.ratingNumber} />
                <Typography variant="p">
                  {shoesDetails.rating.ratingNumber}(
                  {shoesDetails.rating.reviewAmount})
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="h5" fontWeight="bold">
              {shoesDetails.price}
            </Typography>
          </Stack>
          <StyledColorPicker
            colors={shoesDetails.colors}
            showColorsName={true}
            gap={1}
          />
          <StyledFormControlWithSelect
            title="Розмір"
            selectId="size-select"
            defaultValue={shoesDetails.sizes[0].value}
            formControlSize="small"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {shoesDetails.sizes.map((size) => (
              <MenuItem key={size.id} value={size.value}>
                {size.value}
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
        width={1}
      >
        <Typography variant="h6">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum.
        </Typography>
        <Stack width={{ xs: 1, sm: 0.5 }} gap={10}>
          <Stack
            width={0.6}
            alignSelf={{ xs: "flex-start", sm: "center", md: "flex-start" }}
          >
            <Box
              component="img"
              src={shoesDetails.images[1]}
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
              src={shoesDetails.images[2]}
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
