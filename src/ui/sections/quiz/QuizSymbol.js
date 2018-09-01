import React, { Component } from 'react';
import './Quiz.css';

class QuizSymbol extends Component {
  render() {
    return (
      <div className="mainQuiz">
        <div className="container">
          <h2>BTC</h2>
          <h3>What's the name of this crypto?</h3>

          <form className="quizform">
            <div>
              <input
                type="text"
                ref="cryptocurrency"
                placeholder="Enter name of Cryptocurrency"
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

export default QuizSymbol;
