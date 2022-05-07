import { CardStyled, ContainerImgStyled, ImgStyled, TextStyled } from "components/styled";
import {
  Typography,
  Box,
  CardContent,
  Grid,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
  Fab,
} from "@mui/material";
import fCurrency from "utils/fCurrency";
import { Add, Close, HorizontalRule } from "@mui/icons-material";
import { OrderProps } from "interfaces";

const ItemResume = ({
  item,
  index,
  handleDelete,
  handleChange,
}: {
  item: OrderProps;
  index: number;
  handleDelete: Function;
  handleChange: Function;
}) => {
  return (
    <CardStyled variant="outlined">
      <Box p={1}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <ContainerImgStyled style={{ height: 200 }}>
              <ImgStyled src={item.image_url} alt={item.name} />
            </ContainerImgStyled>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <CardContent>
              <TextStyled variant="h4" sx={{ fontWeight: 100 }}>
                {item.tagline}
              </TextStyled>
              <TextStyled variant="h2" sx={{ fontWeight: 100 }} color="text.secondary">
                {item.name}
              </TextStyled>
              <Typography variant="h4" component="p">
                {fCurrency(item.price)}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
              <TextField
                type="number"
                fullWidth
                value={item.quantity}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        color="error"
                        disabled={Number(item.quantity) === 1}
                        size="small"
                        onClick={() => handleChange(index, Number(item.quantity) - 1)}
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
                        onClick={() => handleChange(index, Number(item.quantity) + 1)}
                      >
                        <Add />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3} md={4} lg={2}>
            <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
              <Typography variant="h4" component="p">
                {fCurrency((item.price ?? 1) * (item.quantity ?? 1))}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={1}>
            <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
              <Fab color="error" onClick={() => handleDelete(index)}>
                <Close />
              </Fab>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CardStyled>
  );
};

export default ItemResume;
