import React, { Component } from 'react';
import './Currencies.css';
import api from '../../../services/cryptoAPI';

class Currencies extends Component {
  componentDidMount() {
    api
      .getAlldata()
      .then(res => {
        const allData = Object.values(res.data.Data);
        console.log(allData);
        const randomIndex = Math.floor(Math.random() * allData.length);
        console.log(randomIndex);
        console.log(allData[randomIndex]);
        const crypto = allData[randomIndex];
        console.log(`The name of the Coin is ${crypto.CoinName}`);
        console.log(`The Symbol of the Coin is ${crypto.Name}`);
        console.log(
          `The Image of the Coin is http://cryptocompare.com${crypto.ImageUrl}`,
        );
        console.log(`The Prooftype of the Coin is ${crypto.ProofType}`);
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
                <b>Coin Name: {crypto.CoinName}</b>
              </h4>
              <p> Symbol: ETH</p>
              <p>ProofType: PoW</p>
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
                <b>Coin Name: Bitcoin</b>
              </h4>
              <p>Symbol: BTC</p>
              <p>ProofType: PoW</p>
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
                <b>Coin Name: Litecoin</b>
              </h4>
              <p>Symbol: LTC</p>
              <p>ProofType: PoW</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Currencies;
