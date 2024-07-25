import { Checkbox } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledCheckbox = ({ register }) => {
  return (
    <Checkbox
      {...register}
      size="small"
      icon={<CheckboxBlankIcon fill="#F3F6F9" />}
    />
  );
};

export default StyledCheckbox;
