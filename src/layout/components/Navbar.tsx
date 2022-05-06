import { Box, Grid } from "@mui/material";
import { ButtonStyled, SquareCheckIconStyled } from "components/styled";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const list = [
  { label: "inicio", to: "/" },
  { label: "inicio", to: "/" },
  { label: "inicio", to: "/" },
  { label: "inicio", to: "/" },
  { label: "inicio", to: "/" },
];

const Navbar = () => {
  return (
    <Box py={4}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        {list.map((item, index) => (
          <Fragment key={index}>
            <Grid item>
              <Link to={{ pathname: item.to }}>
                <ButtonStyled size="large" sx={{ color: "text.primary" }}>
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
        ))}
      </Grid>
    </Box>
  );
};

export default Navbar;
