import {
  FormControl,
  FormHelperText,
  Select,
  Stack,
  Typography,
} from "@mui/material";
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
  disabled,
  displayEmpty,
  renderValue,
  error,
  helperText,
}) => {
  return (
    <FormControl size={formControlSize} sx={{ gap: gap }} fullWidth>
      <Typography variant={variant} fontWeight={fontWeight} htmlFor={selectId}>
        {title}
      </Typography>
      <Stack gap={0}>
        <Select
          id={selectId}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          color="secondary"
          IconComponent={DropDownIcon}
          onClick={onClick}
          {...register}
          disabled={disabled}
          displayEmpty={displayEmpty}
          renderValue={renderValue}
          error={error}
          placeholder="Обрати"
        >
          {children}
        </Select>
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      </Stack>
    </FormControl>
  );
};

export default StyledFormControlWithSelect;
