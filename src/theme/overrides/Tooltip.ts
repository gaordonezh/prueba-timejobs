// ----------------------------------------------------------------------

import { ThemeProps } from "interfaces";

export default function tooltip(theme: ThemeProps) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
