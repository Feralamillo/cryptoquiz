import React, { Component } from 'react';
import './Quiz.css';
import swal from 'sweetalert2';

class QuizSymbol extends Component {
  OnFormSubmit = e => {
    e.preventDefault();
    const cryptoName = this.refs.cryptoName.value;
    const cryptoRealName = 'Bitcoin';

    if (cryptoName.length > 0) {
      this.refs.cryptoName.value = '';
      if (cryptoName === cryptoRealName) {
        swal({
          title: 'Congratulations!!',
          text: 'Your answer is correct',
          type: 'success',
        });
      } else {
        swal({
          title: 'Wrong :(',
          text: `The answer is ${cryptoRealName}`,
          type: 'error',
        });
      }
    }
  };

  render() {
    const cryptoSymbol = 'BTC';

    return (
      <div className="mainQuiz">
        <div className="container">
          <h2>{cryptoSymbol}</h2>
          <h3>What's the name of this crypto?</h3>

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
      </div>
    );
  }
}

export default QuizSymbol;
