import React, { Component } from 'react';
import './Quiz.css';
import api from '../../../services/cryptoAPI';

class QuizPrice extends Component {
  componentDidMount() {
    api
      .getSingledata('ETH')
      .then(res => {
        console.log(res.data);
      })
      .catch(console.eror);
  }

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
          <form className="quizform">
            <div>
              <input
                type="text"
                ref="cryptocurrency"
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
