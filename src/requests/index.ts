import axios from "axios";
import { PUNK_API } from "config/api.config";

export const getBeers = async () => {
  const res = await axios.get(`${PUNK_API}/beers`);
  return res.data;
};

export const getBeerById = async (beerId: string) => {
  const res = await axios.get(`${PUNK_API}/beers/${beerId}`);
  return res.data;
};
