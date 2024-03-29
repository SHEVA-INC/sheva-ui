import { Checkbox } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledCheckbox = ({ fill }) => {
  return <Checkbox size="small" icon={<CheckboxBlankIcon fill={fill} />} />;
};

export default StyledCheckbox;
