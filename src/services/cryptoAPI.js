import axios from 'axios';

const urlAll = 'https://min-api.cryptocompare.com/data/all/coinlist';

const api = {
  getAlldata: () => {
    return axios.get(urlAll);
  },
};

export default api;
