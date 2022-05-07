import { CardActionArea, CardContent, Grid, Typography, Fab } from "@mui/material";
import {
  CardHeaderStyled,
  CardStyled,
  ImgStyled,
  TextStyled,
  ContainerImgStyled,
} from "components/styled";
import fCurrency from "utils/fCurrency";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { BeerProps } from "interfaces";
import { Link } from "react-router-dom";

const ProductListItem = ({ item, addToCart }: { item: BeerProps; addToCart: Function }) => (
  <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
    <CardStyled variant="outlined" className="card">
      <CardActionArea component={Link} to={{ pathname: `/product/${item.id}` }}>
        <CardHeaderStyled
          title={
            <TextStyled variant="h5" color="text.secondary" noWrap>
              {item.tagline}
            </TextStyled>
          }
          subheader={
            <TextStyled variant="h3" color="text.primary" noWrap>
              {item.name}
            </TextStyled>
          }
        />
        <ContainerImgStyled>
          <ImgStyled src={item.image_url} alt={item.name} />
        </ContainerImgStyled>
        <CardContent sx={{ textAlign: "center" }}>
          <TextStyled variant="h2" color="primary.main">
            {fCurrency(item.price)}
          </TextStyled>
          <Typography variant="body2" color="text.secondary">
            {item.description?.substring(0, 60)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <Fab color="primary" className="floating" onClick={addToCart(item)}>
        <AddShoppingCartIcon />
      </Fab>
    </CardStyled>
  </Grid>
);

export default ProductListItem;
