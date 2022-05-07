import { forwardRef, ReactNode } from "react";
import { Box, Grid, Typography, Breadcrumbs, Stack } from "@mui/material";
import { TextStyled } from "./styled";

const Content = forwardRef(
  ({ children, title, helper }: { title: string; children: ReactNode; helper: string }, ref) => (
    <Box ref={ref}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item sx={{ my: 5 }}>
          <Stack alignItems="center">
            <Breadcrumbs aria-label="breadcrumb">
              <Typography color="text.primary">Products</Typography>
              <Typography color="text.secondary">{helper}</Typography>
            </Breadcrumbs>
            <TextStyled variant="h1">{title}</TextStyled>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
);

export default Content;
