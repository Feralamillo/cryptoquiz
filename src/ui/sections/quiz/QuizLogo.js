import React, { Component } from 'react';
import './Quiz.css';

class QuizLogo extends Component {
  state = {};

  OnFormSubmit = e => {
    e.preventDefault();
    const cryptoName = this.refs.cryptoName.value;
    const cryptoRealName = 'Bitcoin';

    if (cryptoName.length > 0) {
      this.refs.cryptoName.value = '';
      if (cryptoName === cryptoRealName) {
        alert('Congratulations!!');
      } else {
        alert("Sorry, you didn't make it this time");
      }
    }
  };

  render() {
    const logo = 'https://www.cryptocompare.com/media/19633/btc.png';

    return (
      <div className="mainQuiz">
        <div className="container">
          <img className="imgquiz" src={logo} alt="Misterious logo" />
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

export default QuizLogo;
