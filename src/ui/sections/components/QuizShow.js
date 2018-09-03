import React, { Component } from 'react';

/**
 * Child Component that shows the logo
 */
class QuizShow extends Component {
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

export default QuizShow;
