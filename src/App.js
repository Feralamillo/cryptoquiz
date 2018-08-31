import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './ui/header/Header';
import Currencies from './ui/Currencies';
import Quiz from './ui/Quiz';
import Ranking from './ui/Ranking';
import Footer from './ui/footer/Footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CryptoQuiz</h1>
          </header>
          <Header />
          <Route path="/" exact="true" component={Currencies} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/ranking" component={Ranking} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
