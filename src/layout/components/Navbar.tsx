import { Box, Grid } from "@mui/material";
import { ButtonStyled, SquareCheckIconStyled } from "components/styled";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const list = [
  { label: "Vinos", to: "/" },
  { label: "Navbar item 1", to: "/one" },
  { label: "Navbar item 2", to: "/two" },
  { label: "Navbar item 3", to: "/three" },
  { label: "Navbar item 4", to: "/four" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Box py={4}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        {list.map((item, index) => {
          const selected = pathname === item.to;
          return (
            <Fragment key={index}>
              <Grid item>
                <Link to={{ pathname: item.to }}>
                  <ButtonStyled
                    size="large"
                    sx={{ color: selected ? "" : "text.primary" }}
                    variant={selected ? "contained" : "text"}
                  >
                    {item.label}
                  </ButtonStyled>
                </Link>
              </Grid>
              {index !== list.length - 1 && (
                <Grid item>
                  <SquareCheckIconStyled sx={{ fontSize: 10 }} />
                </Grid>
              )}
            </Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Navbar;
