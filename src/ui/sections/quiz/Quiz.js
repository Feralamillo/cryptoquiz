import React, { Component } from 'react';
import './Quiz.css';
import QuizShow from '../components/QuizShow';
import QuizForm from '../components/QuizForm';
import api from '../../../services/cryptoAPI';
import * as values from '../../../values';

/**
 * Parent component that manages the info between the components
 */
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: values.logoTest,
      symbol: values.symbolTest,
      cryptoRealName: values.cryptoRealNameTest,
    };
    this.handleNewData = this.handleNewData.bind(this);
  }

  componentDidMount() {
    api
      .getAlldata()
      .then(res => {
        const allData = Object.values(res.data.Data);
        const randomIndex = Math.floor(Math.random() * allData.length);
        const crypto = allData[randomIndex];
        this.setState({
          logo: crypto.ImageUrl,
          cryptoRealName: crypto.CoinName,
          symbol: crypto.Name,
        });
        console.log(`The name of the Coin is ${crypto.CoinName}`);
        console.log(`The Symbol of the Coin is ${crypto.Name}`);
        console.log(
          `The Image of the Coin is http://cryptocompare.com${crypto.ImageUrl}`,
        );
        console.log(`The Prooftype of the Coin is ${crypto.ProofType}`);
      })
      .catch(console.eror);
  }

  handleNewData = function(updates) {
    this.setState(updates);
  };

  render() {
    const logo = values.urlAPI + this.state.logo;
    const symbol = this.state.symbol;
    const cryptoRealName = this.state.cryptoRealName;

    return (
      <div className="mainQuiz">
        <div className="container">
          <QuizShow logo={logo} symbol={symbol} />
          <h3>What's the name of this crypto?</h3>
          <QuizForm
            cryptoRealName={cryptoRealName}
            onNewData={this.handleNewData}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
