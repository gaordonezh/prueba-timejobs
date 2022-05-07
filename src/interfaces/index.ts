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
  first_brewed?: string;
  brewers_tips?: string;
  boil_volume?: Units;
  volume?: Units;
  method?: {
    fermentation: {
      temp: Units;
    };
    twist: string;
    mash_temp: Array<{
      temp: Units;
      duration: number;
    }>;
  };
  ingredients?: {
    yeast: string;
    malt: Array<{ name: string; amount: Units }>;
    hops: Array<{ name: string; amount: Units }>;
  };
  food_pairing?: Array<string>;
}

type Units = {
  value: number;
  unit: string;
};

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
  DBBeers: Array<BeerProps>;
  setBeerList: Function;
  setDBBeers: Function;
  order: Array<OrderProps>;
  setOrder: Function;
  addToCart: Function;
}
