import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

let theme = createTheme({
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

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "6rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "6rem",
      },
    },
    h2: {
      fontSize: "3.75rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.75rem",
      },
    },
    h3: {
      fontSize: "3rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "2.125rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.125rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.15rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem",
      },
    },
    subtitle1: {
      fontSize: "1.125rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.05rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.125rem",
      },
    },
    subtitle2: {
      fontSize: "0.875rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.725rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.875rem",
      },
    },
    body1: {
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.875rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.725rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.875rem",
      },
    },
    button: {
      fontSize: "0.875rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.725rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "0.75rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.65rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.7rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.75rem",
      },
    },
    overline: {
      fontSize: "0.75rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.65rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.7rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.75rem",
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
