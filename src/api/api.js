import axios from "axios";

export const getExchangeRates = () => {
  return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.data);
}