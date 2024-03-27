import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#51379B",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000",
      light: "rgba(0, 0, 0, 0.23)",
    },
  },
  typography: {
    fontFamily: "Gilroy-Regular",
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
    containerBorderRadius: 1,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "*": {
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          height: "fit-content",
          borderRadius: 0,
          textTransform: "none",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
