import React, { Component } from 'react';
import swal from 'sweetalert2';
import './Quiz.css';
import api from '../../../services/cryptoAPI';

class QuizPrice extends Component {
  static defaultProps = {
    priceCrypto: 200,
  };

  state = {
    priceCrypto: this.props.priceCrypto,
  };

  /**
   * Call API to get information about the price
   */
  componentDidMount() {
    api
      .getSingledata('ETH') // pass the variable of the crypto (random that comes from all the cryptos)
      .then(res => {
        const SingleData = res.data.USD;
        // Modify state getting the price of Crypto
        this.setState({
          priceCrypto: SingleData,
        });
      })
      .catch(console.eror);
  }

  /**
   * Manages the data once the form has been submitted
   */
  OnFormSubmit = e => {
    e.preventDefault();
    const priceCrypto = 295;
    const rangeLow = priceCrypto * 0.95;
    const rangeHigh = priceCrypto * 1.05;
    const priceInput = parseFloat(this.refs.priceInput.value);

    console.log(
      `Precio Crypto ${priceCrypto}, Rango inferior ${rangeLow}, Rango superior ${rangeHigh}, Precio enviado ${priceInput}`,
    );

    console.log(priceInput);

    if (priceInput >= rangeLow && priceInput <= rangeHigh) {
      swal({
        title: 'Congratulations!!',
        text: 'Your answer was correct',
        type: 'success',
      });
    } else {
      swal({
        title: 'Wrong :(',
        text: `The answer is ${priceCrypto}`,
        type: 'error',
      });
    }
  };

  render() {
    console.log(this.state.priceCrypto);
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
                type="number"
                ref="priceInput"
                placeholder="Aproximate price in USD"
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
