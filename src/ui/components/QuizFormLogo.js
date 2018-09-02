import React, { Component } from 'react';
import swal from 'sweetalert2';

/**
 * Child component that gets the result from the user {input: cryptoName}
 * and validates if the answer is correct
 */
class QuizFormLogo extends Component {
  OnFormSubmit = e => {
    e.preventDefault();
    const updates = {};
    const cryptoName = this.refs.cryptoName.value;
    const cryptoRealName = this.props.cryptoRealName;

    if (cryptoName.length > 0) {
      this.refs.cryptoName.value = '';
      if (cryptoName.toUpperCase() === cryptoRealName.toUpperCase()) {
        swal({
          title: 'Congratulations!!',
          text: 'Your answer is correct',
          type: 'success',
        });
        updates.logo = 'https://www.cryptocompare.com/media/20646/eth_logo.png';
        updates.cryptoRealName = 'Ethereum';
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

export default QuizFormLogo;
