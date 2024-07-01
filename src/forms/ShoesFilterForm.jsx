import { Button, MenuItem, Typography } from "@mui/material";
import CategoryCheckboxWithAmountLeft from "../components/CategoryCheckboxWithAmountLeft";
import StyledColorPicker from "../components/styled/StyledColorPicker";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledForm from "../components/styled/StyledForm";
import shoesColors from "../enums/shoesColors";
const sizes = [
  { id: 1, value: 38 },
  { id: 2, value: 39 },
  { id: 3, value: 40 },
];

const ShoesFilterForm = ({ order }) => {
  return (
    <StyledForm
      px={9}
      py={8}
      alignItems="flex-start"
      order={order}
      maxWidth="340px"
      boxShadow="0 0 10px 10px rgba(0, 0, 0, 0.03)"
      borderRadius={(theme) => theme.shape.containerBorderRadius * 3}
    >
      <CategoryCheckboxWithAmountLeft
        title="Категорія"
        categories={[
          { label: "Дорослим", amountLeft: 28 },
          { label: "Дітям", amountLeft: 307 },
        ]}
      />

      <CategoryCheckboxWithAmountLeft
        title="Категорія"
        categories={[
          { label: "Сороконіжки", amountLeft: 28 },
          { label: "Бутси", amountLeft: 307 },
        ]}
      />

      <StyledFormControlWithSelect
        title="Розмір"
        selectId="size-select"
        defaultValue={sizes[0].value}
        formControlSize="small"
        gap={4}
      >
        {sizes.map((size) => (
          <MenuItem key={size.id} value={size.value}>
            {size.value}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <StyledColorPicker
        colors={Object.keys(shoesColors)}
        title="Колір"
        fontWeight="bold"
        gap={4}
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
