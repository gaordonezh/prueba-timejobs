import { Email, Facebook, Phone, PointOfSale, WhatsApp } from "@mui/icons-material";
import { ButtonStyled, ImgStyled, TextStyled } from "components/styled";
import {
  Box,
  Grid,
  Divider,
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

interface ListProps {
  title: string;
  items: Array<{
    label: string;
    icon?: any;
  }>;
}

const list: Array<ListProps> = [
  {
    title: "Subtitle 1",
    items: [{ label: "Text one" }, { label: "Text two" }, { label: "Text three" }],
  },
  {
    title: "Subtitle 2",
    items: [{ label: "Text one" }, { label: "Text two" }, { label: "Text three" }],
  },
  {
    title: "Subtitle 3",
    items: [
      { label: "Text one", icon: WhatsApp },
      { label: "Text two", icon: Facebook },
    ],
  },
  {
    title: "Subtitle 4",
    items: [{ label: "Text one" }, { label: "Text two" }],
  },
];

const Footer = () => (
  <Box py={10}>
    <Divider sx={{ mb: 10 }} />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
        <ImgStyled src="/static/logo.png" />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
        <PointOfSale color="primary" />
        <Typography>Address, Lorem ipsum dolor sit amet.</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
        <Phone color="primary" />
        <Typography>+7 (495) 137-77-45</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
        <Email color="primary" />
        <Typography>info@beers.com</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={2} xl={3}>
        <ButtonStyled variant="contained" size="large" fullWidth>
          Contactar
        </ButtonStyled>
      </Grid>

      {list.map((row, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index} textAlign="center">
          <ItemList title={row.title} items={row.items} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Footer;

const ItemList = ({ title, items }: ListProps) => (
  <List
    subheader={
      <ListSubheader>
        <TextStyled variant="h2" fontWeight={100}>
          {title.toUpperCase()}
        </TextStyled>
      </ListSubheader>
    }
  >
    {items.map((row, index) => (
      <ListItem key={index}>
        {row.icon && (
          <ListItemIcon>
            <row.icon color="info" />
          </ListItemIcon>
        )}
        <ListItemText primary={row.label} />
      </ListItem>
    ))}
  </List>
);
