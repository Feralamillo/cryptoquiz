const state = {
  data: null,
};
const subscribers = [];

export default {
  getState: cb => {
    subscribers.push(cb);
  },
  setState: data => {
    state.data = data;
    subscribers.forEach(cb => cb(data));
    // console.log('data has changed', state.data)
  },
};
