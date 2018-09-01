import React, { Component } from 'react';
import './Quiz.css';

class QuizLogo extends Component {
  render() {
    return (
      <div className="mainQuiz">
        <div className="container">
          <img
            className="imgquiz"
            src="https://www.cryptocompare.com/media/19633/btc.png"
            alt="Misterious logo"
          />

          <h3>What's the name of this crypto?</h3>

          <form className="quizform">
            <div>
              <input
                type="text"
                ref="cryptocurrency"
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
