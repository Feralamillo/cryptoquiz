import React, { Component } from 'react';
import './Currencies.css';
import api from '../../../services/cryptoAPI';

class Currencies extends Component {
  componentDidMount() {
    api
      .getAlldata()
      .then(res => {
        console.log(res.data.Data);
      })
      .catch(console.eror);
  }

  render() {
    return (
      <div className="grid">
        <div className="row">
          <div className="card">
            <img
              className="imgcurrencies"
              src="https://www.cryptocompare.com/media/20646/eth_logo.png"
              alt="Ethereum"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h4>
                <b>Ethereum</b>
              </h4>
              <p>ETH</p>
            </div>
          </div>
          <div className="card">
            <img
              className="imgcurrencies"
              src="https://www.cryptocompare.com/media/19633/btc.png"
              alt="Bitcoin"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h4>
                <b>Bitcoin</b>
              </h4>
              <p>BTC</p>
            </div>
          </div>
          <div className="card">
            <img
              className="imgcurrencies"
              src="https://www.cryptocompare.com/media/19782/litecoin-logo.png"
              alt="Litecoin"
              style={{ width: '100%' }}
            />
            <div className="container">
              <h4>
                <b>Litecoin</b>
              </h4>
              <p>LTC</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Currencies;
