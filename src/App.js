import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './ui/header/Header';
import Currencies from './ui/sections/currencies/Currencies';
import Quiz from './ui/sections/quiz/Quiz';
import Ranking from './ui/sections/ranking/Ranking';
import Rollon from './ui/sections/rollon/Rollon';
import Footer from './ui/footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Currencies} />
          <Route path="/rollon" component={Rollon} />
          <Route path="/quizlogo" component={Quiz} />
          <Route path="/ranking" component={Ranking} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
