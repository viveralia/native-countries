import keys from "../config/keys";

const globalFetcher = async (endpoint: string) => {
  const url = keys.BASE_URL + endpoint;
  const res = await fetch(url);
  return await res.json();
};

export default globalFetcher;
