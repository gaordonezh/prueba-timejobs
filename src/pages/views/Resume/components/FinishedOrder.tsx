import { Fragment, useState } from "react";
import {
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { ButtonStyled, TextStyled, LoadingButtonStyled } from "components/styled";
import { useBeerContext } from "context";
import fCurrency from "utils/fCurrency";
import sleep from "utils/sleep";
import { useNavigate } from "react-router-dom";

const FinishedOrder = () => {
  const { order } = useBeerContext();
  let sum = 0;

  order.forEach((item) => (sum += (item.price ?? 0) * (item.quantity ?? 0)));

  return (
    <CardContent>
      <Grid container spacing={1} alignItems="center" justifyContent="space-between">
        <Grid item>
          <TextStyled variant="h2">TOTAL: {fCurrency(sum)}</TextStyled>
        </Grid>
        <Grid item>
          <FinishMessage sum={sum} />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default FinishedOrder;

const FinishMessage = ({ sum }: { sum: number }) => {
  const navigate = useNavigate();
  const [visble, setVisble] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setOrder } = useBeerContext();

  const handleClose = () => setVisble(!visble);

  const finishedOrder = async () => {
    setLoading(true);
    await sleep(2000);
    setLoading(false);
    handleClose();
    setOrder([]);
    navigate("/");
  };

  return (
    <Fragment>
      <ButtonStyled
        variant="contained"
        color="primary"
        size="large"
        onClick={() => setVisble(true)}
      >
        PROCESAR PEDIDO
      </ButtonStyled>
      <Dialog open={visble} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography
            align="center"
            variant="h3"
            component="p"
            color={`text.${loading ? "secondary" : "primary"}`}
          >
            {loading ? "FINALIZANDO..." : "PROCESO DE PAGO"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextStyled align="center" variant="h2">
            TOTAL {fCurrency(sum)}
          </TextStyled>
        </DialogContent>
        <DialogActions>
          <LoadingButtonStyled
            color="secondary"
            variant="outlined"
            onClick={handleClose}
            size="large"
            loading={loading}
          >
            CANCELAR
          </LoadingButtonStyled>
          <LoadingButtonStyled
            color="primary"
            variant="contained"
            size="large"
            loading={loading}
            onClick={finishedOrder}
          >
            FINALIZAR
          </LoadingButtonStyled>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
