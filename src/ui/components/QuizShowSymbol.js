import React, { Component } from 'react';

/**
 * Child Component that shows the logo
 */

class QuizShowSymbol extends Component {
  render() {
    const symbol = this.props.symbol;

    return (
      <div>
        <h2>{symbol}</h2>
      </div>
    );
  }
}

export default QuizShowSymbol;
