import { Grid } from "@mui/material";
import Content from "components/Content";
import Page from "components/Page";
import { ProductContainerStyled } from "components/styled";
import { useBeerContext } from "context";
import useBeers from "hooks/useBeers";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductList, { ErrorProducts, LoadingProducts } from "./components/ProductList";

const Products = () => {
  const { setBeerList, setDBBeers } = useBeerContext();
  const { loading, error, beers } = useBeers();
  const [isLoadPRD, setIsLoadPRD] = useState(false);

  useEffect(() => {
    if (beers.length > 0) {
      setDBBeers([...beers]);
      setBeerList([...beers]);
    }
    // eslint-disable-next-line
  }, [beers]);

  return (
    <Page title="Productos">
      <Content title="VINOS" helper="Vinos">
        <Grid container spacing={2}>
          <Filters loading={loading} setLoading={setIsLoadPRD} />

          <ProductContainerStyled item>
            {loading || isLoadPRD ? (
              <LoadingProducts />
            ) : error ? (
              <ErrorProducts />
            ) : (
              <ProductList />
            )}
          </ProductContainerStyled>
        </Grid>
      </Content>
    </Page>
  );
};

export default Products;
