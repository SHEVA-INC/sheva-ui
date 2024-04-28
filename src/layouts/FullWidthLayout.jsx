import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FullWidthLayout = () => {
  return (
    <Stack flexDirection="column" minHeight="100vh" m={0}>
      <Header />
      <Container
        component="main"
        maxWidth="xxl"
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

export default FullWidthLayout;
