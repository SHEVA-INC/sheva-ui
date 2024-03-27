import { FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import StyledCheckbox from "./styled/StyledCheckbox";

const CategoryCheckboxWithAmountLeft = ({ title, categories }) => {
  return (
    <FormGroup>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      {categories.map((categorie) => (
        <Stack
          key={categorie.label}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControlLabel
            control={<StyledCheckbox fill="#F3F6F9" />}
            label={<Typography fontWeight="bold">{categorie.label}</Typography>}
          />
          <Typography color="secondary.light" fontWeight="bold">
            {categorie.amountLeft}
          </Typography>
        </Stack>
      ))}
    </FormGroup>
  );
};

export default CategoryCheckboxWithAmountLeft;
