import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorLayout = () => {
  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Header />
      <Container
        component="main"
        maxWidth="sm"
        disableGutters
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
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
