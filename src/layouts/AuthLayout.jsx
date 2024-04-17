import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderHeight from "../custom-hooks/useHeaderHeight";

const AuthLayout = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Header />
      <Container
        component="main"
        maxWidth="xs"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 6,
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <Stack width={1} justifyContent="center">
          <Stack
            height="fit-content"
            borderRadius={(theme) => theme.shape.containerBorderRadius}
            boxShadow={{ xs: "0px 0px 16px 16px rgba(0, 0, 0, 0.03)" }}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
};

export default AuthLayout;
