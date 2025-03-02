import { Button, MenuItem, Typography } from "@mui/material";
import StyledFormControlWithSelect from "../components/styled/StyledFormControlWithSelect";
import StyledForm from "../components/styled/StyledForm";
import accessoriesTypes from "../enums/accessoriesTypes";

const AccessoriesFilterForm = ({
  order,
  filterType,
  setFilterType,
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
        selectId="filter-accessories-type-select"
        formControlSize="small"
        gap={2}
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        displayEmpty={true}
      >
        <MenuItem disabled value="">
          Виберіть тип
        </MenuItem>
        {Object.values(accessoriesTypes).map((type) => (
          <MenuItem key={type} value={type}>
            {type.slice(0, 1).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </StyledFormControlWithSelect>

      <Button variant="contained" sx={{ width: 1 }} type="submit">
        <Typography variant="h6" fontWeight="bold">
          Скинути
        </Typography>
      </Button>
    </StyledForm>
  );
};

export default AccessoriesFilterForm;
