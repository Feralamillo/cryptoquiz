import React, { Component } from 'react';
import swal from 'sweetalert2';
import * as values from '../../../values';
/**
 * Child component that gets the result from the user {input: cryptoName}
 * and validates if the answer is correct
 */
class QuizForm extends Component {
  onFormSubmit = e => {
    // avoids refreshing when clicking
    e.preventDefault();
    const updates = {};
    const cryptoName = this.refs.cryptoName.value;
    const cryptoRealName = this.props.cryptoRealName;

    /**
     * If the answer is correct, it shows another Coin
     * BUT if it fails the participant has to write the correct value.
     */

    if (cryptoName.length > 0) {
      this.refs.cryptoName.value = '';
      if (cryptoName.toUpperCase() === cryptoRealName.toUpperCase()) {
        swal({
          title: values.titleSuccess,
          text: values.textSuccess,
          type: 'success',
        });
        /**
         * Update the state with new values from the API
         * How?? When calling the API method it doens't send the state :(
         */
        updates.logo = values.logoTest2;
        updates.symbol = values.symbolTest2;
        updates.cryptoRealName = values.cryptoRealNameTest2;
      } else {
        swal({
          title: values.titleWrong,
          text: values.textWrong + cryptoRealName,
          type: 'error',
        });
      }
    }
    this.props.onNewData(updates);
  };

  render() {
    return (
      <div>
        <form className="quizform" onSubmit={this.onFormSubmit}>
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

export default QuizForm;
