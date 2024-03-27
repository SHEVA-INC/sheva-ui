import { Checkbox } from "@mui/material";
import CheckboxBlankIcon from "../../icons/CheckboxBlankIcon";

const StyledCheckbox = ({ fill }) => {
  return <Checkbox icon={<CheckboxBlankIcon fill={fill} />} />;
};

export default StyledCheckbox;
