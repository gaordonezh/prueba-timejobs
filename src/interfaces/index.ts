export interface ThemeProps {
  customShadows: { z20: string; z8: string; z16: string; primary: string; secondary: string };
  palette: {
    grey: any;
    action: { hover: string; focus: string; disabledBackground: boolean };
    text: { disabled: boolean };
  };
  shape: { borderRadiusMd: string };
  spacing: Function;
}

export interface PropsRoutes {
  path: string;
  element: any;
  children: Array<{ path: string; element: any }>;
}

export interface BeerProps {
  id?: number;
  tagline?: string;
  name?: string;
  description?: string;
  image_url?: string;
  price?: number;
}

export interface OrderProps {
  id?: number;
  name?: string;
  tagline?: string;
  price?: number;
  quantity?: number;
  image_url?: string;
}

export interface ContextProps {
  beerList: Array<BeerProps>;
  setBeerList: Function;
  order: Array<OrderProps>;
  setOrder: Function;
}
