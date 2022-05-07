import { ArrowLeft } from "@mui/icons-material";
import { Stack, FormHelperText, Container, Box } from "@mui/material";
import { ButtonStyled, TextStyled } from "components/styled";
import { Link } from "react-router-dom";

const Page404 = () => (
  <Container maxWidth="xs">
    <Box py={10}>
      <Stack direction="column" spacing={5} alignItems="center">
        <TextStyled variant="h1">404</TextStyled>
        <TextStyled variant="h2">PÁGINA NO ENCONTRADA</TextStyled>
        <FormHelperText>
          Manipulaste la dirección URL o ingresaste a una dirección inexistente. <br />
          Puede continuar solo usando la barra de navegación para una buena experiencia de usuario.{" "}
          <br />
          <br />A continuación dale click en "IR A INICIO" para continuar...
        </FormHelperText>
        <Link to={{ pathname: "/" }}>
          <ButtonStyled color="primary" variant="outlined" size="large">
            <ArrowLeft />
            IR A INICIO
          </ButtonStyled>
        </Link>
      </Stack>
    </Box>
  </Container>
);

export default Page404;
