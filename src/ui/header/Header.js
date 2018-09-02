import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink
          className="navitem"
          exact
          to="/"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Currencies
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/rollon"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Rollon
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/quizlogo"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          QuizLogo
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/quizsymbol"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          QuizSymbol
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/quizprice"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          QuizPrice
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/ranking"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Ranking
        </NavLink>
      </div>
    );
  }
}

export default Header;
