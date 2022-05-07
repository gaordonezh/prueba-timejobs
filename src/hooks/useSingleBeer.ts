import { useEffect, useState } from "react";
import { getBeerById } from "requests";
import { BeerProps } from "interfaces";
import getPrice from "utils/getPrice";

const useSingleBeer = (beerId: string) => {
  const [singleBeer, setSingleBeer] = useState<BeerProps>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtainSingleBeer();
  }, []);

  const obtainSingleBeer = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getBeerById(beerId);
      const result = res.map((item: BeerProps) => ({ ...item, price: getPrice(item.id) }));
      setSingleBeer(result[0]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, singleBeer };
};

export default useSingleBeer;
