export interface ThemeProps {
  customShadows: {
    z20: string;
    z8: string;
    z16: string;
    primary: string;
    secondary: string;
  };
  palette: {
    grey: any;
    action: {
      hover: string;
      focus: string;
      disabledBackground: boolean;
    };
    text: {
      disabled: boolean;
    };
  };
  shape: {
    borderRadiusMd: string;
  };
  spacing: Function;
}

export interface ContextProps {}

export interface PropsRoutes {
  path: string;
  element: any;
  children: Array<{ path: string; element: any }>;
}
