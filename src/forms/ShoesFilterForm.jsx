import { Button, MenuItem, Typography } from "@mui/material";
import StyledColorPicker from "../components/styled/StyledColorPicker";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledForm from "../components/styled/StyledForm";
import shoesColors from "../enums/shoesColors";
import shoesSizes from "../enums/shoesSizes";
import shoesTypes from "../enums/shoesTypes";
import shoesBrands from "../enums/shoesBrands";

const ShoesFilterForm = ({
  order,
  filterType,
  setFilterType,
  filterBrand,
  setFilterBrand,
  filterSize,
  setFilterSize,
  selectedColor,
  setSelectedColor,
  onSubmit,
}) => {
  return (
    <StyledForm
      px={9}
      py={8}
      alignItems="flex-start"
      order={order}
      width={{ xs: 1, sm: "340px" }}
      boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.03)"
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      onSubmit={onSubmit}
    >
      <StyledFormControlWithSelect
        title="Тип"
        selectId="filter-type-select"
        formControlSize="small"
        gap={2}
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        displayEmpty={true}
      >
        <MenuItem disabled value="">
          Виберіть тип
        </MenuItem>
        {Object.values(shoesTypes).map((type) => (
          <MenuItem key={type} value={type}>
            {type.slice(0, 1).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <StyledFormControlWithSelect
        title="Бренд"
        selectId="filter-brand-select"
        formControlSize="small"
        gap={2}
        value={filterBrand}
        onChange={(e) => setFilterBrand(e.target.value)}
        displayEmpty={true}
      >
        <MenuItem disabled value="">
          Виберіть бренд
        </MenuItem>
        {Object.keys(shoesBrands).map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand.slice(0, 1).toUpperCase() + brand.slice(1)}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <StyledFormControlWithSelect
        title="Розмір"
        selectId="filter-size-select"
        formControlSize="small"
        gap={2}
        value={filterSize}
        onChange={(e) => setFilterSize(e.target.value)}
        displayEmpty={true}
      >
        <MenuItem disabled value="">
          Виберіть розмір
        </MenuItem>
        {shoesSizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <StyledColorPicker
        colors={Object.keys(shoesColors)}
        title="Колір"
        fontWeight="bold"
        gap={4}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <Button variant="contained" sx={{ width: 1 }} type="submit">
        <Typography variant="h6" fontWeight="bold">
          Скинути
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ShoesFilterForm;
