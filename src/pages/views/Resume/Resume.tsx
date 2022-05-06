import Page from "components/Page";
import Content from "components/Content";
import { useBeerContext } from "context";
import ItemResume from "./components/ItemResume";
import { Container, Stack } from "@mui/material";

const Resume = () => {
  const { order } = useBeerContext();
  console.log(order);
  return (
    <Page title="Resumen de compra">
      <Content title="RESUMEN" helper="Resumen de compra">
        <Container maxWidth="lg">
          <Stack spacing={1} direction="column">
            {order.map((item, index) => (
              <ItemResume key={index} item={item} />
            ))}
          </Stack>
        </Container>
      </Content>
    </Page>
  );
};

export default Resume;
