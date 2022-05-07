import { Container, Divider } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const PublicLayout = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Header />
        <Divider />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default PublicLayout;
