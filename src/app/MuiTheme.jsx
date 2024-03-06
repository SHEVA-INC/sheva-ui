import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#51379B",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Gilroy-Regular",
  },
  spacing: 4,
  shape: {
    borderRadius: 0,
    containerBorderRadius: 4,
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
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
