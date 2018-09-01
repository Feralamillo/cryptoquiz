import React, { Component } from 'react';
import axios from 'axios';

const url = "https://www.cryptocompare.com/api/data/coinlist/";

class Cryptoinfo extends Component {
  state = {
    users: [],
    store: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://randomuser.me/api/?results=10&inc=name,registered&nat=fr

`,
      ) /*
      .then(res => {
        const cryptos = res.data;
        this.setState({ cryptos });
      })*/
      .then(json => console.log(json));
  }

  render() {
    return (
      <ul>
        {this.state.cryptos.map(crypto => (
          <li>{crypto.name}</li>
        ))}
      </ul>
    );
  }
}

export default Cryptoinfo;
