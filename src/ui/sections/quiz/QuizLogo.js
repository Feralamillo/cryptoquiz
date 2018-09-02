import React, { Component } from 'react';
import swal from 'sweetalert2';
import './Quiz.css';
import api from '../../../services/cryptoAPI';

/**
 * Child Component that shows the logo
 */
class QuizShowLogo extends Component {
  render() {
    const logo = this.props.logo;
    const symbol = this.props.symbol;

    return (
      <div>
        <img className="imgquiz" src={logo} alt="Misterious logo" />
        <h2>{symbol}</h2>
      </div>
    );
  }
}

/**
 * Child component that gets the result from the user {input: cryptoName}
 * and validates if the answer is correct
 */
class QuizFormLogo extends Component {
  OnFormSubmit = e => {
    // avoids refreshing when clicking
    e.preventDefault();
    const updates = {};
    const cryptoName = this.refs.cryptoName.value;
    const cryptoRealName = this.props.cryptoRealName;

    /**
     * If the answer is correct, it shows another Coin
     * BUT if it fails the participant has to write the correct value.
     */

    if (cryptoName.length > 0) {
      this.refs.cryptoName.value = '';
      if (cryptoName.toUpperCase() === cryptoRealName.toUpperCase()) {
        swal({
          title: 'Congratulations!!',
          text: 'Your answer is correct',
          type: 'success',
        });
        /**
         * Update the state with new values from the API
         * How?? When calling the API method it doens't send the state :(
         */
        updates.logo = '/media/33842910/bmx.jpg';
        updates.symbol = 'TRY';
        updates.cryptoRealName = 'ItWillWork';
      } else {
        swal({
          title: 'Wrong :(',
          text: `The answer is ${cryptoRealName}`,
          type: 'error',
        });
      }
    }
    this.props.onNewData(updates);
  };

  render() {
    return (
      <div>
        <form className="quizform" onSubmit={this.OnFormSubmit}>
          <div>
            <input
              type="text"
              ref="cryptoName"
              placeholder="Enter name of Cryptocurrency"
            />
            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * Parent component that manages the info between the components
 */
class QuizLogo extends Component {
  static defaultProps = {
    logo: '/media/34478149/prochain.png',
    symbol: 'PTC',
    cryptoRealName: 'Bitcoin',
  };

  state = {
    logo: this.props.logo,
    symbol: this.props.symbol,
    cryptoRealName: this.props.cryptoRealName,
  };

  componentDidMount() {
    api
      .getAlldata()
      .then(res => {
        const allData = Object.values(res.data.Data);
        const randomIndex = Math.floor(Math.random() * allData.length);
        console.log(randomIndex);
        console.log(allData[randomIndex]);
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
    console.log(updates);
  };

  render() {
    const logo = 'http://cryptocompare.com' + this.state.logo;
    const symbol = this.state.symbol;
    const cryptoRealName = this.state.cryptoRealName;

    return (
      <div className="mainQuiz">
        <div className="container">
          <QuizShowLogo logo={logo} symbol={symbol} />
          <h3>What's the name of this crypto?</h3>
          <QuizFormLogo
            cryptoRealName={cryptoRealName}
            onNewData={this.handleNewData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default QuizLogo;
