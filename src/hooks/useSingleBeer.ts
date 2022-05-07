import { useEffect, useState } from "react";
import { getBeerById } from "requests";
import { BeerProps } from "interfaces";
import getPrice from "utils/getPrice";
import sleep from "utils/sleep";

const useSingleBeer = (beerId: string) => {
  const [singleBeer, setSingleBeer] = useState<BeerProps>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtainSingleBeer();
    // eslint-disable-next-line
  }, []);

  const obtainSingleBeer = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getBeerById(beerId);
      const result = res.map((item: BeerProps) => ({ ...item, price: getPrice(item.id) }));
      setSingleBeer(result[0]);
      await sleep(500);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, singleBeer };
};

export default useSingleBeer;
