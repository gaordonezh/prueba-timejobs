import { ShoppingCart, Facebook, Instagram } from "@mui/icons-material";
import { Badge, Box, Grid, Typography } from "@mui/material";
import { ButtonStyled } from "components/styled";
import { useBeerContext } from "context";
import { Link } from "react-router-dom";

const Header = () => {
  const { order } = useBeerContext();
  let quantity = 0;
  order.forEach((item) => (quantity += item.quantity ?? 0));

  return (
    <Box py={5}>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Grid container spacing={4}>
            <Grid item>
              <ButtonStyled size="large" color="inherit">
                <Typography variant="subtitle1">° Lorempsumolor</Typography>
              </ButtonStyled>
            </Grid>
            <Grid item>
              <ButtonStyled size="large" color="inherit">
                <Typography variant="subtitle1">Lorem</Typography>
              </ButtonStyled>
            </Grid>
            <Grid item>
              <ButtonStyled size="large" color="info">
                <Instagram />
              </ButtonStyled>
            </Grid>
            <Grid item>
              <ButtonStyled size="large" color="info">
                <Facebook />
              </ButtonStyled>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src="./static/logo.png" />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonStyled variant="contained" size="large">
                Lorem ipsum dolor sit
              </ButtonStyled>
            </Grid>
            <Grid item>
              <Badge badgeContent={quantity} color="primary">
                <Link to={{ pathname: "/resume" }}>
                  <ButtonStyled variant="outlined" size="large">
                    <ShoppingCart />
                  </ButtonStyled>
                </Link>
              </Badge>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
