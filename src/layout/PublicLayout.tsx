import { Container, Divider } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
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
      </Container>
    </Fragment>
  );
};

export default PublicLayout;
