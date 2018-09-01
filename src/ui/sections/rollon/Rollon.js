import React, { Component } from 'react';
import './Rollon.css';

class Rollon extends Component {
    render() {
        return (
            <div class="logo_slider">
                <ul>
                    <li>
                        <a href="">
                            <img
                                src="https://www.cryptocompare.com/media/20646/eth_logo.png"
                                alt="ethereum"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src="https://www.cryptocompare.com/media/19633/btc.png"
                                alt="bitcoin"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                src="https://www.cryptocompare.com/media/19782/litecoin-logo.png"
                                alt="litecoin"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Rollon;
