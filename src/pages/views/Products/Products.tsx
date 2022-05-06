import { Grid } from "@mui/material";
import Content from "components/Content";
import Page from "components/Page";
import { useBeerContext } from "context";
import useBeers from "hooks/useBeers";
import { useEffect } from "react";
import Filters from "./components/Filters";
import ProductList, { ErrorProducts, LoadingProducts } from "./components/ProductList";

const Products = () => {
  const { setBeerList } = useBeerContext();
  const { loading, error, beers } = useBeers();

  useEffect(() => {
    if (beers.length > 0) setBeerList([...beers]);
  }, [beers]);

  return (
    <Page title="Productos">
      <Content title="VINOS" helper="Vinos">
        <Grid container spacing={2}>
          <Grid item sx={{ width: 300 }}>
            <Filters />
          </Grid>
          <Grid item sx={{ width: "calc((100%) - 300px)" }}>
            {loading ? <LoadingProducts /> : error ? <ErrorProducts /> : <ProductList />}
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

export default Products;
