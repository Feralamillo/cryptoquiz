import axios from 'axios';

const urlAll = 'https://min-api.cryptocompare.com/data/all/coinlist';
const urlsingle =
  'https://min-api.cryptocompare.com/data/price?tsyms=USD&fsym=';

const api = {
  getAlldata: () => {
    return axios.get(urlAll);
  },
  getSingledata: sym => {
    const url = urlsingle + sym;
    return axios.get(url);
  },
};

export default api;
