import {
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Fab,
  Box,
  FormHelperText,
  Chip,
} from "@mui/material";
import Content from "components/Content";
import Page from "components/Page";
import { CardStyled, ImgStyled, TextStyled } from "components/styled";
import useSingleBeer from "hooks/useSingleBeer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fCurrency from "utils/fCurrency";
import { Add, HorizontalRule, AddShoppingCart } from "@mui/icons-material";
import { useBeerContext } from "context";
import { LoadingDescriptions, LoadingGeneral, LoadingImage } from "./components/LoadingComponent";

const Details = () => {
  const { beerId } = useParams();
  const { addToCart } = useBeerContext();
  const { loading, singleBeer } = useSingleBeer(beerId ?? "");
  const [quantity, setQuantity] = useState(1);

  return (
    <Page title={singleBeer.name ?? "Detalle"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {loading ? (
            <LoadingGeneral />
          ) : (
            <Stack justifyContent="flex-start">
              <Content
                title={singleBeer.name ?? "Cargando..."}
                helper={singleBeer.tagline ?? "..."}
              >
                <List dense>
                  <ItemList
                    title="Elaborado por primera vez"
                    value={singleBeer.first_brewed ?? ""}
                  />
                  <ItemList
                    title="Volumen de ebullición"
                    value={`${singleBeer.boil_volume?.value} ${singleBeer.boil_volume?.unit}`}
                  />
                  <ItemList
                    title="Volumen"
                    value={`${singleBeer.volume?.value} ${singleBeer.volume?.unit}`}
                  />
                </List>
                <CardStyled>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between">
                      <TextStyled variant="h2" noWrap>
                        {fCurrency(singleBeer.price)}
                      </TextStyled>
                      <TextField
                        type="number"
                        style={{ width: 200 }}
                        value={quantity}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                color="error"
                                disabled={Number(quantity) === 1}
                                size="small"
                                onClick={() => setQuantity(Number(quantity) - 1)}
                              >
                                <HorizontalRule />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                color="success"
                                size="small"
                                onClick={() => setQuantity(Number(quantity) + 1)}
                                sx={{ mr: 1 }}
                              >
                                <Add />
                              </IconButton>
                              <Fab color="primary" onClick={addToCart(singleBeer, quantity)}>
                                <AddShoppingCart />
                              </Fab>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Stack>
                  </CardContent>
                </CardStyled>
              </Content>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {loading ? (
            <LoadingImage />
          ) : (
            <Stack alignItems="center" justifyContent="center" sx={{ height: 535 }}>
              <ImgStyled src={singleBeer.image_url ?? ""} />
            </Stack>
          )}
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <LoadingDescriptions />
          ) : (
            <Stack direction="column" spacing={5}>
              <Box>
                <TextStyled variant="h3" color="primary.main">
                  Description
                </TextStyled>
                <Typography color="text.secondary">{singleBeer.description}</Typography>
              </Box>
              <Box>
                <TextStyled variant="h3" color="primary.main">
                  Consejo cervecero
                </TextStyled>
                <Typography color="text.secondary">{singleBeer.brewers_tips}</Typography>
              </Box>
              <Box>
                <TextStyled variant="h3" color="primary.main">
                  Es recomendado consumir la bebida con:
                </TextStyled>
                <Grid container spacing={1}>
                  {(singleBeer.food_pairing ?? []).map((item, index) => (
                    <Grid item key={index}>
                      <Chip label={item} variant="filled" color="secondary" />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <TextStyled variant="h3" color="primary.main">
                  Método de elaboración
                </TextStyled>
                <Typography color="text.secondary">
                  Fermentación:{" "}
                  {`${singleBeer.method?.fermentation.temp.value} grados ${singleBeer.method?.fermentation.temp.unit}`}
                  <br /> {singleBeer.method?.twist}
                  <br />
                  Proceso de cocción:{" "}
                  {(singleBeer.method?.mash_temp ?? []).map((item, index) => (
                    <FormHelperText key={index} component="span">
                      ─ {item.duration} minutos a {item.temp.value} grados {item.temp.unit}
                    </FormHelperText>
                  ))}
                </Typography>
              </Box>
              <Box>
                <TextStyled variant="h3" color="primary.main">
                  Ingredients
                </TextStyled>
                <Typography color="text.secondary">
                  {singleBeer.ingredients?.yeast}
                  <br />
                  {(singleBeer.ingredients?.malt ?? []).map((item, index) => (
                    <FormHelperText key={index} component="span">
                      ─ {item.name}, {item.amount.value} {item.amount.unit}
                    </FormHelperText>
                  ))}
                  {(singleBeer.ingredients?.hops ?? []).map((item, index) => (
                    <FormHelperText key={index} component="span">
                      ─ {item.name}, {item.amount.value} {item.amount.unit}
                    </FormHelperText>
                  ))}
                </Typography>
              </Box>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Details;

const ItemList = ({ title, value }: { title: string; value: string }) => (
  <ListItem disableGutters disablePadding>
    <ListItemText
      primary={
        <TextStyled variant="h3" fontWeight={100} color="text.secondary">
          {title}
        </TextStyled>
      }
    />
    <Typography color="text.primary" variant="subtitle1">
      {value}
    </Typography>
  </ListItem>
);
