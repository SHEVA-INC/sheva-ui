import { FormControl, TextField, Typography } from "@mui/material";

const StyledFormControlWithTextField = ({
  value,
  onChange,
  title,
  htmlFor,
  type,
  register,
  helperText,
  placeholder,
  color = "primary",
  error,
  autoComplete,
}) => {
  return (
    <FormControl fullWidth sx={{ gap: 2 }}>
      <Typography htmlFor={htmlFor}>{title}</Typography>
      <TextField
        value={value}
        onChange={onChange}
        id={htmlFor}
        fullWidth
        type={type}
        {...register}
        helperText={helperText}
        placeholder={placeholder}
        color={color}
        error={error}
        autoComplete={autoComplete}
      />
    </FormControl>
  );
};

export default StyledFormControlWithTextField;