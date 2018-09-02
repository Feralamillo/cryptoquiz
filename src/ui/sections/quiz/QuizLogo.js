import React, { Component } from 'react';
import './Quiz.css';
import QuizShowLogo from '../../components/QuizShowLogo';
import QuizFormLogo from '../../components/QuizFormLogo';

/**
 * Parent component that manages the info between the components
 */
class QuizLogo extends Component {
  static defaultProps = {
    logo: 'https://www.cryptocompare.com/media/19633/btc.png',
    cryptoRealName: 'Bitcoin',
  };

  state = {
    logo: this.props.logo,
    cryptoRealName: this.props.cryptoRealName,
  };

  handleNewData = function(updates) {
    this.setState(updates);
  };

  render() {
    // const logo = 'https://www.cryptocompare.com/media/19633/btc.png';
    // const logo2 = 'https://www.cryptocompare.com/media/20646/eth_logo.png';

    const logo = this.state.logo;
    const cryptoRealName = this.state.cryptoRealName;

    return (
      <div className="mainQuiz">
        <div className="container">
          <QuizShowLogo logo={logo} />
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
