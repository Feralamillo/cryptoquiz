import axios from 'axios';

const url = 'https://min-api.cryptocompare.com/data/all/coinlist';

const api = {
  getAlldata: () => {
    return axios.get(url);
  },
};

export default api;
