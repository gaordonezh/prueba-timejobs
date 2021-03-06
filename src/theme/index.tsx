import PropTypes from "prop-types";
import { ReactNode, useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
//
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }: { children: ReactNode }) {
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
