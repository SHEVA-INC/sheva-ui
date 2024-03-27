import { FormControl, Select, Typography } from "@mui/material";
import DropDownIcon from "../../icons/DropDownIcon";

const StyledSelect = ({
  value,
  defaultValue,
  onChange,
  formControlSize,
  selectId,
  children,
  gap,
}) => {
  return (
    <FormControl size={formControlSize} sx={{ gap: gap }}>
      <Typography variant="h6" fontWeight="bold" htmlFor={selectId}>
        Розмір
      </Typography>
      <Select
        id={selectId}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        color="secondary"
        IconComponent={DropDownIcon}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default StyledSelect;
