import { Checkbox, FormControlLabel } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledFormControlWithCheckbox = ({
  label,
  value,
  defaultValue,
  checked,
  register,
  disabled,
}) => {
  return (
    <FormControlLabel
      {...register}
      label={label}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      control={
        <Checkbox
          value={value}
          defaultValue={defaultValue}
          checked={checked}
          size="small"
          color="primary"
          icon={<CheckboxBlankIcon fill="#F3F6F9" />}
        />
      }
      sx={{ ".MuiFormControlLabel-label": { fontWeight: "bold" } }}
    />
  );
};

export default StyledFormControlWithCheckbox;
