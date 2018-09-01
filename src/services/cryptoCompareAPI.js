import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://www.cryptocompare.com/api/data/coinlist/';

class Cryptoinfo extends Component {
    state = {
        users: [],
        store: [],
    };

    componentDidMount() {
        axios.get(url).then(json => console.log(json));
    }

    render() {
        return <h3>This is something</h3>;
    }
}

export default Cryptoinfo;
