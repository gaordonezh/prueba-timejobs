import { useEffect, useState } from "react";
import { getBeers } from "requests";
import { BeerProps } from "interfaces";
import getPrice from "utils/getPrice";

const useBeers = () => {
  const [beers, setBeers] = useState<Array<BeerProps>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtainBeers();
  }, []);

  const obtainBeers = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getBeers();
      const result = res.map((item: BeerProps) => ({ ...item, price: getPrice(item.id) }));

      setBeers([...result]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, beers, obtainBeers };
};

export default useBeers;
