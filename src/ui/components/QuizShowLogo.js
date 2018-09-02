import React, { Component } from 'react';

/**
 * Child Component that shows the logo
 */

class QuizShowLogo extends Component {
  render() {
    const logo = this.props.logo;

    return (
      <div>
        <img className="imgquiz" src={logo} alt="Misterious logo" />
      </div>
    );
  }
}

export default QuizShowLogo;
