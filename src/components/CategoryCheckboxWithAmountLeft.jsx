import { FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import StyledCheckbox from "./styled/StyledCheckbox";

const CategoryCheckboxWithAmountLeft = ({ title, categories, register }) => {
  return (
    <FormGroup sx={{ width: 1 }}>
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
            control={<StyledCheckbox fill="#F3F6F9" register={register} />}
            label={
              <Typography fontWeight="bold" variant="body1">
                {categorie.label}
              </Typography>
            }
          />
          <Typography color="secondary.light" fontWeight="bold" variant="body2">
            {categorie.amountLeft}
          </Typography>
        </Stack>
      ))}
    </FormGroup>
  );
};

export default CategoryCheckboxWithAmountLeft;
