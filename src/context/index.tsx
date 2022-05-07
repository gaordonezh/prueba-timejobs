import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ContextProps, BeerProps, OrderProps } from "interfaces";
import { useLocation } from "react-router-dom";

const Beer = createContext({} as ContextProps);

export const useBeerContext = () => useContext(Beer);

const BeerProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [beerList, setBeerList] = useState<Array<BeerProps>>([]);
  const [DBBeers, setDBBeers] = useState<Array<BeerProps>>([]);
  const [order, setOrder] = useState<Array<OrderProps>>([]);

  const addToCart = (data: BeerProps, qty?: number) => () => {
    const index = order.findIndex((item) => item.id === data.id);
    const quantity = qty ? qty : 1;

    if (index >= 0) {
      order[index].quantity = (order[index].quantity ?? 0) + quantity;
    } else {
      order.push({
        id: data.id,
        name: data.name,
        tagline: data.tagline,
        price: data.price,
        quantity: quantity,
        image_url: data.image_url,
      });
    }

    setOrder([...order]);
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Beer.Provider
      value={{ DBBeers, beerList, setBeerList, setDBBeers, order, setOrder, addToCart }}
    >
      {children}
    </Beer.Provider>
  );
};
export default BeerProvider;
