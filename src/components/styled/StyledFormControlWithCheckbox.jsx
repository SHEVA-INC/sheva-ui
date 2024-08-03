import { Checkbox, FormControlLabel } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledFormControlWithCheckbox = ({
  label,
  value,
  defaultChecked,
  register,
  disabled,
}) => {
  return (
    <FormControlLabel
      label={label}
      disabled={disabled}
      control={
        <Checkbox
          {...register}
          value={value}
          defaultChecked={defaultChecked}
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
