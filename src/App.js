import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import api from './services/cryptoAPI';

import Header from './ui/header/Header';
import Currencies from './ui/sections/currencies/Currencies';
import QuizLogo from './ui/sections/quiz/QuizLogo';
import QuizSymbol from './ui/sections/quiz/QuizSymbol';
import QuizPrice from './ui/sections/quiz/QuizPrice';
import Ranking from './ui/sections/ranking/Ranking';
import Rollon from './ui/sections/rollon/Rollon';
import Footer from './ui/footer/Footer';

import './App.css';

class App extends Component {
  componentDidMount() {
    api
      .getAlldata()
      .then(res => {
        console.log(res.data.Data);
      })
      .catch(console.eror);
  }

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
