import { Button, MenuItem, Typography } from "@mui/material";
import StyledColorPicker from "../components/styled/StyledColorPicker";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledForm from "../components/styled/StyledForm";
import shoesColors from "../enums/shoesColors";
import shoesSizes from "../enums/shoesSizes";
import shoesTypes from "../enums/shoesTypes";

const ShoesFilterForm = ({
  order,
  registerType,
  registerSize,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <StyledForm
      px={9}
      py={8}
      alignItems="flex-start"
      order={order}
      maxWidth="340px"
      boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.03)"
      borderRadius={(theme) => theme.shape.containerBorderRadius}
    >
      <StyledFormControlWithSelect
        title="Тип"
        selectId="filter-type-select"
        formControlSize="small"
        gap={4}
        register={registerType}
        defaultValue=""
        displayEmpty={true}
      >
        <MenuItem disabled value="">
          Виберіть тип
        </MenuItem>
        {Object.values(shoesTypes).map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <StyledFormControlWithSelect
        title="Розмір"
        selectId="filter-size-select"
        formControlSize="small"
        gap={4}
        register={registerSize}
        defaultValue=""
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

      <Button variant="contained" sx={{ width: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Скинути
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default ShoesFilterForm;
