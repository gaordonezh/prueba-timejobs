import Page from "components/Page";
import Content from "components/Content";
import { useBeerContext } from "context";
import ItemResume from "./components/ItemResume";
import { Container, Stack } from "@mui/material";
import FinishedOrder from "./components/FinishedOrder";
import { ButtonStyled, ContainerImgStyled, ImgStyled } from "components/styled";
import { Link } from "react-router-dom";

const Resume = () => {
  const { order, setOrder } = useBeerContext();

  const handleDelete = (index: number) => {
    order.splice(index, 1);
    setOrder([...order]);
  };

  const handleChange = (index: number, value: number) => {
    if (Number(value) > 0) {
      order[index]["quantity"] = Number(value);
      setOrder([...order]);
    }
  };

  return (
    <Page title="Resumen de compra">
      <Content title="RESUMEN" helper="Resumen de compra">
        <Container maxWidth="lg">
          {order.length > 0 ? (
            <Stack spacing={1} direction="column">
              {order.map((item, index) => (
                <ItemResume
                  key={index}
                  index={index}
                  item={item}
                  handleDelete={handleDelete}
                  handleChange={handleChange}
                />
              ))}
              <FinishedOrder />
            </Stack>
          ) : (
            <Stack spacing={5} justifyContent="center" alignItems="center">
              <ContainerImgStyled>
                <ImgStyled src="/static/empty.png" alt="Empty cart" />
              </ContainerImgStyled>
              <Link to={{ pathname: "/" }}>
                <ButtonStyled variant="outlined" size="large">
                  SEGUIR COMPRANDO...
                </ButtonStyled>
              </Link>
            </Stack>
          )}
        </Container>
      </Content>
    </Page>
  );
};

export default Resume;
