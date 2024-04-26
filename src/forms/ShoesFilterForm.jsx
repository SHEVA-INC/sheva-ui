import { Button, MenuItem, Stack, Typography } from "@mui/material";
import CategoryCheckboxWithAmountLeft from "../components/CategoryCheckboxWithAmountLeft";
import StyledColorPicker from "../components/styled/StyledColorPicker";
import ShoesColors from "../utils/ShoesColors";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledForm from "../components/styled/StyledForm";
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
        colors={Object.keys(ShoesColors)}
        title="Колір"
        fontWeight="bold"
        gap={4}
      />

      <Stack flexDirection="row" flexWrap="wrap">
        <Button variant="contained">
          <Typography variant="h6" fontWeight="bold" px={3} py={2}>
            Скинути
          </Typography>
        </Button>
        <Button>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="secondary.light"
            px={3}
            py={2}
          >
            Більше
          </Typography>
        </Button>
      </Stack>
    </StyledForm>
  );
};

export default ShoesFilterForm;
