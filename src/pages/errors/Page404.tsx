import { ArrowLeft } from "@mui/icons-material";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  FormHelperText,
  Container,
} from "@mui/material";

const Page404 = () => {
  const handleBack = () => window.history.back();

  return (
    <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
      <Grid item textAlign="center">
        <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
          <Grid item textAlign="center">
            <Container maxWidth="xs">
              <Card elevation={0}>
                <CardContent>
                  <Stack direction="column" spacing={5} alignItems="center">
                    <img src="/static/logo.png" alt="Logo company" style={{ height: 175 }} />
                    <Typography variant="h5" component="h1" sx={{ maxWidth: 300 }}>
                      PÁGINA NO ENCONTRADA
                    </Typography>
                    <FormHelperText sx={{ textAlign: "justify" }}>
                      Manipulaste la dirección URL o ingresaste a una dirección inexistente. <br />
                      Puede continuar solo usando la barra de navegación para una buena experiencia
                      de usuario. <br />
                      <br />A continuación dale click en "VOLVER" para continuar...
                    </FormHelperText>

                    <Button color="info" size="large" variant="contained" onClick={handleBack}>
                      <ArrowLeft />
                      VOLVER
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page404;
