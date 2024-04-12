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
    thirdly: { main: "#ffffff" },
  },
  typography: {
    fontFamily: "Gilroy-Regular",
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
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
      styleOverrides: {
        root: { paddingLeft: 0 },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { width: "fit-content" },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: { textTransform: "none" },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { marginLeft: 0, marginRight: 0 },
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
