import { Button, Card, CardHeader, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Square, CropSquare } from "@mui/icons-material";

export const ButtonStyled = styled(Button)(({ theme }) => ({
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
