import { fetchJSON } from "./fetch-json";


const API_URL = `${process.env.REACT_APP_DOMAIN}`;

function call(path, options) {
  const url = `${API_URL}${path}`;

  return fetchJSON(url, options);
}

const get = (path) => {
  return call(path, { method: "GET" });
};

export const http = {
  get,
};
