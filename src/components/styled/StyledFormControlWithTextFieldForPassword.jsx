import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EyeIcon from "../../icons/EyeIcon";

const StyledFormControlWithTextFieldForPassword = ({
  title,
  htmlFor,
  register,
  helperText,
  placeholder,
  color,
  error,
  autoComplete,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <FormControl fullWidth sx={{ gap: 2 }}>
      <Typography htmlFor={htmlFor}>{title}</Typography>
      <TextField
        id={htmlFor}
        fullWidth
        type={isPasswordVisible ? "text" : "password"}
        {...register}
        helperText={helperText}
        placeholder={placeholder}
        color={color}
        error={error}
        autoComplete={autoComplete}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <EyeIcon color="black" fontSize="small" />
                ) : (
                  <EyeIcon color="black" fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default StyledFormControlWithTextFieldForPassword;
