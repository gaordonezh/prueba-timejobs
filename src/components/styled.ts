import { Box, Button, Card, CardHeader, Fab, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Square, CropSquare } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export const ButtonStyled = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "uppercase",
}));

export const LoadingButtonStyled = styled(LoadingButton)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "uppercase",
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  position: "relative",
}));

export const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
  textAlign: "center",
}));

export const SquareCheckIconStyled = styled(Square)(({ theme }) => ({
  transform: "rotate(45deg)",
  color: theme.palette.primary.main,
}));

export const SquareUncheckIconStyled = styled(CropSquare)(({ theme }) => ({
  transform: "rotate(45deg)",
  color: theme.palette.primary.main,
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "gungill",
}));

export const ContainerImgStyled = styled("figure")(({ theme }) => ({
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ImgStyled = styled("img")(({ theme }) => ({
  maxHeight: "100%",
  maxWidth: "100%",
}));

export const HeaderStyled = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 2000,
  backgroundColor: "#fff",
}));

export const ProductContainerStyled = styled(Grid)(({ theme }) => ({
  width: "calc((100%) - 300px)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const FabStyled = styled(Fab)(({ theme }) => ({
  position: "fixed",
  top: "30%",
  left: 0,
  zIndex: 9999,
}));
