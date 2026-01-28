import { URL_API_CONTRY as url } from "../config/constans.jsx";

export function UrlData(path) {
  return fetch(`${url}${path}`)
    .then((data) => data.json());
}
