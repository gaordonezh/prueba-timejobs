import { Grid, Skeleton, Box, Stack } from "@mui/material";
import { ImgStyled } from "components/styled";
import { useBeerContext } from "context";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const { beerList, addToCart } = useBeerContext();

  return (
    <Grid container spacing={2}>
      {beerList.length > 0 ? (
        beerList.map((item) => <ProductListItem item={item} addToCart={addToCart} key={item.id} />)
      ) : (
        <ErrorProducts />
      )}
    </Grid>
  );
};

export default ProductList;

export const LoadingProducts = () => (
  <Grid container spacing={2}>
    {Array.from(new Array(8)).map((item, index) => (
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
        <Stack spacing={2}>
          <Box>
            <Skeleton height="25px" />
            <Skeleton height="50px" />
          </Box>
          <Skeleton variant="rectangular" height={300} />
          <Box>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Stack>
      </Grid>
    ))}
  </Grid>
);

export const ErrorProducts = () => (
  <Grid item xs={12}>
    <ImgStyled src="/static/empty.png" />
  </Grid>
);
