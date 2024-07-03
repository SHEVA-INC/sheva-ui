import { FormControl, Select, Typography } from "@mui/material";
import DropDownIcon from "../../icons/DropDownIcon";

const StyledFormControlWithSelect = ({
  value,
  defaultValue,
  onChange,
  title,
  formControlSize,
  selectId,
  children,
  gap,
  onClick,
  register,
  variant = "h6",
  fontWeight = "bold",
}) => {
  return (
    <FormControl size={formControlSize} sx={{ gap: gap }} fullWidth>
      <Typography variant={variant} fontWeight={fontWeight} htmlFor={selectId}>
        {title}
      </Typography>
      <Select
        id={selectId}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        color="secondary"
        IconComponent={DropDownIcon}
        onClick={onClick}
        {...register}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default StyledFormControlWithSelect;
