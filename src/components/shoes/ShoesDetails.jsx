import Shoes from "./Shoes";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import StyledRating from "../styled/StyledRating";
import StyledColorPicker from "../styled/StyledColorPicker";
import StyledSelect from "../styled/StyledSelect";
import ItemCounter from "../ItemCounter";
import StyledTitle from "../styled/StyledTitle";

const ShoesDetails = () => {
  const shoesDetails = Shoes[0];

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack width={0.5}>
          <img
            src={shoesDetails.mainImage}
            alt={name}
            style={{ width: "100%", height: "max-content" }}
          />
          <Stack flexDirection="row">
            {shoesDetails.images.slice(0, 4).map((image) => (
              <img
                key={image}
                src={image}
                alt={name}
                style={{ width: "calc(100%/4)" }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap={6} width={0.4}>
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

          <StyledSelect
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
          </StyledSelect>

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
      <Stack flexDirection="row" alignItems="center">
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
        <Stack width={0.5}>
          <Stack width={0.6} alignSelf="flex-start">
            <img
              src={shoesDetails.images[1]}
              alt={name}
              style={{ height: "max-content" }}
            />
          </Stack>
          <Stack width={0.6} alignSelf="flex-end">
            <img
              src={shoesDetails.images[2]}
              alt={name}
              style={{ height: "max-content" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ShoesDetails;
