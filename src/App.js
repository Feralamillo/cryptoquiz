import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './ui/header/Header';
import Currencies from './ui/sections/currencies/Currencies';
import QuizLogo from './ui/sections/quiz/QuizLogo';
import QuizSymbol from './ui/sections/quiz/QuizSymbol';
import QuizPrice from './ui/sections/quiz/QuizLogo';
import Ranking from './ui/sections/ranking/Ranking';
import Rollon from './ui/sections/rollon/Rollon';
import Footer from './ui/footer/Footer';

import './App.css';

class App extends Component {
    state = {
        users: [],
        store: [],
    };

    componentDidMount() {
        axios
            .get(
                'https://randomuser.me/api/?results=10&inc=name,registered&nat=fr',
            )
            .then(json => console.log(json.data.results[0].name.first));
    }

    // The API is https://www.cryptocompare.com/api/data/coinlist/

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Currencies} />
                    <Route path="/rollon" component={Rollon} />
                    <Route path="/quizlogo" component={QuizLogo} />
                    <Route path="/quizsymbol" component={QuizSymbol} />
                    <Route path="/quizprice" component={QuizPrice} />
                    <Route path="/ranking" component={Ranking} />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
