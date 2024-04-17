import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderHeight from "../custom-hooks/useHeaderHeight";

const ErrorLayout = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Header />
      <Container
        component="main"
        maxWidth="sm"
        disableGutters
        sx={{
          display: "flex",
          p: 6,
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <Stack width={1} justifyContent="center">
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
};

export default ErrorLayout;
