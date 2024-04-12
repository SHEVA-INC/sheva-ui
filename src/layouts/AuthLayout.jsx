import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Header />
      <Container
        component="main"
        maxWidth="xs"
        disableGutters
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
        }}
      >
        <Stack width={1} justifyContent="center">
          <Stack
            height="fit-content"
            borderRadius={(theme) => theme.shape.containerBorderRadius}
            border={1}
            borderColor="secondary.light"
            boxShadow="0px 0px 32px 32px rgba(0, 0, 0, 0.03)"
            my={20}
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
