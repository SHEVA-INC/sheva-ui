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
        maxWidth="md"
        disableGutters
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
};

export default AuthLayout;
