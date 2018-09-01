import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <img src="https://www.cryptocompare.com/media/20646/eth_logo.png" />
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

export default Quiz;
