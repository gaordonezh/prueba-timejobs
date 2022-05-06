import { createContext, ReactNode, useContext, useState } from "react";
import { ContextProps, BeerProps, OrderProps } from "interfaces";

const Beer = createContext({} as ContextProps);

export const useBeerContext = () => useContext(Beer);

const BeerProvider = ({ children }: { children: ReactNode }) => {
  const [beerList, setBeerList] = useState<Array<BeerProps>>([]);
  const [order, setOrder] = useState<Array<OrderProps>>([]);

  return (
    <Beer.Provider value={{ beerList, setBeerList, order, setOrder }}>{children}</Beer.Provider>
  );
};
export default BeerProvider;
