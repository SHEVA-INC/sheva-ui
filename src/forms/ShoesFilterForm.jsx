import { Button, MenuItem, Stack, Typography } from "@mui/material";
import CategoryCheckboxWithAmountLeft from "../components/CategoryCheckboxWithAmountLeft";
import StyledColorPicker from "../components/styled/StyledColorPicker";
import ShoesColors from "../utils/ShoesColors";
import StyledSelect from "../components/styled/StyledSelect";

const sizes = [
  { id: 1, value: 38 },
  { id: 2, value: 39 },
  { id: 3, value: 40 },
];

const ShoesFilterForm = ({ order }) => {
  return (
    <Stack
      component="form"
      gap={5}
      px={9}
      py={8}
      height="fit-content"
      borderRadius={(theme) => theme.shape.containerBorderRadius}
      border="none"
      boxShadow="0px 0px 12px 12px rgba(0, 0, 0, 0.01)"
      order={order}
      maxWidth="340px"
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

      <StyledSelect
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
      </StyledSelect>

      <StyledColorPicker
        colors={Object.keys(ShoesColors)}
        title="Колір"
        fontWeight="bold"
        gap={4}
      />

      <Stack flexDirection="row">
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
    </Stack>
  );
};

export default ShoesFilterForm;
