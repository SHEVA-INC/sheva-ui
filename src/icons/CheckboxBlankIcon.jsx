import { SvgIcon } from "@mui/material";

const CheckboxBlankIcon = ({ fill }) => {
  return (
    <SvgIcon>
      <svg focusable="false" aria-hidden="true" data-testid="CheckBoxBlankIcon">
        <path
          d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5"
          fill={fill}
        ></path>
      </svg>
    </SvgIcon>
  );
};

export default CheckboxBlankIcon;
