import React, { Component } from 'react';
import './Quiz.css';
import api from '../../../services/cryptoAPI';

class QuizPrice extends Component {
  state = {
    priceCrypto: 200,
  };

  componentDidMount() {
    api
      .getSingledata('ETH') // pass the variable of the crypto (random that comes from all the cryptos)
      .then(res => {
        console.log(res.data.USD);
        // Modify state getting the price of Crypto
      })
      .catch(console.eror);
  }

  OnFormSubmit = e => {
    e.preventDefault();
    const priceCrypto = 295;
    const rangeLow = priceCrypto * 0.95;
    const rangeHigh = priceCrypto * 1.05;

    const priceInput = this.refs.priceInput.value;

    console.log(priceInput);

    if (priceInput >= { rangeLow } && priceInput <= { rangeHigh }) {
      alert('It Works!!');
    } else {
      alert("Sorry, you didn't achieve it. Try Again");
    }
  };

  render() {
    return (
      <div className="mainQuiz">
        <div className="container">
          <img
            className="imgquiz"
            src="https://www.cryptocompare.com/media/20646/eth_logo.png"
            alt="ethereum"
          />
          <h2>ETH</h2>
          <h3>What's the aproximate price of this crypto?</h3>
          <form className="quizform" onSubmit={this.OnFormSubmit}>
            <div>
              <input
                type="text"
                ref="priceInput"
                placeholder="Enter aproximate price of Cryptocurrency"
              />
            </div>
            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizPrice;
