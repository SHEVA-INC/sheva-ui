import { Checkbox } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledCheckbox = ({ fill, register }) => {
  return (
    <Checkbox
      {...register}
      size="small"
      icon={<CheckboxBlankIcon fill={fill} />}
    />
  );
};

export default StyledCheckbox;
